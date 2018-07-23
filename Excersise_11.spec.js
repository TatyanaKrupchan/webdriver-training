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
describe('Excersise 11', function () {
    var usernameByCss = '[name="username"]';
    it('should create new user and login', function () {
        return __awaiter(this, void 0, void 0, function () {
            var appLink, createNewUserLinkCss, createAccountPageTitle, createAccountPageTitleCss, customerFormCss, country, _a, fieldsToFill, formToFill, firstNameFieldCss, lastNameFieldCss, address1FieldCss, cityFieldCss, postcodeFieldCss, emailFieldCss, phoneFieldCss, passwordFieldCss, confPasswordFieldCss, createAccountButtonCss, firstName, _b, lastName, _c, address1, _d, _e, city, _f, postcode, _g, email, _h, _j, phone, _k, password, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, countryFieldCss, countryFieldElement, _w, stateFiledCss, stateElement, stateItemElement, stateItemNumber, _x, _y, _z;
            return __generator(this, function (_0) {
                switch (_0.label) {
                    case 0:
                        appLink = 'http://localhost/litecart/';
                        createNewUserLinkCss = '[name="login_form"]';
                        createAccountPageTitle = 'Create Account';
                        createAccountPageTitleCss = '#page-wrapper .title';
                        customerFormCss = '[name="customer_form"]';
                        country = 'united states';
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _0.sent();
                        return [4 /*yield*/, protractor_1.browser.get(appLink)];
                    case 2:
                        _0.sent();
                        console.log('Main Page opened');
                        return [4 /*yield*/, protractor_1.browser.$(createNewUserLinkCss).$('tr:last-child').click()];
                    case 3:
                        _0.sent();
                        _a = expect;
                        return [4 /*yield*/, protractor_1.browser.$(createAccountPageTitleCss).getText()];
                    case 4:
                        _a.apply(void 0, [_0.sent()]).toBe(createAccountPageTitle, "Incorrect page opened");
                        console.log("Open page to create new account: DONE");
                        return [4 /*yield*/, protractor_1.browser.$(customerFormCss).$$('td').asElementFinders_()];
                    case 5:
                        fieldsToFill = _0.sent();
                        return [4 /*yield*/, protractor_1.browser.$(customerFormCss)];
                    case 6:
                        formToFill = _0.sent();
                        console.log("Elements To Fill collected");
                        firstNameFieldCss = '[name="firstname"]';
                        lastNameFieldCss = '[name="lastname"]';
                        address1FieldCss = '[name="address1"]';
                        cityFieldCss = '[name="city"]';
                        postcodeFieldCss = '[name="postcode"]';
                        emailFieldCss = '[name="email"]';
                        phoneFieldCss = '[name="phone"]';
                        passwordFieldCss = '[name="password"]';
                        confPasswordFieldCss = '[name="confirmed_password"]';
                        createAccountButtonCss = '[name="create_account"]';
                        _b = "FN_";
                        return [4 /*yield*/, helper_1.generateText(8)];
                    case 7:
                        firstName = _b + (_0.sent());
                        _c = "LN_";
                        return [4 /*yield*/, helper_1.generateText(12)];
                    case 8:
                        lastName = _c + (_0.sent());
                        _d = "A1_";
                        return [4 /*yield*/, helper_1.generateText(8)];
                    case 9:
                        _e = _d + (_0.sent()) + " ";
                        return [4 /*yield*/, helper_1.generateText(2, 'OnlyNumbers')];
                    case 10:
                        address1 = _e + (_0.sent());
                        _f = "C_";
                        return [4 /*yield*/, helper_1.generateText(12)];
                    case 11:
                        city = _f + (_0.sent());
                        _g = "";
                        return [4 /*yield*/, helper_1.generateText(5, 'OnlyNumbers')];
                    case 12:
                        postcode = _g + (_0.sent());
                        _h = firstName + "." + lastName + "@";
                        return [4 /*yield*/, helper_1.generateText(10)];
                    case 13:
                        _j = _h + (_0.sent()) + ".";
                        return [4 /*yield*/, helper_1.generateText(3)];
                    case 14:
                        email = _j + (_0.sent());
                        _k = "1";
                        return [4 /*yield*/, helper_1.generateText(8, 'OnlyNumbers')];
                    case 15:
                        phone = _k + (_0.sent());
                        _l = "";
                        return [4 /*yield*/, helper_1.generateText(20)];
                    case 16:
                        password = _l + (_0.sent());
                        console.log(email + ", " + password);
                        _m = helper_1.fillField;
                        return [4 /*yield*/, formToFill.$(firstNameFieldCss)];
                    case 17: return [4 /*yield*/, _m.apply(void 0, [_0.sent(), firstName])];
                    case 18:
                        _0.sent();
                        _o = helper_1.fillField;
                        return [4 /*yield*/, formToFill.$(lastNameFieldCss)];
                    case 19: return [4 /*yield*/, _o.apply(void 0, [_0.sent(), lastName])];
                    case 20:
                        _0.sent();
                        _p = helper_1.fillField;
                        return [4 /*yield*/, formToFill.$(address1FieldCss)];
                    case 21: return [4 /*yield*/, _p.apply(void 0, [_0.sent(), address1])];
                    case 22:
                        _0.sent();
                        _q = helper_1.fillField;
                        return [4 /*yield*/, formToFill.$(cityFieldCss)];
                    case 23: return [4 /*yield*/, _q.apply(void 0, [_0.sent(), city])];
                    case 24:
                        _0.sent();
                        _r = helper_1.fillField;
                        return [4 /*yield*/, formToFill.$(postcodeFieldCss)];
                    case 25: return [4 /*yield*/, _r.apply(void 0, [_0.sent(), postcode])];
                    case 26:
                        _0.sent();
                        _s = helper_1.fillField;
                        return [4 /*yield*/, formToFill.$(emailFieldCss)];
                    case 27: return [4 /*yield*/, _s.apply(void 0, [_0.sent(), email])];
                    case 28:
                        _0.sent();
                        _t = helper_1.fillField;
                        return [4 /*yield*/, formToFill.$(phoneFieldCss)];
                    case 29: return [4 /*yield*/, _t.apply(void 0, [_0.sent(), phone])];
                    case 30:
                        _0.sent();
                        _u = helper_1.fillField;
                        return [4 /*yield*/, formToFill.$(confPasswordFieldCss)];
                    case 31: return [4 /*yield*/, _u.apply(void 0, [_0.sent(), password])];
                    case 32:
                        _0.sent();
                        _v = helper_1.fillField;
                        return [4 /*yield*/, formToFill.$(passwordFieldCss)];
                    case 33: return [4 /*yield*/, _v.apply(void 0, [_0.sent(), password])];
                    case 34:
                        _0.sent();
                        countryFieldCss = 'b';
                        countryFieldElement = formToFill.$('.select2-selection.select2-selection--single');
                        return [4 /*yield*/, countryFieldElement.$(countryFieldCss).click()];
                    case 35:
                        _0.sent();
                        _w = helper_1.fillField;
                        return [4 /*yield*/, protractor_1.browser.$('input.select2-search__field')];
                    case 36: return [4 /*yield*/, _w.apply(void 0, [_0.sent(), country])];
                    case 37:
                        _0.sent();
                        return [4 /*yield*/, protractor_1.browser.$('input.select2-search__field').sendKeys(protractor_1.Key.ENTER, protractor_1.Key.TAB)];
                    case 38:
                        _0.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 39:
                        _0.sent();
                        stateFiledCss = 'select[name="zone_code"]';
                        stateElement = formToFill.$(stateFiledCss);
                        return [4 /*yield*/, protractor_1.browser.executeScript("arguments[0].click();", stateElement)];
                    case 40:
                        _0.sent();
                        return [4 /*yield*/, stateElement.$$('option').asElementFinders_()];
                    case 41:
                        stateItemElement = _0.sent();
                        return [4 /*yield*/, helper_1.generateText(2, 'OnlyNumbers')];
                    case 42:
                        stateItemNumber = +(_0.sent());
                        if (stateItemNumber > 50) {
                            stateItemNumber = stateItemNumber - 50;
                        }
                        ;
                        return [4 /*yield*/, stateItemElement[stateItemNumber].click()];
                    case 43:
                        _0.sent();
                        _y = (_x = console).log;
                        _z = "State number = " + stateItemNumber + ", state name = '";
                        return [4 /*yield*/, stateItemElement[stateItemNumber].getText()];
                    case 44:
                        _y.apply(_x, [_z + (_0.sent()) + "'"]);
                        return [4 /*yield*/, formToFill.$(createAccountButtonCss).click()];
                    case 45:
                        _0.sent();
                        return [4 /*yield*/, logout()];
                    case 46:
                        _0.sent();
                        return [4 /*yield*/, login(email, password)];
                    case 47:
                        _0.sent();
                        console.log("Logged in again");
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.browser.$('aside #box-account')), 5000)];
                    case 48:
                        _0.sent();
                        return [4 /*yield*/, logout()];
                    case 49:
                        _0.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 50:
                        _0.sent();
                        return [4 /*yield*/, protractor_1.browser.quit()];
                    case 51:
                        _0.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    function logout() {
        return __awaiter(this, void 0, void 0, function () {
            var menuCss, liElements, logOutItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        menuCss = 'aside #box-account';
                        return [4 /*yield*/, protractor_1.browser.$(menuCss).$$('li>a').asElementFinders_()];
                    case 1:
                        liElements = _a.sent();
                        return [4 /*yield*/, liElements[liElements.length - 1]];
                    case 2:
                        logOutItem = _a.sent();
                        return [4 /*yield*/, logOutItem.getText()];
                    case 3:
                        if (!((_a.sent()) === 'Logout')) return [3 /*break*/, 5];
                        return [4 /*yield*/, logOutItem.click()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    function login(login, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, helper_1.fillField(protractor_1.browser.$('aside [name="email"]'), login)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, helper_1.fillField(protractor_1.browser.$('aside [name="password"]'), password)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.$('aside button[name="login"]').click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
});
