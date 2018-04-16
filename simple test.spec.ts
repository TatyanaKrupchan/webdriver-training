import { browser } from "protractor";

describe('Simple webdriver test', function () {
    it('should open google search page', async function () {
        // Load the Google search homepage.
        await browser.waitForAngularEnabled(false);
        await browser.get('http://www.google.com');
        console.log('Opening and closing Google page');
        // var pageTitle = element(by.css('title'));

        // Assert that the text element has the expected value.
        // Protractor patches 'expect' to understand promises.

        //  expect(pageTitle).toBe('Google')

        await browser.quit()
    });
});