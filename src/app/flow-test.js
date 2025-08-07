// Simple test script to validate segmentation user flow
// Run this in your browser console when on the main GreenPrint page

(function testUserFlow() {
  // First check if we're on the right page
  if (!window.location.pathname.includes('/greenprint')) {
    console.error('Please navigate to /greenprint page first');
    return;
  }
  
  console.log('🟢 Starting segmentation user flow test...');
  
  // Find the experienced trader button
  const experiencedButtons = Array.from(document.querySelectorAll('div[class*="cursor-pointer"]'))
    .filter(el => el.textContent.includes('Been around the block'));
  
  if (experiencedButtons.length === 0) {
    console.error('❌ Could not find experienced trader button');
    return;
  }
  
  console.log('🟢 Found experienced trader button');
  
  // Test click handler
  // We'll replace the actual redirect with a console log in test mode
  
  const originalLocation = window.location.href;
  let redirectCalled = false;
  
  // Mock window.location.href
  const originalWindowLocationHref = Object.getOwnPropertyDescriptor(window.location, 'href');
  
  Object.defineProperty(window.location, 'href', {
    set: function(value) {
      console.log(`🟢 Redirect called to: ${value}`);
      redirectCalled = true;
      
      if (value.includes('/greenprint/experienced')) {
        console.log('✅ PASS: Redirect URL is correct!');
      } else {
        console.error('❌ FAIL: Redirect URL is not correct. Expected URL to contain /greenprint/experienced');
      }
      
      // Don't actually redirect in test mode
      return value;
    }
  });
  
  // Test click
  console.log('🟢 Clicking experienced trader button...');
  experiencedButtons[0].click();
  
  if (!redirectCalled) {
    console.error('❌ FAIL: Click did not trigger a redirect');
  }
  
  // Restore original window.location.href
  Object.defineProperty(window.location, 'href', originalWindowLocationHref);
  
  console.log('🟢 Test completed');
})(); 