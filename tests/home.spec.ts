import {test, expect} from '@playwright/test';
test('Verify the URL and the logo', async ({ page }) => {
    await page.goto('https://auspost.com.au/');
    // Check if the URL contains 'post'
    expect(page.url()).toContain('post');
    // Check if the logo is visible
    await expect(page.locator('#globallogo-480318-706350')).toBeVisible();
    
    
})