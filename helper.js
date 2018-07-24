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
exports.fillField = fillField;
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
exports.selectElementFromList = selectElementFromList;
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
exports.generateText = generateText;
function loginToApp(login, password) {
    return __awaiter(this, void 0, void 0, function () {
        var usernameByCss, rememberMeIsChecked;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    usernameByCss = '[name="username"]';
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.browser.$('[name="login_form"]')), 5)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.$(usernameByCss).isPresent()];
                case 2:
                    if (!_a.sent()) return [3 /*break*/, 4];
                    return [4 /*yield*/, protractor_1.browser.$(usernameByCss).sendKeys(login)];
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
                    console.log("Admin was able to log in.");
                    return [2 /*return*/];
            }
        });
    });
}
exports.loginToApp = loginToApp;
