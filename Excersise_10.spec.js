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
describe('Excersise 10', function () {
    var usernameByCss = '[name="username"]';
    it('should check product data ', function () {
        return __awaiter(this, void 0, void 0, function () {
            var appAddress, campaignSectionCss, productNameCss, productRegularPriceCss, productCampaingPriceCss, productCss, productTitleCss, productNameMainPageCampaignElement, campaignProductsElementsMainPage, i, productNameMainPageElement, productNameMainPage, productRegularPriceMainPageElement, productRegularPriceMainPage, productRegularColorMainPage, _a, _b, productCampaignPriceMainPageElement, productCampaignPriceMainPage, productCampaignColorMainPage, _c, _d, productElement, productName, productRegularPriceElement, productRegularPrice, productRegularColor, _e, _f, productCampaignPriceElement, productCampaignPrice, productCampaignColor, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        appAddress = 'http://localhost/litecart/';
                        campaignSectionCss = '#box-campaigns';
                        productNameCss = '.name';
                        productRegularPriceCss = '.regular-price';
                        productCampaingPriceCss = '.campaign-price';
                        productCss = '#box-product';
                        productTitleCss = '.title';
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _j.sent();
                        return [4 /*yield*/, protractor_1.browser.get(appAddress)];
                    case 2:
                        _j.sent();
                        console.log('Page opened');
                        productNameMainPageCampaignElement = protractor_1.browser.$(campaignSectionCss);
                        return [4 /*yield*/, productNameMainPageCampaignElement.$$('li').asElementFinders_()];
                    case 3:
                        campaignProductsElementsMainPage = _j.sent();
                        console.log("Number of products in campaign: " + campaignProductsElementsMainPage.length);
                        i = 0;
                        _j.label = 4;
                    case 4:
                        if (!(i < campaignProductsElementsMainPage.length)) return [3 /*break*/, 28];
                        if (!(i > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, protractor_1.browser.get(appAddress)];
                    case 5:
                        _j.sent();
                        productNameMainPageCampaignElement = protractor_1.browser.$(campaignSectionCss);
                        return [4 /*yield*/, productNameMainPageCampaignElement.$$('li').asElementFinders_()];
                    case 6:
                        campaignProductsElementsMainPage = _j.sent();
                        _j.label = 7;
                    case 7:
                        productNameMainPageElement = campaignProductsElementsMainPage[i].$(productNameCss);
                        return [4 /*yield*/, productNameMainPageElement.getText()];
                    case 8:
                        productNameMainPage = _j.sent();
                        productRegularPriceMainPageElement = campaignProductsElementsMainPage[i].$(productRegularPriceCss);
                        return [4 /*yield*/, productRegularPriceMainPageElement.getText()];
                    case 9:
                        productRegularPriceMainPage = _j.sent();
                        return [4 /*yield*/, productRegularPriceMainPageElement.getCssValue("color")];
                    case 10:
                        productRegularColorMainPage = _j.sent();
                        _a = expect;
                        _b = checkGreyColor;
                        return [4 /*yield*/, getRGBValues(productRegularColorMainPage)];
                    case 11: return [4 /*yield*/, _b.apply(void 0, [_j.sent()])];
                    case 12:
                        _a.apply(void 0, [_j.sent()]).toBeTruthy("Regular Price has incorrect color on the main page");
                        productCampaignPriceMainPageElement = campaignProductsElementsMainPage[i].$(productCampaingPriceCss);
                        return [4 /*yield*/, productCampaignPriceMainPageElement.getText()];
                    case 13:
                        productCampaignPriceMainPage = _j.sent();
                        return [4 /*yield*/, productCampaignPriceMainPageElement.getCssValue("color")];
                    case 14:
                        productCampaignColorMainPage = _j.sent();
                        _c = expect;
                        _d = checkRedColor;
                        return [4 /*yield*/, getRGBValues(productCampaignColorMainPage)];
                    case 15: return [4 /*yield*/, _d.apply(void 0, [_j.sent()])];
                    case 16:
                        _c.apply(void 0, [_j.sent()]).toBeTruthy("Regular Price has incorrect color on the main page");
                        console.log("For product #" + (i + 1) + ": " + productNameMainPage + ", " + productRegularPriceMainPage + ", " + productRegularColorMainPage + ", " + productCampaignPriceMainPage + ", " + productCampaignColorMainPage);
                        return [4 /*yield*/, campaignProductsElementsMainPage[i].click()];
                    case 17:
                        _j.sent();
                        productElement = protractor_1.browser.$(productCss);
                        return [4 /*yield*/, productElement.$(productTitleCss).getText()];
                    case 18:
                        productName = _j.sent();
                        expect(productName).toBe(productNameMainPage, "Names are different: \"" + productNameMainPage + "\" is on main page, \"" + productName + "\" is on product page");
                        productRegularPriceElement = productElement.$(productRegularPriceCss);
                        return [4 /*yield*/, productRegularPriceElement.getText()];
                    case 19:
                        productRegularPrice = _j.sent();
                        return [4 /*yield*/, productRegularPriceElement.getCssValue("color")];
                    case 20:
                        productRegularColor = _j.sent();
                        _e = expect;
                        _f = checkGreyColor;
                        return [4 /*yield*/, getRGBValues(productRegularColor)];
                    case 21: return [4 /*yield*/, _f.apply(void 0, [_j.sent()])];
                    case 22:
                        _e.apply(void 0, [_j.sent()]).toBeTruthy("Regular Price has incorrect color on the main page");
                        expect(productRegularPrice).toBe(productRegularPriceMainPage, "Regular price is defferent: \"" + productRegularPriceMainPage + "\" is on main page, \"" + productRegularPrice + "\" is on product page");
                        productCampaignPriceElement = productElement.$(productCampaingPriceCss);
                        return [4 /*yield*/, productCampaignPriceElement.getText()];
                    case 23:
                        productCampaignPrice = _j.sent();
                        return [4 /*yield*/, productCampaignPriceElement.getCssValue("color")];
                    case 24:
                        productCampaignColor = _j.sent();
                        _g = expect;
                        _h = checkRedColor;
                        return [4 /*yield*/, getRGBValues(productCampaignColor)];
                    case 25: return [4 /*yield*/, _h.apply(void 0, [_j.sent()])];
                    case 26:
                        _g.apply(void 0, [_j.sent()]).toBeTruthy("Regular Price has incorrect color on the main page");
                        expect(productCampaignPrice).toBe(productCampaignPriceMainPage, "Campaign price is defferent: \"" + productCampaignPriceMainPage + "\" is on main page, \"" + productCampaignPrice + "\" is on product page");
                        _j.label = 27;
                    case 27:
                        i++;
                        return [3 /*break*/, 4];
                    case 28: return [4 /*yield*/, protractor_1.browser.quit()];
                    case 29:
                        _j.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    function checkGreyColor(color) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                result = false;
                if (color.length === 3) {
                    ((color[0] === color[1]) && (color[0] === color[2])) ? result = true : result = false;
                }
                else {
                    console.log("Color format is incorrect");
                }
                console.log(result);
                return [2 /*return*/, result];
            });
        });
    }
    function checkRedColor(color) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                result = false;
                if (color.length === 3) {
                    ((color[1] === 0) && (color[2] === 0)) ? result = true : result = false;
                }
                else {
                    console.log("Color format is incorrect");
                }
                console.log(result);
                return [2 /*return*/, result];
            });
        });
    }
    function getRGBValues(color) {
        return __awaiter(this, void 0, void 0, function () {
            var result, colorValues, colorOnly, i;
            return __generator(this, function (_a) {
                result = [];
                colorValues = [];
                colorOnly = color.slice(5, -4);
                console.log("Color is: " + colorOnly);
                colorValues = colorOnly.split(',');
                console.log(colorValues);
                for (i = 0; i < colorValues.length; i++) {
                    result.push(+colorValues[i]);
                }
                return [2 /*return*/, result];
            });
        });
    }
});
