import { browser, ExpectedConditions } from "protractor";

describe('Simple webdriver test', function () {
    it('should open google search page', async function () {
        const adminLogin = 'admin';
        const adminPassword = 'admin';

        await browser.waitForAngularEnabled(false);
        await browser.get('http://localhost/litecart/admin/');
        console.log('Admin page opened');
        let usernameByCss = '[name="username"]'

        await browser.wait(ExpectedConditions.visibilityOf(browser.$('[name="login_form"]')), 5);

        // let usernameField = browser.findElement(by.css(usernameByCss))
        if (await browser.$(usernameByCss).isPresent()) {
            await browser.findElement(by.css(usernameByCss)).sendKeys(adminLogin);
            console.log(`Username "${adminLogin}" inserted`)
        }
        else console.log(`Username field is not present in the screen`)

        //let passwordField = await browser.$('[name="password"]')
        if (await browser.$('[name="password"]').isPresent()) {
            await browser.$('[name="password"]').sendKeys(adminPassword);
            console.log(`Password "${adminPassword}" inserted`)
        }
        else console.log(`Password field is not present in the screen`)

        if (await browser.$('[name="remember_me"]').isPresent()) {
            let rememberMeIsChecked: boolean = await browser.$('[name="remember_me"]').isSelected();
            console.log(`Remember Me checkbox is selected: ${rememberMeIsChecked}`);
            //we do not need to remember the login, so if "Remember Me" is checked, we should uncheck it
            if (rememberMeIsChecked) {
                await browser.$('[name="remember_me"]').click();
            }
        }

        await browser.$('[name="login"]').click();

        await browser.wait(ExpectedConditions.visibilityOf(browser.$('[title="My Store"]')));
        console.log(`Admin was able to log in. Quitting the browser.`)

        await browser.quit()
    });
});