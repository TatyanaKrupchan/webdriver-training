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
describe('Excersise 7', function () {
    var usernameByCss = '[name="username"]';
    it('should click every menu item and check page header', function () {
        return __awaiter(this, void 0, void 0, function () {
            var adminLogin, adminPassword, appAddress, menu, verticalMenuIsPresent, productsNumber, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        adminLogin = 'admin';
                        adminPassword = 'admin';
                        appAddress = 'http://localhost/litecart/admin/';
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.get(appAddress)];
                    case 2:
                        _a.sent();
                        console.log('Admin page opened');
                        return [4 /*yield*/, helper_1.loginToApp(adminLogin, adminPassword)];
                    case 3:
                        _a.sent();
                        menu = protractor_1.browser.$('ul.list-vertical');
                        return [4 /*yield*/, menu.isPresent()];
                    case 4:
                        verticalMenuIsPresent = _a.sent();
                        expect(verticalMenuIsPresent).toBeTruthy("Vertical menu is not present");
                        if (!verticalMenuIsPresent) return [3 /*break*/, 6];
                        console.log("Going to menu");
                        return [4 /*yield*/, goToProductsList()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, productsElements()];
                    case 7:
                        productsNumber = _a.sent();
                        i = 0;
                        _a.label = 8;
                    case 8:
                        if (!(i < productsNumber.length)) return [3 /*break*/, 14];
                        if (!(i > 0)) return [3 /*break*/, 10];
                        return [4 /*yield*/, goToProductsList()];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [4 /*yield*/, goToProduct(i)];
                    case 11:
                        _a.sent();
                        console.log("Records in console for product #" + (i + 1) + " in the list:");
                        return [4 /*yield*/, getConsoleLog()];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13:
                        i++;
                        return [3 /*break*/, 8];
                    case 14: return [4 /*yield*/, protractor_1.browser.quit()];
                    case 15:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    function goToProductsList() {
        return __awaiter(this, void 0, void 0, function () {
            var mainMenuItemCss, enclosedMenuItemCss, linkCss, tableCss, folderCss, mainItems, collectedEnclosedMenuItems, table, folders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mainMenuItemCss = 'li#app-';
                        enclosedMenuItemCss = 'ul.docs>li';
                        linkCss = 'a';
                        tableCss = 'form>table>tbody';
                        folderCss = 'tr.row';
                        return [4 /*yield*/, protractor_1.browser.$$(mainMenuItemCss).asElementFinders_()];
                    case 1:
                        mainItems = _a.sent();
                        return [4 /*yield*/, mainItems[1].$(linkCss).click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.$$(mainMenuItemCss).asElementFinders_()];
                    case 3:
                        mainItems = _a.sent();
                        return [4 /*yield*/, mainItems[1].$$(enclosedMenuItemCss).asElementFinders_()];
                    case 4:
                        collectedEnclosedMenuItems = _a.sent();
                        return [4 /*yield*/, collectedEnclosedMenuItems[0].$(linkCss).click()];
                    case 5:
                        _a.sent();
                        table = protractor_1.browser.$(tableCss);
                        return [4 /*yield*/, table.$$(folderCss).asElementFinders_()];
                    case 6:
                        folders = _a.sent();
                        return [4 /*yield*/, folders[1].$('a').click()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function productsElements() {
        return __awaiter(this, void 0, void 0, function () {
            var produtXpath, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        produtXpath = '//form[@name="catalog_form"]/table/tbody//td//img/..';
                        return [4 /*yield*/, protractor_1.browser.element.all(protractor_1.by.xpath(produtXpath)).asElementFinders_()];
                    case 1:
                        products = _a.sent();
                        return [2 /*return*/, products];
                }
            });
        });
    }
    function goToProduct(i) {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productsElements()];
                    case 1:
                        products = _a.sent();
                        return [4 /*yield*/, products[i].$('a').click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function getConsoleLog() {
        return __awaiter(this, void 0, void 0, function () {
            var logs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.driver.manage().logs().get("browser")];
                    case 1:
                        logs = _a.sent();
                        if (logs.length > 0) {
                            console.log(logs);
                        }
                        else
                            console.log("No records found in console");
                        return [2 /*return*/];
                }
            });
        });
    }
});
