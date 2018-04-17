import {browser, ExpectedConditions} from "protractor";

describe('Simple webdriver test', function () {
    it('should open google search page', async function () {
        const adminLogin = 'admin';
        const adminPassword = 'admin';

        await browser.waitForAngularEnabled(false);
        await browser.get('http://localhost/litecart/admin/');
        console.log('Admin page opened');
        let usernameByCss = '[name="username"]'

        await browser.wait(ExpectedConditions.visibilityOf(browser.$(usernameByCss)));

        let loginField = await browser.findElement(by.css(usernameByCss)).sendKeys(adminLogin);
        // let loginField = await browser.findElement(by.css('[name="username"]')).sendKeys(adminLogin);
        console.log(`Login "${adminLogin}" inserted`)
        let passwordField = await browser.$('[name="password"]').sendKeys(adminPassword);
        console.log(`Password "${adminPassword}" inserted`)

        let rememberMeIsChecked: boolean = await browser.$('[name="remember_me"]').isSelected();
        console.log(`Remember Me checkbox is selected: ${rememberMeIsChecked}`);
        //we do not need to remember the login, so if "Remember Me" is checked, we should uncheck it
        if (rememberMeIsChecked) {await browser.$('[name="remember_me"]').click();}

        await browser.$('[name="login"]').click();

        await browser.wait(ExpectedConditions.visibilityOf(browser.$('[title="My Store"]')));
        console.log(`Admin was able to log in. Quitting the browser.`)

        await browser.quit()
    });
});