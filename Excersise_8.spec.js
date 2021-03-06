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
describe('Excersise 8', function () {
    var usernameByCss = '[name="username"]';
    it('should check stickers ', function () {
        return __awaiter(this, void 0, void 0, function () {
            var appAddress, cardCss, stickerCss, nameCss, cards, _i, cards_1, card, stickerIsPresent, stickers, name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appAddress = 'http://localhost/litecart/';
                        cardCss = 'ul.products>li';
                        stickerCss = '.sticker';
                        nameCss = '.name';
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.get(appAddress)];
                    case 2:
                        _a.sent();
                        console.log('Page opened');
                        return [4 /*yield*/, protractor_1.browser.$$(cardCss).asElementFinders_()];
                    case 3:
                        cards = _a.sent();
                        _i = 0, cards_1 = cards;
                        _a.label = 4;
                    case 4:
                        if (!(_i < cards_1.length)) return [3 /*break*/, 10];
                        card = cards_1[_i];
                        return [4 /*yield*/, card.$(stickerCss).isPresent()];
                    case 5:
                        stickerIsPresent = _a.sent();
                        stickers = [];
                        if (!stickerIsPresent) return [3 /*break*/, 7];
                        return [4 /*yield*/, card.$$(stickerCss).asElementFinders_()];
                    case 6:
                        stickers = _a.sent();
                        _a.label = 7;
                    case 7: return [4 /*yield*/, card.$(nameCss).getText()];
                    case 8:
                        name = _a.sent();
                        expect(stickers.length).toBe(1, "The card " + name + " has incorrect number of stickers: " + stickers.length + " instead of the only one");
                        console.log("Number of stickers on card \"" + name + " is " + stickers.length + "\"");
                        _a.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 4];
                    case 10: return [4 /*yield*/, protractor_1.browser.quit()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    function checkH1ElementIsPresent() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protractor_1.browser.$('h1').isPresent()];
            });
        });
    }
});
