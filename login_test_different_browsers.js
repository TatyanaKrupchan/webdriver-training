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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Simple webdriver test', function () {
    it('should open google search page', function () {
        return __awaiter(this, void 0, void 0, function () {
            var adminLogin, adminPassword, usernameByCss, rememberMeIsChecked;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        adminLogin = 'admin';
                        adminPassword = 'admin';
                        // chrome_driver = new webdriver.Builder().forBrowser('chrome').build();
                        // ie_driver = new webdriver.Builder().forBrowser('ie').build();
                        // firefox_driver = new webdriver.Builder().forBrowser('firefox').build();
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        // chrome_driver = new webdriver.Builder().forBrowser('chrome').build();
                        // ie_driver = new webdriver.Builder().forBrowser('ie').build();
                        // firefox_driver = new webdriver.Builder().forBrowser('firefox').build();
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.get('http://localhost/litecart/admin/')];
                    case 2:
                        _a.sent();
                        console.log('Admin page opened');
                        usernameByCss = '[name="username"]';
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.browser.$('[name="login_form"]')), 5)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.$(usernameByCss).isPresent()];
                    case 4:
                        if (!_a.sent()) return [3 /*break*/, 6];
                        return [4 /*yield*/, protractor_1.browser.findElement(by.css(usernameByCss)).sendKeys(adminLogin)];
                    case 5:
                        _a.sent();
                        console.log("Username \"" + adminLogin + "\" inserted");
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("Username field is not present in the screen");
                        _a.label = 7;
                    case 7: return [4 /*yield*/, protractor_1.browser.$('[name="password"]').isPresent()];
                    case 8:
                        if (!_a.sent()) return [3 /*break*/, 10];
                        return [4 /*yield*/, protractor_1.browser.$('[name="password"]').sendKeys(adminPassword)];
                    case 9:
                        _a.sent();
                        console.log("Password \"" + adminPassword + "\" inserted");
                        return [3 /*break*/, 11];
                    case 10:
                        console.log("Password field is not present in the screen");
                        _a.label = 11;
                    case 11: return [4 /*yield*/, protractor_1.browser.$('[name="remember_me"]').isPresent()];
                    case 12:
                        if (!_a.sent()) return [3 /*break*/, 15];
                        return [4 /*yield*/, protractor_1.browser.$('[name="remember_me"]').isSelected()];
                    case 13:
                        rememberMeIsChecked = _a.sent();
                        console.log("Remember Me checkbox is selected: " + rememberMeIsChecked);
                        if (!rememberMeIsChecked) return [3 /*break*/, 15];
                        return [4 /*yield*/, protractor_1.browser.$('[name="remember_me"]').click()];
                    case 14:
                        _a.sent();
                        _a.label = 15;
                    case 15: return [4 /*yield*/, protractor_1.browser.$('[name="login"]').click()];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.browser.$('[title="My Store"]')))];
                    case 17:
                        _a.sent();
                        console.log("Admin was able to log in. Quitting the browser.");
                        return [4 /*yield*/, protractor_1.browser.quit()];
                    case 18:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
});
