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
var helper_1 = require("./helper");
describe('Excersise 12', function () {
    var usernameByCss = '[name="username"]';
    it('should add product', function () {
        return __awaiter(this, void 0, void 0, function () {
            var appAddressLink, catalogCss, catalogSubItemCss, buttonsCanvasCc, adminLogin, adminPassword, menuItems, tableCss, table, tableRows, initialRownNumber, buttons, radioButtonCss, radioButtons, nameFieldCss, productName, _a, codeFieldCss, _b, _c, quantityFieldCss, fileUploadFieldCss, fileName, informationTabCss, manufacturerFieldCss, shortDescriptionCss, _d, _e, _f, longDescriptionCss, longDescriptionElement, _g, _h, _j, pricesTabCss, purchasePriceCss, _k, _l, purchasePriceCcyCss, priceUsdCss, _m, _o, priceEurCss, _p, _q, priceEurTaxesCss, _r, _s, saveButtonCss, _t, itemIsFound, i, cells;
            return __generator(this, function (_u) {
                switch (_u.label) {
                    case 0:
                        appAddressLink = 'http://localhost/litecart/admin';
                        catalogCss = 'ul#box-apps-menu li';
                        catalogSubItemCss = 'ul.docs li#doc-catalog';
                        buttonsCanvasCc = 'td#content a.button';
                        adminLogin = 'admin';
                        adminPassword = 'admin';
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _u.sent();
                        return [4 /*yield*/, protractor_1.browser.get(appAddressLink)];
                    case 2:
                        _u.sent();
                        return [4 /*yield*/, helper_1.loginToApp(adminLogin, adminPassword)];
                    case 3:
                        _u.sent();
                        console.log('Page opened');
                        return [4 /*yield*/, protractor_1.browser.$$(catalogCss).asElementFinders_()];
                    case 4:
                        menuItems = _u.sent();
                        return [4 /*yield*/, menuItems[1].click()];
                    case 5:
                        _u.sent();
                        return [4 /*yield*/, protractor_1.browser.$(catalogSubItemCss).click()];
                    case 6:
                        _u.sent();
                        console.log("Catalog page opened");
                        tableCss = '.dataTable';
                        table = protractor_1.browser.$(tableCss);
                        return [4 /*yield*/, table.$$('tr.row').asElementFinders_()];
                    case 7:
                        tableRows = _u.sent();
                        initialRownNumber = tableRows.length;
                        return [4 /*yield*/, protractor_1.browser.$$(buttonsCanvasCc).asElementFinders_()];
                    case 8:
                        buttons = _u.sent();
                        return [4 /*yield*/, buttons[1].click()];
                    case 9:
                        _u.sent();
                        radioButtonCss = '#tab-general label';
                        return [4 /*yield*/, protractor_1.browser.$$(radioButtonCss).asElementFinders_()];
                    case 10:
                        radioButtons = _u.sent();
                        return [4 /*yield*/, radioButtons[0].click()];
                    case 11:
                        _u.sent();
                        nameFieldCss = 'td [name="name[en]"]';
                        _a = "testitem_";
                        return [4 /*yield*/, generateText(10)];
                    case 12:
                        productName = _a + (_u.sent());
                        return [4 /*yield*/, fillField(protractor_1.browser.$(nameFieldCss), productName)];
                    case 13:
                        _u.sent();
                        codeFieldCss = 'td [name="code"]';
                        _b = fillField;
                        _c = [protractor_1.browser.$(codeFieldCss)];
                        return [4 /*yield*/, generateText(6, 'OnlyNumbers')];
                    case 14: return [4 /*yield*/, _b.apply(void 0, _c.concat([_u.sent()]))];
                    case 15:
                        _u.sent();
                        quantityFieldCss = 'td [name="quantity"]';
                        return [4 /*yield*/, fillField(protractor_1.browser.$(quantityFieldCss), '10')];
                    case 16:
                        _u.sent();
                        fileUploadFieldCss = 'td [name="new_images[]"]';
                        console.log(__dirname);
                        fileName = __dirname + '\\item.jpg';
                        console.log("fileName = " + fileName);
                        return [4 /*yield*/, fillField(protractor_1.browser.$(fileUploadFieldCss), fileName)];
                    case 17:
                        _u.sent();
                        informationTabCss = '[href="#tab-information"]';
                        return [4 /*yield*/, protractor_1.browser.$(informationTabCss).click()];
                    case 18:
                        _u.sent();
                        manufacturerFieldCss = '[name="manufacturer_id"]';
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.browser.$(manufacturerFieldCss)), 5000)];
                    case 19:
                        _u.sent();
                        return [4 /*yield*/, selectElementFromList(manufacturerFieldCss, 'option', 1)];
                    case 20:
                        _u.sent();
                        shortDescriptionCss = '[name="short_description[en]"]';
                        _d = fillField;
                        _e = [protractor_1.browser.$(shortDescriptionCss)];
                        _f = "testDuck";
                        return [4 /*yield*/, generateText(5)];
                    case 21: return [4 /*yield*/, _d.apply(void 0, _e.concat([_f + (_u.sent())]))];
                    case 22:
                        _u.sent();
                        longDescriptionCss = '.trumbowyg-editor';
                        longDescriptionElement = protractor_1.browser.$(longDescriptionCss);
                        _g = fillField;
                        _h = [longDescriptionElement];
                        _j = "Long description testDuck";
                        return [4 /*yield*/, generateText(25)];
                    case 23: return [4 /*yield*/, _g.apply(void 0, _h.concat([_j + (_u.sent())]))];
                    case 24:
                        _u.sent();
                        return [4 /*yield*/, longDescriptionElement.sendKeys(protractor_1.Key.END)];
                    case 25:
                        _u.sent();
                        return [4 /*yield*/, longDescriptionElement.sendKeys(protractor_1.Key.ENTER)];
                    case 26:
                        _u.sent();
                        return [4 /*yield*/, fillField(longDescriptionElement, "Final string")];
                    case 27:
                        _u.sent();
                        pricesTabCss = '[href="#tab-prices"]';
                        return [4 /*yield*/, protractor_1.browser.$(pricesTabCss).click()];
                    case 28:
                        _u.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.browser.$('#tab-prices')), 5000)];
                    case 29:
                        _u.sent();
                        purchasePriceCss = '[name="purchase_price"]';
                        _k = fillField;
                        _l = [protractor_1.browser.$(purchasePriceCss)];
                        return [4 /*yield*/, generateText(3, 'OnlyNumbers')];
                    case 30: return [4 /*yield*/, _k.apply(void 0, _l.concat([_u.sent()]))];
                    case 31:
                        _u.sent();
                        purchasePriceCcyCss = '[name="purchase_price_currency_code"]';
                        return [4 /*yield*/, selectElementFromList(purchasePriceCcyCss, 'option', 1)];
                    case 32:
                        _u.sent();
                        priceUsdCss = '[name="prices[USD]"]';
                        _m = fillField;
                        _o = [protractor_1.browser.$(priceUsdCss)];
                        return [4 /*yield*/, generateText(3, 'OnlyNumbers')];
                    case 33: return [4 /*yield*/, _m.apply(void 0, _o.concat([_u.sent()]))];
                    case 34:
                        _u.sent();
                        priceEurCss = '[name="prices[EUR]"]';
                        _p = fillField;
                        _q = [protractor_1.browser.$(priceEurCss)];
                        return [4 /*yield*/, generateText(3, 'OnlyNumbers')];
                    case 35: return [4 /*yield*/, _p.apply(void 0, _q.concat([_u.sent()]))];
                    case 36:
                        _u.sent();
                        priceEurTaxesCss = '[name="gross_prices[EUR]"]';
                        _r = fillField;
                        _s = [protractor_1.browser.$(priceEurTaxesCss)];
                        return [4 /*yield*/, generateText(3, 'OnlyNumbers')];
                    case 37: return [4 /*yield*/, _r.apply(void 0, _s.concat([_u.sent()]))];
                    case 38:
                        _u.sent();
                        saveButtonCss = '[name="save"]';
                        return [4 /*yield*/, protractor_1.browser.$(saveButtonCss).click()];
                    case 39:
                        _u.sent();
                        _t = expect;
                        return [4 /*yield*/, protractor_1.browser.$('h1:not(i)').getText()];
                    case 40:
                        _t.apply(void 0, [_u.sent()]).toBe("Catalog", "Incorrect page title");
                        table = protractor_1.browser.$(tableCss);
                        return [4 /*yield*/, table.$$('tr.row').asElementFinders_()];
                    case 41:
                        tableRows = _u.sent();
                        expect(initialRownNumber).toBe(tableRows.length - 1, "Initially there were " + initialRownNumber + " rows, now " + tableRows.length);
                        itemIsFound = false;
                        i = 0;
                        _u.label = 42;
                    case 42:
                        if (!(i < tableRows.length)) return [3 /*break*/, 46];
                        return [4 /*yield*/, tableRows[i].$$('td').asElementFinders_()];
                    case 43:
                        cells = _u.sent();
                        return [4 /*yield*/, cells[2].$('a').getText()];
                    case 44:
                        if ((_u.sent()) === productName) {
                            itemIsFound = true;
                            return [3 /*break*/, 46];
                        }
                        _u.label = 45;
                    case 45:
                        i++;
                        return [3 /*break*/, 42];
                    case 46:
                        expect(itemIsFound).toBeTruthy("Recently added item with the name " + productName + " not found in the table");
                        return [4 /*yield*/, protractor_1.browser.quit()];
                    case 47:
                        _u.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    function selectElementFromList(cssElement, cssOption, elementToSelect) {
        return __awaiter(this, void 0, void 0, function () {
            var fieldElement, optionItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fieldElement = protractor_1.browser.$(cssElement);
                        return [4 /*yield*/, fieldElement.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, fieldElement.$$(cssOption).asElementFinders_()];
                    case 2:
                        optionItems = _a.sent();
                        return [4 /*yield*/, optionItems[elementToSelect].click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function generateText(length, type) {
        return __awaiter(this, void 0, void 0, function () {
            var text, possible, i;
            return __generator(this, function (_a) {
                text = "";
                possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                if (type === 'OnlyNumbers') {
                    possible = "0123456789";
                }
                for (i = 0; i < length; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return [2 /*return*/, text];
            });
        });
    }
    function fillField(element, text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, element.sendKeys(text)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
});
