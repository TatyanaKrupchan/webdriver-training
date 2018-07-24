import { browser, ExpectedConditions, ElementFinder, ElementArrayFinder } from "protractor";

describe('Excersise 13', function () {
    const usernameByCss = '[name="username"]';
    it('should delete', async function () {
        const appAddress = 'http://localhost/litecart/';

        await browser.waitForAngularEnabled(false);
        await browser.get(appAddress);
        console.log('Page opened');

        for (let i = 0; i < 3; i++) {
            const productListElementCss = '#box-most-popular ul';
            let productElemetsList: ElementFinder = browser.$(productListElementCss)
            let productElements: ElementFinder[] = await productElemetsList.$$('li>a').asElementFinders_();
            await productElements[0].click();


            if (await browser.$('select[name="options[Size]"]').isPresent()) {
                let dropDownElement: ElementFinder = browser.$('select[name="options[Size]"]');
                await dropDownElement.click();
                let sizeItemElement: ElementFinder[] = await dropDownElement.$$('option').asElementFinders_()
                await sizeItemElement[1].click();
            }

            const cartItemsCss = 'header #cart .quantity'
            let cartQuantityElement: ElementFinder = browser.$(cartItemsCss);

            const addToCardButtonCss = 'button[name="add_cart_product"]';
            await browser.$(addToCardButtonCss).click();
            await browser.wait(ExpectedConditions.textToBePresentInElement(cartQuantityElement, (i + 1).toString()), 5000);

            const breadcrumbsCss = '.content nav#breadcrumbs';
            let breadcrumbsElements: ElementFinder[] = await browser.$(breadcrumbsCss).$$('li>a').asElementFinders_();
            await breadcrumbsElements[0].click();
        }

        const checkoutLinkCss = 'header #cart .link'
        let cartQuantityElement: ElementFinder = browser.$(checkoutLinkCss);
        await cartQuantityElement.click();

        console.log(`Moving to checkout and removal`);

        const tableCss = '#checkout-summary-wrapper table';
        const tableRowCss = 'tr:not(.header)';
        let tableRows: ElementArrayFinder = browser.$(tableCss).$$(tableRowCss);
        let productsRows: ElementFinder[] = await tableRows.$$('.item').asElementFinders_();
        console.log(`Number of rows in table is ${productsRows.length}`);
        for (let i = 0; i < productsRows.length; i++) {
            console.log(await productsRows[i].getText());
        }
        console.log(`Data from table analyzed.`);
        let j = 1;
        const initialNumber = productsRows.length;
        for (let i = productsRows.length; i > 0; i--) {

            tableRows = browser.$(tableCss).$$(tableRowCss);
            productsRows = await tableRows.$$('.item').asElementFinders_();

            if (i > 1) {
                let productsPreviewFormCss = 'ul.shortcuts';
                let productPreviewElements: ElementFinder[] = await browser.$(productsPreviewFormCss).$$('li>a').asElementFinders_();
                await productPreviewElements[0].click();
            }
            await browser.$('button[name="remove_cart_item"]').click();
            await browser.wait(ExpectedConditions.stalenessOf(productsRows[0]), 5000);
            console.log(`Item #${j} of ${initialNumber} removed`);
            j++;
        }

        await browser.quit()
    });

});