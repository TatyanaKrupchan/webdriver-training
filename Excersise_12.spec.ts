import { browser, ExpectedConditions, ElementFinder, Key } from "protractor";
import { loginToApp } from './helper';

describe('Excersise 12', function () {
    const usernameByCss = '[name="username"]';
    it('should add product', async function () {
        const appAddressLink = 'http://localhost/litecart/admin';
        const catalogCss = 'ul#box-apps-menu li';
        const catalogSubItemCss = 'ul.docs li#doc-catalog';
        const buttonsCanvasCc = 'td#content a.button';

        const adminLogin = 'admin';
        const adminPassword = 'admin';

        await browser.waitForAngularEnabled(false);
        await browser.get(appAddressLink);
        await loginToApp(adminLogin, adminPassword);
        console.log('Page opened');
        let menuItems: ElementFinder[] = await browser.$$(catalogCss).asElementFinders_();
        await menuItems[1].click();
        await browser.$(catalogSubItemCss).click();
        console.log(`Catalog page opened`);

        const tableCss = '.dataTable';
        let table: ElementFinder = browser.$(tableCss);
        let tableRows: ElementFinder[] = await table.$$('tr.row').asElementFinders_();
        let initialRownNumber: number = tableRows.length;

        let buttons: ElementFinder[] = await browser.$$(buttonsCanvasCc).asElementFinders_();
        await buttons[1].click();

        const radioButtonCss = '#tab-general label';
        let radioButtons: ElementFinder[] = await browser.$$(radioButtonCss).asElementFinders_();
        await radioButtons[0].click();

        const nameFieldCss = 'td [name="name[en]"]';
        let productName = `testitem_` + await generateText(10);
        await fillField(browser.$(nameFieldCss), productName);

        const codeFieldCss = 'td [name="code"]';
        await fillField(browser.$(codeFieldCss), await generateText(6, 'OnlyNumbers'));

        const quantityFieldCss = 'td [name="quantity"]'
        await fillField(browser.$(quantityFieldCss), '10');

        const fileUploadFieldCss = 'td [name="new_images[]"]';
        console.log(__dirname);
        const fileName = __dirname + '\\item.jpg';
        console.log(`fileName = ${fileName}`);
        await fillField(browser.$(fileUploadFieldCss), fileName);

        const informationTabCss = '[href="#tab-information"]';
        await browser.$(informationTabCss).click();

        const manufacturerFieldCss = '[name="manufacturer_id"]'
        await browser.wait(ExpectedConditions.visibilityOf(browser.$(manufacturerFieldCss)), 5000);

        await selectElementFromList(manufacturerFieldCss, 'option', 1);

        const shortDescriptionCss = '[name="short_description[en]"]';
        await fillField(browser.$(shortDescriptionCss), `testDuck` + await generateText(5));

        const longDescriptionCss = '.trumbowyg-editor';
        let longDescriptionElement: ElementFinder = browser.$(longDescriptionCss);
        await fillField(longDescriptionElement, `Long description testDuck` + await generateText(25));
        await longDescriptionElement.sendKeys(Key.END);
        await longDescriptionElement.sendKeys(Key.ENTER);
        await fillField(longDescriptionElement, `Final string`);

        const pricesTabCss = '[href="#tab-prices"]';
        await browser.$(pricesTabCss).click();
        await browser.wait(ExpectedConditions.visibilityOf(browser.$('#tab-prices')), 5000);

        const purchasePriceCss = '[name="purchase_price"]';
        await fillField(browser.$(purchasePriceCss), await generateText(3, 'OnlyNumbers'));

        const purchasePriceCcyCss = '[name="purchase_price_currency_code"]';
        await selectElementFromList(purchasePriceCcyCss, 'option', 1);

        const priceUsdCss = '[name="prices[USD]"]';
        await fillField(browser.$(priceUsdCss), await generateText(3, 'OnlyNumbers'));
        const priceEurCss = '[name="prices[EUR]"]';
        await fillField(browser.$(priceEurCss), await generateText(3, 'OnlyNumbers'));
        const priceEurTaxesCss = '[name="gross_prices[EUR]"]';
        await fillField(browser.$(priceEurTaxesCss), await generateText(3, 'OnlyNumbers'));

        const saveButtonCss = '[name="save"]';
        await browser.$(saveButtonCss).click();

        expect(await browser.$('h1:not(i)').getText()).toBe(`Catalog`, `Incorrect page title`);

        table = browser.$(tableCss);
        tableRows = await table.$$('tr.row').asElementFinders_();
        expect(initialRownNumber).toBe(tableRows.length - 1, `Initially there were ${initialRownNumber} rows, now ${tableRows.length}`);

        let itemIsFound: boolean = false;
        for (let i = 0; i < tableRows.length; i++) {
            let cells: ElementFinder[] = await tableRows[i].$$('td').asElementFinders_();
            if (await cells[2].$('a').getText() === productName) {
                itemIsFound = true; break;
            }
        }
        expect(itemIsFound).toBeTruthy(`Recently added item with the name ${productName} not found in the table`);

        await browser.quit();
    });

    async function selectElementFromList(cssElement: string, cssOption: string, elementToSelect: number) {
        let fieldElement: ElementFinder = browser.$(cssElement);
        await fieldElement.click();
        let optionItems: ElementFinder[] = await fieldElement.$$(cssOption).asElementFinders_();
        await optionItems[elementToSelect].click();
    }

    async function generateText(length: number, type?: string): Promise<string> {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        if (type === 'OnlyNumbers') { possible = "0123456789"; }

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    async function fillField(element: ElementFinder, text: string) {
        await element.sendKeys(text);
    }

});