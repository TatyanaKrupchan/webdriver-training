"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Excersise 13', function () {
    var usernameByCss = '[name="username"]';
    it('should delete', function () {
        return __awaiter(this, void 0, void 0, function () {
            var appAddress, i, productListElementCss, productElemetsList, productElements, dropDownElement, sizeItemElement, cartItemsCss, cartQuantityElement_1, addToCardButtonCss, breadcrumbsCss, breadcrumbsElements, checkoutLinkCss, cartQuantityElement, tableCss, tableRowCss, tableRows, productsRows, i, _a, _b, j, initialNumber, i, productsPreviewFormCss, productPreviewElements;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        appAddress = 'http://localhost/litecart/';
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.get(appAddress)];
                    case 2:
                        _c.sent();
                        console.log('Page opened');
                        i = 0;
                        _c.label = 3;
                    case 3:
                        if (!(i < 3)) return [3 /*break*/, 16];
                        productListElementCss = '#box-most-popular ul';
                        productElemetsList = protractor_1.browser.$(productListElementCss);
                        return [4 /*yield*/, productElemetsList.$$('li>a').asElementFinders_()];
                    case 4:
                        productElements = _c.sent();
                        return [4 /*yield*/, productElements[0].click()];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.$('select[name="options[Size]"]').isPresent()];
                    case 6:
                        if (!_c.sent()) return [3 /*break*/, 10];
                        dropDownElement = protractor_1.browser.$('select[name="options[Size]"]');
                        return [4 /*yield*/, dropDownElement.click()];
                    case 7:
                        _c.sent();
                        return [4 /*yield*/, dropDownElement.$$('option').asElementFinders_()];
                    case 8:
                        sizeItemElement = _c.sent();
                        return [4 /*yield*/, sizeItemElement[1].click()];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10:
                        cartItemsCss = 'header #cart .quantity';
                        cartQuantityElement_1 = protractor_1.browser.$(cartItemsCss);
                        addToCardButtonCss = 'button[name="add_cart_product"]';
                        return [4 /*yield*/, protractor_1.browser.$(addToCardButtonCss).click()];
                    case 11:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElement(cartQuantityElement_1, (i + 1).toString()), 5000)];
                    case 12:
                        _c.sent();
                        breadcrumbsCss = '.content nav#breadcrumbs';
                        return [4 /*yield*/, protractor_1.browser.$(breadcrumbsCss).$$('li>a').asElementFinders_()];
                    case 13:
                        breadcrumbsElements = _c.sent();
                        return [4 /*yield*/, breadcrumbsElements[0].click()];
                    case 14:
                        _c.sent();
                        _c.label = 15;
                    case 15:
                        i++;
                        return [3 /*break*/, 3];
                    case 16:
                        checkoutLinkCss = 'header #cart .link';
                        cartQuantityElement = protractor_1.browser.$(checkoutLinkCss);
                        return [4 /*yield*/, cartQuantityElement.click()];
                    case 17:
                        _c.sent();
                        console.log("Moving to checkout and removal");
                        tableCss = '#checkout-summary-wrapper table';
                        tableRowCss = 'tr:not(.header)';
                        tableRows = protractor_1.browser.$(tableCss).$$(tableRowCss);
                        return [4 /*yield*/, tableRows.$$('.item').asElementFinders_()];
                    case 18:
                        productsRows = _c.sent();
                        console.log("Number of rows in table is " + productsRows.length);
                        i = 0;
                        _c.label = 19;
                    case 19:
                        if (!(i < productsRows.length)) return [3 /*break*/, 22];
                        _b = (_a = console).log;
                        return [4 /*yield*/, productsRows[i].getText()];
                    case 20:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 21;
                    case 21:
                        i++;
                        return [3 /*break*/, 19];
                    case 22:
                        console.log("Data from table analyzed.");
                        j = 1;
                        initialNumber = productsRows.length;
                        i = productsRows.length;
                        _c.label = 23;
                    case 23:
                        if (!(i > 0)) return [3 /*break*/, 31];
                        tableRows = protractor_1.browser.$(tableCss).$$(tableRowCss);
                        return [4 /*yield*/, tableRows.$$('.item').asElementFinders_()];
                    case 24:
                        productsRows = _c.sent();
                        if (!(i > 1)) return [3 /*break*/, 27];
                        productsPreviewFormCss = 'ul.shortcuts';
                        return [4 /*yield*/, protractor_1.browser.$(productsPreviewFormCss).$$('li>a').asElementFinders_()];
                    case 25:
                        productPreviewElements = _c.sent();
                        return [4 /*yield*/, productPreviewElements[0].click()];
                    case 26:
                        _c.sent();
                        _c.label = 27;
                    case 27: return [4 /*yield*/, protractor_1.browser.$('button[name="remove_cart_item"]').click()];
                    case 28:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.stalenessOf(productsRows[0]), 5000)];
                    case 29:
                        _c.sent();
                        console.log("Item #" + j + " of " + initialNumber + " removed");
                        j++;
                        _c.label = 30;
                    case 30:
                        i--;
                        return [3 /*break*/, 23];
                    case 31: return [4 /*yield*/, protractor_1.browser.quit()];
                    case 32:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
});
