import { browser, ExpectedConditions, ElementFinder, ProtractorBrowser } from "protractor";
import { loginToApp } from './helper';

describe('Excersise 7', function () {
    const usernameByCss = '[name="username"]';
    it('should click every menu item and check page header', async function () {
        const adminLogin = 'admin';
        const adminPassword = 'admin';
        const appAddress = 'http://localhost/litecart/admin/';
        var webdriver = require('selenium-webdriver');
        await browser.waitForAngularEnabled(false);
        await browser.get(appAddress);
        console.log('Admin page opened');
        await loginToApp(adminLogin, adminPassword);

        let menu = browser.$('ul.list-vertical');
        let verticalMenuIsPresent = await menu.isPresent();
        expect(verticalMenuIsPresent).toBeTruthy(`Vertical menu is not present`);
        if (verticalMenuIsPresent) {
            console.log(`Going to menu`)
            await goThroughMenu();
        }

        await browser.sleep(5000);
        await browser.quit()
    });

    async function checkH1ElementIsPresent(): Promise<Boolean> {
        return browser.$('h1').isPresent();
    }

    async function goThroughMenu() {
        const mainMenuItemCss: string = 'li#app-';
        const enclosedMenuItemCss: string = 'ul.docs>li';
        const itemName: string = '.name';
        const linkCss: string = 'a';

        let mainItems: ElementFinder[] = await browser.$$(mainMenuItemCss).asElementFinders_();

        for (let i = 0; i < mainItems.length; i++) {
            mainItems = await browser.$$(mainMenuItemCss).asElementFinders_();
            let mainItemName: string = await mainItems[i].$(itemName).getText();
            console.log(`mainItemName = ${mainItemName}`);
            await mainItems[i].$(linkCss).click();
            expect(await checkH1ElementIsPresent()).toBeTruthy(`Item #${i + 1} in main menu (${mainItemName}) does not have h1 element`);
            console.log(`h1 element presence checked for main element. Proceeding to enclosed menu item for this main menu item`);

            mainItems = await browser.$$(mainMenuItemCss).asElementFinders_();
            let collectedEnclosedMenuItems: ElementFinder[] = await mainItems[i].$$(enclosedMenuItemCss).asElementFinders_();

            for (let j = 0; j < collectedEnclosedMenuItems.length; j++) {
                mainItems = await browser.$$(mainMenuItemCss).asElementFinders_();
                collectedEnclosedMenuItems = await mainItems[i].$$(enclosedMenuItemCss).asElementFinders_();
                let enclosedItemName: string = await collectedEnclosedMenuItems[j].$(itemName).getText();
                console.log(`enclosedItemName = ${enclosedItemName}`);
                await collectedEnclosedMenuItems[j].$(linkCss).click();
                expect(await checkH1ElementIsPresent()).toBeTruthy(`Item #${j + 1} ${enclosedItemName} for main menu (${mainItemName}) does not have h1 element`);
                console.log(`h1 element presence checked for enclosed element`);
            }
        }
    }

});