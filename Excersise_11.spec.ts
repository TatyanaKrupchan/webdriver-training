import { browser, ExpectedConditions, ElementFinder, ProtractorBrowser, Key } from "protractor";
import { fillField, generateText } from './helper';

describe('Excersise 11', function () {
    const usernameByCss = '[name="username"]';
    it('should create new user and login', async function () {
        const appLink = 'http://localhost/litecart/';
        const createNewUserLinkCss = '[name="login_form"]';
        const createAccountPageTitle = 'Create Account'
        const createAccountPageTitleCss = '#page-wrapper .title'
        const customerFormCss = '[name="customer_form"]';
        const country = 'united states';

        await browser.waitForAngularEnabled(false);
        await browser.get(appLink);
        console.log('Main Page opened');
        await browser.$(createNewUserLinkCss).$('tr:last-child').click();
        expect(await browser.$(createAccountPageTitleCss).getText()).toBe(createAccountPageTitle, `Incorrect page opened`)
        console.log(`Open page to create new account: DONE`);

        let fieldsToFill: ElementFinder[] = await browser.$(customerFormCss).$$('td').asElementFinders_();
        let formToFill: ElementFinder = await browser.$(customerFormCss);
        console.log(`Elements To Fill collected`);

        const firstNameFieldCss = '[name="firstname"]';
        const lastNameFieldCss = '[name="lastname"]';
        const address1FieldCss = '[name="address1"]';
        const cityFieldCss = '[name="city"]';
        const postcodeFieldCss = '[name="postcode"]';
        const emailFieldCss = '[name="email"]';
        const phoneFieldCss = '[name="phone"]';
        const passwordFieldCss = '[name="password"]';
        const confPasswordFieldCss = '[name="confirmed_password"]';
        const createAccountButtonCss = '[name="create_account"]';

        let firstName: string = `FN_` + await generateText(8);
        let lastName: string = `LN_` + await generateText(12);
        let address1: string = `A1_${await generateText(8)} ${await generateText(2, 'OnlyNumbers')}`;
        let city: string = `C_${await generateText(12)}`;
        let postcode: string = `${await generateText(5, 'OnlyNumbers')}`;
        let email: string = `${firstName}.${lastName}@${await generateText(10)}.${await generateText(3)}`;
        let phone: string = `1${await generateText(8, 'OnlyNumbers')}`;
        let password: string = `${await generateText(20)}`;
        console.log(`${email}, ${password}`);

        await fillField(await formToFill.$(firstNameFieldCss), firstName);
        await fillField(await formToFill.$(lastNameFieldCss), lastName);
        await fillField(await formToFill.$(address1FieldCss), address1);
        await fillField(await formToFill.$(cityFieldCss), city);
        await fillField(await formToFill.$(postcodeFieldCss), postcode);
        await fillField(await formToFill.$(emailFieldCss), email);
        await fillField(await formToFill.$(phoneFieldCss), phone);
        await fillField(await formToFill.$(confPasswordFieldCss), password);
        await fillField(await formToFill.$(passwordFieldCss), password);
        const countryFieldCss = 'b';

        let countryFieldElement: ElementFinder = formToFill.$('.select2-selection.select2-selection--single')
        await countryFieldElement.$(countryFieldCss).click();
        await fillField(await browser.$('input.select2-search__field'), country);
        await browser.$('input.select2-search__field').sendKeys(Key.ENTER, Key.TAB);
        
        const stateFiledCss = 'select[name="zone_code"]';
        let stateElement: ElementFinder = formToFill.$(stateFiledCss);
        await browser.executeScript("arguments[0].click();", stateElement);
        let stateItemElement: ElementFinder[] = await stateElement.$$('option').asElementFinders_();
        let stateItemNumber: number = +await generateText(2, 'OnlyNumbers');
        if (stateItemNumber > 50) { stateItemNumber = stateItemNumber - 50 };
        await stateItemElement[stateItemNumber].click();
        console.log(`State number = ${stateItemNumber}, state name = '${await stateItemElement[stateItemNumber].getText()}'`);
        await formToFill.$(createAccountButtonCss).click();

        await logout();
        await login(email, password);
        console.log(`Logged in again`);
        await browser.wait(ExpectedConditions.visibilityOf(browser.$('aside #box-account')), 5000);
        await logout();

        await browser.sleep(2000);
        await browser.quit()
    });

    async function logout() {
        const menuCss = 'aside #box-account'
        let liElements: ElementFinder[] = await browser.$(menuCss).$$('li>a').asElementFinders_();
        let logOutItem: ElementFinder = await liElements[liElements.length - 1]
        if (await logOutItem.getText() === 'Logout') { await logOutItem.click(); }
    }

    async function login(login: string, password: string) {
        await fillField(browser.$('aside [name="email"]'), login);
        await fillField(browser.$('aside [name="password"]'), password);
        await browser.$('aside button[name="login"]').click();
    }
});