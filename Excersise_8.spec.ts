import { browser, ExpectedConditions, ElementFinder, ProtractorBrowser } from "protractor";

describe('Excersise 8', function () {
    const usernameByCss = '[name="username"]';
    it('should check stickers ', async function () {
        const appAddress = 'http://localhost/litecart/';
        const cardCss = 'ul.products>li';
        const stickerCss = '.sticker';
        const nameCss = '.name';

        await browser.waitForAngularEnabled(false);
        await browser.get(appAddress);
        console.log('Page opened');
        let cards: ElementFinder[] = await browser.$$(cardCss).asElementFinders_();
        for (let card of cards) {
            let stickerIsPresent: Boolean = await card.$(stickerCss).isPresent();
            let stickers: ElementFinder[] = [];
            if (stickerIsPresent) {
                stickers = await card.$$(stickerCss).asElementFinders_();
            } 
            let name: string = await card.$(nameCss).getText();
            expect(stickers.length).toBe(1, `The card ${name} has incorrect number of stickers: ${stickers.length} instead of the only one`);
            console.log(`Number of stickers on card "${name} is ${stickers.length}"`);
        }

        await browser.quit()
    });


    async function checkH1ElementIsPresent(): Promise<Boolean> {
        return browser.$('h1').isPresent();
    }
});