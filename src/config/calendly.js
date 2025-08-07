// Calendly Integration Configuration
// Replace these default URLs with your actual Calendly event links

export const calendlyConfig = {
  // Main consultation booking link
  consultationUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/derekmogi/30min",
  
  // Enterprise sales booking link
  enterpriseUrl: process.env.NEXT_PUBLIC_CALENDLY_SALES_URL || "https://calendly.com/derekmogi/30min",
  
  // Demo booking link (if needed)
  demoUrl: process.env.NEXT_PUBLIC_CALENDLY_DEMO_URL || "https://calendly.com/derekmogi/30min"
}; 