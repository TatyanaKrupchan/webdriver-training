import { browser, ExpectedConditions, ElementFinder, ProtractorBrowser, by } from "protractor";
import { loginToApp } from './helper';

describe('Excersise 7', function () {
    const usernameByCss = '[name="username"]';
    it('should click every menu item and check page header', async function () {
        const adminLogin = 'admin';
        const adminPassword = 'admin';
        const appAddress = 'http://localhost/litecart/admin/';
        await browser.waitForAngularEnabled(false);
        await browser.get(appAddress);
        console.log('Admin page opened');
        await loginToApp(adminLogin, adminPassword);

        let menu = browser.$('ul.list-vertical');
        let verticalMenuIsPresent = await menu.isPresent();
        expect(verticalMenuIsPresent).toBeTruthy(`Vertical menu is not present`);
        if (verticalMenuIsPresent) {
            console.log(`Going to menu`)
            await goToProductsList();
        }

        let productsNumber: ElementFinder[] = await productsElements();

        for (let i = 0; i < productsNumber.length; i++) {
            if (i > 0) { await goToProductsList(); }
            await goToProduct(i);
            console.log(`Records in console for product #${i+1} in the list:`);
            await getConsoleLog();
        }

        await browser.quit()
    });

    async function goToProductsList() {
        const mainMenuItemCss: string = 'li#app-';
        const enclosedMenuItemCss: string = 'ul.docs>li';
        const linkCss: string = 'a';
        const tableCss: string = 'form>table>tbody';
        const folderCss: string = 'tr.row';

        let mainItems: ElementFinder[] = await browser.$$(mainMenuItemCss).asElementFinders_();
        await mainItems[1].$(linkCss).click();
        mainItems = await browser.$$(mainMenuItemCss).asElementFinders_();
        let collectedEnclosedMenuItems: ElementFinder[] = await mainItems[1].$$(enclosedMenuItemCss).asElementFinders_();
        await collectedEnclosedMenuItems[0].$(linkCss).click();

        let table: ElementFinder = browser.$(tableCss);
        let folders: ElementFinder[] = await table.$$(folderCss).asElementFinders_();
        await folders[1].$('a').click();
    }

    async function productsElements(): Promise<ElementFinder[]> {
        const produtXpath: string = '//form[@name="catalog_form"]/table/tbody//td//img/..';
        let products: ElementFinder[] = await browser.element.all(by.xpath(produtXpath)).asElementFinders_();
        return products;
    }

    async function goToProduct(i: number) {
        let products: ElementFinder[] = await productsElements();
        await products[i].$('a').click();
    }

    async function getConsoleLog() {
        let logs = await browser.driver.manage().logs().get("browser");
        if (logs.length > 0) {
            console.log(logs);
        } else console.log(`No records found in console`);
    }

});