import { NextResponse } from 'next/server';

// Simple in-memory store for rate limiting
// In production, you would use Redis or another distributed solution
const rateLimit = new Map();

// Config
const BOOKING_PATH = '/greenprint/book';
const RATE_LIMIT_RESET_TIME = 60 * 1000; // 1 minute in milliseconds
const MAX_REQUESTS = 5; // Maximum requests per time window

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Only apply rate limiting to the booking page
  if (pathname.startsWith(BOOKING_PATH)) {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    
    // Get existing data for this IP
    const rateLimitData = rateLimit.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_RESET_TIME };
    
    // Reset if the time window has expired
    if (rateLimitData.resetTime < now) {
      rateLimitData.count = 0;
      rateLimitData.resetTime = now + RATE_LIMIT_RESET_TIME;
    }
    
    // Increment counter
    rateLimitData.count++;
    rateLimit.set(ip, rateLimitData);
    
    // Set headers to inform about rate limiting
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', MAX_REQUESTS.toString());
    response.headers.set('X-RateLimit-Remaining', Math.max(0, MAX_REQUESTS - rateLimitData.count).toString());
    response.headers.set('X-RateLimit-Reset', rateLimitData.resetTime.toString());
    
    // If rate limit exceeded, return 429 Too Many Requests
    if (rateLimitData.count > MAX_REQUESTS) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Too many requests', 
          message: 'Rate limit exceeded. Please try again later.' 
        }),
        { 
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitData.resetTime.toString(),
            'Retry-After': Math.ceil((rateLimitData.resetTime - now) / 1000).toString(),
          }
        }
      );
    }
    
    return response;
  }
  
  return NextResponse.next();
}

// Configure the middleware to only run for specific paths
export const config = {
  matcher: [
    '/greenprint/book/:path*',
  ],
}; 