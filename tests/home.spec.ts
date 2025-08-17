import {test, expect} from '@playwright/test';
test('Verify the URL and the logo', async ({ page }) => {
    await page.goto('https://auspost.com.au/');
    // Check if the URL contains 'post'
    expect(page.url()).toContain('post');
    // Check if the logo is visible
    await expect(page.locator('#globallogo-480318-706350')).toBeVisible();
    // Find the Search button and click on Search
    const iconByRole = page.getByRole('button', { name: 'search' });
    await iconByRole.click();
    //Fill the search input with 'India'
    await page.getByRole('combobox').fill('India');
    // Click the search button 
    //Search is not unique, so using a more specific selector
    await page.locator('.search-input-form').getByRole('button', { name: 'Search' }).click();
    // Verify that the search results are displayed
    await expect (page.locator('text=No Results found')).toBeVisible();

})