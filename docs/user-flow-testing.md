# User Segmentation Flow Testing

This document outlines the testing procedures for the user segmentation flow in the GreenPrint application.

## Automated Test

You can run the automated test by:

1. Navigate to the GreenPrint home page (`/greenprint`)
2. Open your browser's developer console (F12 or right-click and "Inspect")
3. Copy and paste the contents of `src/app/flow-test.js` into the console
4. Press Enter to execute the test
5. Check the console for test results

## Manual Testing

### Test Case 1: Beginner Path Flow

**Steps:**
1. Navigate to the GreenPrint home page (`/greenprint`)
2. Verify that the segmentation modal appears
3. Click on the "New to this" option
4. Verify that the modal closes and you remain on the beginner page
5. Verify that all beginner content is displayed correctly

**Expected Results:**
- The segmentation modal should appear when you first visit the page
- Clicking "New to this" should close the modal
- You should remain on the same page (beginner version)
- The page should display content targeted at beginners

### Test Case 2: Experienced Path Flow

**Steps:**
1. Navigate to the GreenPrint home page (`/greenprint`)
2. Verify that the segmentation modal appears
3. Click on the "Been around the block" option
4. Verify that you are redirected to the experienced trader page (`/greenprint/experienced`)
5. Verify that the experienced trader page loads correctly

**Expected Results:**
- The segmentation modal should appear when you first visit the page
- Clicking "Been around the block" should redirect you to `/greenprint/experienced`
- The experienced page should load without errors
- The page should display content targeted at experienced traders including:
  - Market-neutral crypto arbitrage strategy hero section
  - What is GreenPrint section
  - Why You're Here section
  - Advanced Features section
  - What Makes Us Different section
  - Pricing Plans section
  - FAQ section
  - Footer with "Talk to a Professional" button

### Test Case 3: Direct Access to Experienced Page

**Steps:**
1. Navigate directly to the experienced trader page (`/greenprint/experienced`)
2. Verify that the page loads correctly without showing the segmentation modal

**Expected Results:**
- The experienced page should load without errors
- No segmentation modal should appear
- All experienced trader content should display correctly

## Responsive Testing

Perform these tests on:
- Desktop browser (width > 1024px)
- Tablet (width between 768px and 1024px)
- Mobile (width < 768px)

Verify that:
- The segmentation modal is properly centered and sized on all devices
- All buttons and interactive elements are properly sized for touch on smaller devices
- Content layout adjusts appropriately based on screen size

## UI/UX Testing

Verify that:
- The modal has sufficient contrast and is easy to read
- Button states (hover, active) provide clear visual feedback
- Modal appears with a smooth transition
- Redirection to the experienced page happens without noticeable delay

## Notes and Issues

Please document any issues found during testing in this section.

---

Last updated: July 15, 2024 