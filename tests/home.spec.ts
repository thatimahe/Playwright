import {test, expect} from '@playwright/test';
test('Verify the URL and the logo', async ({ page }) => {
    await page.goto('https://auspost.com.au/');
    expect(page.url()).toContain('post');
    await expect(page.locator('#globallogo-480318-706350')).toBeVisible();
    //await page.getByAltText('cwc-w-25-logo').click();
    //await expect(page.getByAltText('cwc-w-25-logo')).toBeVisible();
    
})