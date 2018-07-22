import { browser, ExpectedConditions, ElementFinder, ProtractorBrowser } from "protractor";
import { link } from "fs";

describe('Excersise 10', function () {
    const usernameByCss = '[name="username"]';
    it('should check product data ', async function () {
        const appAddress = 'http://localhost/litecart/';
        const campaignSectionCss = '#box-campaigns';
        const productNameCss = '.name';
        const productRegularPriceCss = '.regular-price';
        const productCampaingPriceCss = '.campaign-price';
        const productCss = '#box-product';
        const productTitleCss = '.title';

        await browser.waitForAngularEnabled(false);
        await browser.get(appAddress);
        console.log('Page opened');

        let productNameMainPageCampaignElement: ElementFinder = browser.$(campaignSectionCss);
        let campaignProductsElementsMainPage: ElementFinder[] = await productNameMainPageCampaignElement.$$('li').asElementFinders_();
        console.log(`Number of products in campaign: ${campaignProductsElementsMainPage.length}`);
        for (let i = 0; i < campaignProductsElementsMainPage.length; i++) {
            if (i > 0) {
                await browser.get(appAddress); 
                productNameMainPageCampaignElement = browser.$(campaignSectionCss);
                campaignProductsElementsMainPage = await productNameMainPageCampaignElement.$$('li').asElementFinders_();
            }

            let productNameMainPageElement: ElementFinder = campaignProductsElementsMainPage[i].$(productNameCss);
            let productNameMainPage: string = await productNameMainPageElement.getText();

            let productRegularPriceMainPageElement: ElementFinder = campaignProductsElementsMainPage[i].$(productRegularPriceCss);
            let productRegularPriceMainPage: string = await productRegularPriceMainPageElement.getText();
            let productRegularColorMainPage: string = await productRegularPriceMainPageElement.getCssValue("color");
            expect(await checkGreyColor(await getRGBValues(productRegularColorMainPage))).toBeTruthy(`Regular Price has incorrect color on the main page`);

            let productCampaignPriceMainPageElement: ElementFinder = campaignProductsElementsMainPage[i].$(productCampaingPriceCss);
            let productCampaignPriceMainPage: string = await productCampaignPriceMainPageElement.getText();
            let productCampaignColorMainPage: string = await productCampaignPriceMainPageElement.getCssValue("color");
            expect(await checkRedColor(await getRGBValues(productCampaignColorMainPage))).toBeTruthy(`Regular Price has incorrect color on the main page`);

            console.log(`For product #${i + 1}: ${productNameMainPage}, ${productRegularPriceMainPage}, ${productRegularColorMainPage}, ${productCampaignPriceMainPage}, ${productCampaignColorMainPage}`);

            await campaignProductsElementsMainPage[i].click();

            let productElement: ElementFinder = browser.$(productCss);
            let productName: string = await productElement.$(productTitleCss).getText();
            expect(productName).toBe(productNameMainPage, `Names are different: "${productNameMainPage}" is on main page, "${productName}" is on product page`);

            let productRegularPriceElement: ElementFinder = productElement.$(productRegularPriceCss);
            let productRegularPrice: string = await productRegularPriceElement.getText();
            let productRegularColor: string = await productRegularPriceElement.getCssValue("color");
            expect(await checkGreyColor(await getRGBValues(productRegularColor))).toBeTruthy(`Regular Price has incorrect color on the main page`);
            expect(productRegularPrice).toBe(productRegularPriceMainPage,
                `Regular price is defferent: "${productRegularPriceMainPage}" is on main page, "${productRegularPrice}" is on product page`);

            let productCampaignPriceElement: ElementFinder = productElement.$(productCampaingPriceCss);
            let productCampaignPrice: string = await productCampaignPriceElement.getText();
            let productCampaignColor: string = await productCampaignPriceElement.getCssValue("color");
            expect(await checkRedColor(await getRGBValues(productCampaignColor))).toBeTruthy(`Regular Price has incorrect color on the main page`);
            expect(productCampaignPrice).toBe(productCampaignPriceMainPage,
                `Campaign price is defferent: "${productCampaignPriceMainPage}" is on main page, "${productCampaignPrice}" is on product page`);
        }

        await browser.quit()
    });

    async function checkGreyColor(color: number[]): Promise<boolean> {
        let result: boolean = false;
        if (color.length === 3) {
            ((color[0] === color[1]) && (color[0] === color[2])) ? result = true : result = false
        } else { console.log(`Color format is incorrect`) }
        console.log(result);
        return result;
    }

    async function checkRedColor(color: number[]): Promise<boolean> {
        let result: boolean = false;
        if (color.length === 3) {
            ((color[1] === 0) && (color[2] === 0)) ? result = true : result = false
        } else { console.log(`Color format is incorrect`) }
        console.log(result);
        return result;
    }

    async function getRGBValues(color: string): Promise<number[]> {
        let result: number[] = [];
        let colorValues: string[] = [];
        let colorOnly: string = color.slice(5, -4);
        console.log(`Color is: ${colorOnly}`);
        colorValues = colorOnly.split(',');
        console.log(colorValues);
        for (let i = 0; i < colorValues.length; i++) {
            result.push(+colorValues[i]);
        }
        return result;
    }

});