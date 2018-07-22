import { browser, ExpectedConditions, ElementFinder, ProtractorBrowser } from "protractor";
import { loginToApp } from './helper';

describe('Excersise 9', function () {
    const usernameByCss = '[name="username"]';
    it('should check sorting', async function () {
        const appAddressCountries = 'http://localhost/litecart/admin/?app=countries&doc=countries';
        const appAddressGeoZones = ' http://localhost/litecart/admin/?app=geo_zones&doc=geo_zones';
        const tableRowCss = 'tr.row';
        const countryLinkCss = 'a';

        const adminLogin = 'admin';
        const adminPassword = 'admin';

        await browser.waitForAngularEnabled(false);
        await browser.get(appAddressCountries);
        await loginToApp(adminLogin, adminPassword);
        console.log('Page opened');
                let countries: ElementFinder[] = new Array<ElementFinder>();
                let res: ElementFinder[] = new Array<ElementFinder>();
                countries = await getArraysOfElements(tableRowCss, 4, 'td', countryLinkCss);
                let countryNames: string[] = new Array<string>();
                countryNames = await getArraysOfNames(countries, "text");
                console.log(`countryNames length = ${countryNames.length}`);
                let sortedCountryNames: string[] = countryNames.slice(0);
                await checkSorting(countryNames);
        
        console.log(`Starting second part. Switching to another page.`)
        await browser.get(appAddressGeoZones);
        let tableRows: ElementFinder[] = await browser.$$(tableRowCss).asElementFinders_();
        console.log(`Number of countries to check: ${tableRows.length}`);
        for (let i = 0; i < tableRows.length; i++) {
            if (i > 0) {
                await browser.get(appAddressGeoZones);
                tableRows = await browser.$$(tableRowCss).asElementFinders_();
            }
            let cells: ElementFinder[] = await tableRows[i].$$('td').asElementFinders_();
            let countryToOpen: string = await cells[2].$(countryLinkCss).getAttribute("text");
            await cells[2].$(countryLinkCss).click();
            await browser.wait(ExpectedConditions.visibilityOf(browser.$('table#table-zones')), 5);
            let regionRows: ElementFinder[] = await browser.$$("table tr").asElementFinders_();

            const regionNameCss = 'table#table-zones tr:not(.header) select:not(.select2-hidden-accessible)';
            let regions: ElementFinder[] = await browser.$$(regionNameCss).asElementFinders_();
            let regionNames: string[] = new Array<string>();
            console.log(`Number of regions for country ${countryToOpen} = ${regions.length}`);

            for (let j = 0; j < regions.length; j++) {
                let regionSelected = await regions[j].$('[selected]').isPresent();
                if (regionSelected) {
                    regionNames.push(await regions[j].$('[selected]').getAttribute("text"));
                }
            }
            await checkSorting(regionNames);
        }
        await browser.quit()
    });

    async function checkSorting(names: string[]) {
        let sortedNames: string[] = names.slice(0);
        // console.log(`County Names are:`);
        // console.log(sortedCountryNames);
        sortedNames.sort();
        for (let i = 0; i < names.length; i++) {
            expect(names[i]).toBe(sortedNames[i], `${i + 1} row in the table is incorrect: expected ${sortedNames[i]} while seen ${names[i]}`);
        }
    }

    async function getArraysOfNames(elements: ElementFinder[], attributeName: string): Promise<string[]> {
        let result: string[] = new Array<string>();
        for (let element of elements) {
            result.push(await element.getAttribute(attributeName));
        }
        return result;
    }

    async function getArraysOfElements(tableRowCss: string, elementsInArray: number, cellCss: string, elementCss: string): Promise<ElementFinder[]> {
        let tableRows: ElementFinder[] = await browser.$$(tableRowCss).asElementFinders_();
        let result: ElementFinder[] = new Array<ElementFinder>();
        for (let tableRow of tableRows) {
            let cells: ElementFinder[] = await tableRow.$$(cellCss).asElementFinders_();
            result.push(await cells[elementsInArray].$(elementCss));
        }
        console.log(`Result array length: ${result.length}`);
        // console.log(result[i]);
        return result;
    }
});