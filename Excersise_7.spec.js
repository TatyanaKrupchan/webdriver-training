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
describe('Excersise 7', function () {
    var usernameByCss = '[name="username"]';
    it('should click every menu item and check page header', function () {
        return __awaiter(this, void 0, void 0, function () {
            var adminLogin, adminPassword, appAddress, expectedMenu, webdriver, menu, verticalMenuIsPresent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        adminLogin = 'admin';
                        adminPassword = 'admin';
                        appAddress = 'http://localhost/litecart/admin/';
                        expectedMenu = [
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
                        ];
                        webdriver = require('selenium-webdriver');
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.get(appAddress)];
                    case 2:
                        _a.sent();
                        console.log('Admin page opened');
                        return [4 /*yield*/, loginToApp(adminLogin, adminPassword)];
                    case 3:
                        _a.sent();
                        menu = protractor_1.browser.$('ul.list-vertical');
                        return [4 /*yield*/, menu.isPresent()];
                    case 4:
                        verticalMenuIsPresent = _a.sent();
                        expect(verticalMenuIsPresent).toBeTruthy("Vertical menu is not present");
                        if (!verticalMenuIsPresent) return [3 /*break*/, 6];
                        return [4 /*yield*/, goThroughMenu(expectedMenu)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, protractor_1.browser.quit()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    function goThroughMenu(menuStructure) {
        return __awaiter(this, void 0, void 0, function () {
            var mainMenuItemCss, enclosedMenuItemCss, itemName, linkCss, mainItems, numberOfItems, i, mainItems_1, mainItemName, _a, collectedEnclosedMenuItems, numberOfEnclosedItems, j, collectedEnclosedMenuItems_1, enclosedItemName, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        mainMenuItemCss = 'li#app-';
                        enclosedMenuItemCss = 'ul.docs>li';
                        itemName = '.name';
                        linkCss = 'a';
                        return [4 /*yield*/, protractor_1.browser.$$(mainMenuItemCss).asElementFinders_()];
                    case 1:
                        mainItems = _c.sent();
                        expect(mainItems.length).toBe(menuStructure.length, "Number of items in main menu is " + mainItems.length + " while expected " + menuStructure.length);
                        mainItems.length < menuStructure.length ? numberOfItems = mainItems.length : numberOfItems = menuStructure.length;
                        i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(i < numberOfItems)) return [3 /*break*/, 19];
                        return [4 /*yield*/, protractor_1.browser.$$(mainMenuItemCss).asElementFinders_()];
                    case 3:
                        mainItems_1 = _c.sent();
                        return [4 /*yield*/, mainItems_1[i].$(itemName).getText()];
                    case 4:
                        mainItemName = _c.sent();
                        console.log("mainItemName = " + mainItemName);
                        expect(mainItemName).toBe(menuStructure[i].mainMenuItem, "Item #" + (i + 1) + " in main menu has name " + mainItemName + " which differs from " + menuStructure[i].mainMenuItem);
                        if (!(mainItemName === menuStructure[i].mainMenuItem)) return [3 /*break*/, 18];
                        return [4 /*yield*/, mainItems_1[i].$(linkCss).click()];
                    case 5:
                        _c.sent();
                        _a = expect;
                        return [4 /*yield*/, checkH1ElementIsPresent()];
                    case 6:
                        _a.apply(void 0, [_c.sent()]).toBeTruthy("Item #" + (i + 1) + " in main menu (" + mainItemName + ") does not have h1 element");
                        console.log("h1 element presence checked for main element. Proceeding to enclosed menu item for this main menu item");
                        return [4 /*yield*/, protractor_1.browser.$$(mainMenuItemCss).asElementFinders_()];
                    case 7:
                        mainItems_1 = _c.sent();
                        return [4 /*yield*/, mainItems_1[i].$$(enclosedMenuItemCss).asElementFinders_()];
                    case 8:
                        collectedEnclosedMenuItems = _c.sent();
                        expect(collectedEnclosedMenuItems.length).toBe(menuStructure[i].enclosedMenuItem.length, "Number of enclosed items for main menu item " + mainItemName + " is " + collectedEnclosedMenuItems.length + " while expected " + menuStructure[i].enclosedMenuItem.length);
                        numberOfEnclosedItems = void 0;
                        collectedEnclosedMenuItems.length < menuStructure[i].enclosedMenuItem.length ? numberOfEnclosedItems = collectedEnclosedMenuItems.length : numberOfEnclosedItems = menuStructure[i].enclosedMenuItem.length;
                        if (!(numberOfEnclosedItems > 0)) return [3 /*break*/, 17];
                        j = 0;
                        _c.label = 9;
                    case 9:
                        if (!(j < numberOfEnclosedItems)) return [3 /*break*/, 16];
                        return [4 /*yield*/, protractor_1.browser.$$(mainMenuItemCss).asElementFinders_()];
                    case 10:
                        mainItems_1 = _c.sent();
                        return [4 /*yield*/, mainItems_1[i].$$(enclosedMenuItemCss).asElementFinders_()];
                    case 11:
                        collectedEnclosedMenuItems_1 = _c.sent();
                        return [4 /*yield*/, collectedEnclosedMenuItems_1[j].$(itemName).getText()];
                    case 12:
                        enclosedItemName = _c.sent();
                        console.log("enclosedItemName = " + enclosedItemName);
                        expect(enclosedItemName).toBe(menuStructure[i].enclosedMenuItem[j], "(" + mainItemName + " main menu item) Sub-Item #" + (j + 1) + " with name " + enclosedItemName + " differs from " + menuStructure[i].enclosedMenuItem[j]);
                        return [4 /*yield*/, collectedEnclosedMenuItems_1[j].$(linkCss).click()];
                    case 13:
                        _c.sent();
                        _b = expect;
                        return [4 /*yield*/, checkH1ElementIsPresent()];
                    case 14:
                        _b.apply(void 0, [_c.sent()]).toBeTruthy("Item #" + (j + 1) + " " + enclosedItemName + " for main menu (" + mainItemName + ") does not have h1 element");
                        console.log("h1 element presence checked for enclosed element");
                        _c.label = 15;
                    case 15:
                        j++;
                        return [3 /*break*/, 9];
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        console.log("Main menu item " + mainItemName + " contains no enclosed menu items");
                        _c.label = 18;
                    case 18:
                        i++;
                        return [3 /*break*/, 2];
                    case 19: return [2 /*return*/];
                }
            });
        });
    }
    function checkH1ElementIsPresent() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protractor_1.browser.$('h1').isPresent()];
            });
        });
    }
    function loginToApp(login, password) {
        return __awaiter(this, void 0, void 0, function () {
            var rememberMeIsChecked;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.browser.$('[name="login_form"]')), 5)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.$(usernameByCss).isPresent()];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, protractor_1.browser.findElement(by.css(usernameByCss)).sendKeys(login)];
                    case 3:
                        _a.sent();
                        console.log("Username \"" + login + "\" inserted");
                        return [3 /*break*/, 5];
                    case 4:
                        console.log("Username field is not present in the screen");
                        _a.label = 5;
                    case 5: return [4 /*yield*/, protractor_1.browser.$('[name="password"]').isPresent()];
                    case 6:
                        if (!_a.sent()) return [3 /*break*/, 8];
                        return [4 /*yield*/, protractor_1.browser.$('[name="password"]').sendKeys(password)];
                    case 7:
                        _a.sent();
                        console.log("Password \"" + password + "\" inserted");
                        return [3 /*break*/, 9];
                    case 8:
                        console.log("Password field is not present in the screen");
                        _a.label = 9;
                    case 9: return [4 /*yield*/, protractor_1.browser.$('[name="remember_me"]').isPresent()];
                    case 10:
                        if (!_a.sent()) return [3 /*break*/, 13];
                        return [4 /*yield*/, protractor_1.browser.$('[name="remember_me"]').isSelected()];
                    case 11:
                        rememberMeIsChecked = _a.sent();
                        console.log("Remember Me checkbox is selected: " + rememberMeIsChecked);
                        if (!rememberMeIsChecked) return [3 /*break*/, 13];
                        return [4 /*yield*/, protractor_1.browser.$('[name="remember_me"]').click()];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13: return [4 /*yield*/, protractor_1.browser.$('[name="login"]').click()];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.browser.$('[title="My Store"]')))];
                    case 15:
                        _a.sent();
                        console.log("Admin was able to log in. Quitting the browser.");
                        return [2 /*return*/];
                }
            });
        });
    }
});
