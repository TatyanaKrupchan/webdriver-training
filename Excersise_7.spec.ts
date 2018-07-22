import { browser, ExpectedConditions, ElementFinder, ProtractorBrowser } from "protractor";

describe('Excersise 7', function () {
    const usernameByCss = '[name="username"]';
    it('should click every menu item and check page header', async function () {
        const adminLogin = 'admin';
        const adminPassword = 'admin';
        const appAddress = 'http://localhost/litecart/admin/';
        const expectedMenu: { mainMenuItem: string, enclosedMenuItem: string[] }[] = [
            { mainMenuItem: 'Appearence', enclosedMenuItem: ['Template', 'Logotype'] },
            { mainMenuItem: 'Catalog', enclosedMenuItem: ['Catalog', 'Product Groups', 'Option Groups', 'Manufacturers', 'Suppliers', 'Delivery Statuses', 'Sold Out Statuses', 'Quantity Units', 'CSV Import/Export'] },
            { mainMenuItem: 'Countries', enclosedMenuItem: [] },
            { mainMenuItem: 'Currencies', enclosedMenuItem: [] },
            { mainMenuItem: 'Customers', enclosedMenuItem: ['Customers', 'CSV Import/Export', 'Newsletter'] },
            { mainMenuItem: 'Geo Zones', enclosedMenuItem: [] },
            { mainMenuItem: 'Languages', enclosedMenuItem: ['Languages', 'Storage Encoding'] },
            { mainMenuItem: 'Modules', enclosedMenuItem: ['Background Jobs', 'Customer', 'Shipping', 'Payment', 'Order Total', 'Order Success', 'Order Action'] },
            { mainMenuItem: 'Orders', enclosedMenuItem: ['Orders', 'Order Statuses'] },
            { mainMenuItem: 'Pages', enclosedMenuItem: [] },
            { mainMenuItem: 'Reports', enclosedMenuItem: ['Monthly Sales', 'Most Sold Products', 'Most Shopping Customers'] },
            { mainMenuItem: 'Settings', enclosedMenuItem: ['Store Info', 'Defaults', 'General', 'Listings', 'Images', 'Checkout', 'Advanced', 'Security'] },
            { mainMenuItem: 'Slides', enclosedMenuItem: [] },
            { mainMenuItem: 'Tax', enclosedMenuItem: ['Tax Classes', 'Tax Rates'] },
            { mainMenuItem: 'Translations', enclosedMenuItem: ['Search Translations', 'Scan Files', 'CSV Import/Export'] },
            { mainMenuItem: 'Users', enclosedMenuItem: [] },
            { mainMenuItem: 'vQmods', enclosedMenuItem: ['vQmods'] },
        ]

        var webdriver = require('selenium-webdriver');
        await browser.waitForAngularEnabled(false);
        await browser.get(appAddress);
        console.log('Admin page opened');
        await loginToApp(adminLogin, adminPassword);

        let menu = browser.$('ul.list-vertical');
        let verticalMenuIsPresent = await menu.isPresent();
        expect(verticalMenuIsPresent).toBeTruthy(`Vertical menu is not present`);
        if (verticalMenuIsPresent) {
            await goThroughMenu(expectedMenu);
        }

        await browser.quit()
    });

    async function goThroughMenu(menuStructure: { mainMenuItem: string, enclosedMenuItem: string[] }[]) {
        const mainMenuItemCss: string = 'li#app-';
        const enclosedMenuItemCss: string = 'ul.docs>li';
        const itemName: string = '.name';
        const linkCss: string = 'a';

        let mainItems: ElementFinder[] = await browser.$$(mainMenuItemCss).asElementFinders_();
        expect(mainItems.length).toBe(menuStructure.length, `Number of items in main menu is ${mainItems.length} while expected ${menuStructure.length}`);

        let numberOfItems: number;
        mainItems.length < menuStructure.length ? numberOfItems = mainItems.length : numberOfItems = menuStructure.length
        for (let i = 0; i < numberOfItems; i++) {
            let mainItems: ElementFinder[] = await browser.$$(mainMenuItemCss).asElementFinders_();
            let mainItemName: string = await mainItems[i].$(itemName).getText();
            console.log(`mainItemName = ${mainItemName}`);
            expect(mainItemName).toBe(menuStructure[i].mainMenuItem, `Item #${i + 1} in main menu has name ${mainItemName} which differs from ${menuStructure[i].mainMenuItem}`);

            if (mainItemName === menuStructure[i].mainMenuItem) {
                await mainItems[i].$(linkCss).click();
                expect(await checkH1ElementIsPresent()).toBeTruthy(`Item #${i + 1} in main menu (${mainItemName}) does not have h1 element`);
                console.log(`h1 element presence checked for main element. Proceeding to enclosed menu item for this main menu item`);

                mainItems = await browser.$$(mainMenuItemCss).asElementFinders_();
                let collectedEnclosedMenuItems: ElementFinder[] = await mainItems[i].$$(enclosedMenuItemCss).asElementFinders_();
                expect(collectedEnclosedMenuItems.length).toBe(menuStructure[i].enclosedMenuItem.length,
                    `Number of enclosed items for main menu item ${mainItemName} is ${collectedEnclosedMenuItems.length} while expected ${menuStructure[i].enclosedMenuItem.length}`);

                let numberOfEnclosedItems: number
                collectedEnclosedMenuItems.length < menuStructure[i].enclosedMenuItem.length ? numberOfEnclosedItems = collectedEnclosedMenuItems.length : numberOfEnclosedItems = menuStructure[i].enclosedMenuItem.length
                if (numberOfEnclosedItems > 0) {
                    for (let j = 0; j < numberOfEnclosedItems; j++) {
                        mainItems = await browser.$$(mainMenuItemCss).asElementFinders_();
                        let collectedEnclosedMenuItems: ElementFinder[] = await mainItems[i].$$(enclosedMenuItemCss).asElementFinders_();
                        let enclosedItemName: string = await collectedEnclosedMenuItems[j].$(itemName).getText();
                        console.log(`enclosedItemName = ${enclosedItemName}`);
                        expect(enclosedItemName).toBe(menuStructure[i].enclosedMenuItem[j],
                            `(${mainItemName} main menu item) Sub-Item #${j + 1} with name ${enclosedItemName} differs from ${menuStructure[i].enclosedMenuItem[j]}`);

                        if (enclosedItemName === menuStructure[i].enclosedMenuItem[j]) {
                            await collectedEnclosedMenuItems[j].$(linkCss).click();
                            expect(await checkH1ElementIsPresent()).toBeTruthy(`Item #${j + 1} ${enclosedItemName} for main menu (${mainItemName}) does not have h1 element`);
                            console.log(`h1 element presence checked for enclosed element`);
                        }
                    }
                } else console.log(`Main menu item ${mainItemName} contains no enclosed menu items`);
            }
        }
    }

    async function checkH1ElementIsPresent(): Promise<Boolean> {
        return browser.$('h1').isPresent();
    }

    async function loginToApp(login: string, password: string) {
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
        console.log(`Admin was able to log in. Quitting the browser.`)

    }
});