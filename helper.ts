import { browser, ExpectedConditions} from "protractor";

export async function loginToApp(login: string, password: string) {
    const usernameByCss = '[name="username"]';
    await browser.wait(ExpectedConditions.visibilityOf(browser.$('[name="login_form"]')), 5);
    if (await browser.$(usernameByCss).isPresent()) {
        await browser.findElement(by.css(usernameByCss)).sendKeys(login);
        console.log(`Username "${login}" inserted`)
    }
    else console.log(`Username field is not present in the screen`)

    if (await browser.$('[name="password"]').isPresent()) {
        await browser.$('[name="password"]').sendKeys(password);
        console.log(`Password "${password}" inserted`)
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
    console.log(`Admin was able to log in.`)
}
