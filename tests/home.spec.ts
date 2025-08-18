import {test, expect} from '@playwright/test';
test('Verify the URL and the logo', async ({ page }) => {
    await page.goto('https://auspost.com.au/');
    // Check if the URL contains 'post'
    expect(page.url()).toContain('post');
    // Check if the logo is visible
    await expect(page.locator('#globallogo-480318-706350')).toBeVisible();
    
})
    
test('Verify Search button is operational and able to search and get the result page', async ({ page }) => {
    await page.goto('https://auspost.com.au/');
    
    // Find the Search button and click on Search
    const iconByRole = page.getByRole('button', { name: 'search' });
    await iconByRole.click();
    //Fill the search input with 'India'
    // We can use getByRole or else we can also use getByPlaceholder
    //await page.getByRole('combobox').fill('India');
    
    
    const searchinput = page.getByPlaceholder('Search our site');
    await searchinput.fill('India')
    await searchinput.press('Enter');

    // To pause the execution and see the result
    // await page.pause();
    // we can use .press enter as above or else we can also use the below code getByRole
    // Click the search button 
    //Search is not unique, so using a more specific selector
    //await page.locator('.search-input-form').getByRole('button', { name: 'Search' }).click();
    // Verify that the search results are displayed
    //await expect (page.locator('text=items found')).toBeVisible();
    // we can also write the above line as below
    // await expect(page.getByText('items found')).toBeVisible();
    await expect(page.locator('.search-result__summary-total')).toContainText('items found');
    await page.pause();
})

