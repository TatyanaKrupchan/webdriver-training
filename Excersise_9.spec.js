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
describe('Excersise 9', function () {
    var usernameByCss = '[name="username"]';
    it('should check sorting', function () {
        return __awaiter(this, void 0, void 0, function () {
            var appAddressCountries, appAddressGeoZones, tableRowCss, countryLinkCss, adminLogin, adminPassword, countries, res, countryNames, sortedCountryNames, tableRows, i, cells, countryToOpen, regionRows, regionNameCss, regions, regionNames, j, regionSelected, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        appAddressCountries = 'http://localhost/litecart/admin/?app=countries&doc=countries';
                        appAddressGeoZones = ' http://localhost/litecart/admin/?app=geo_zones&doc=geo_zones';
                        tableRowCss = 'tr.row';
                        countryLinkCss = 'a';
                        adminLogin = 'admin';
                        adminPassword = 'admin';
                        return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.get(appAddressCountries)];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, helper_1.loginToApp(adminLogin, adminPassword)];
                    case 3:
                        _c.sent();
                        console.log('Page opened');
                        countries = new Array();
                        res = new Array();
                        return [4 /*yield*/, getArraysOfElements(tableRowCss, 4, 'td', countryLinkCss)];
                    case 4:
                        countries = _c.sent();
                        countryNames = new Array();
                        return [4 /*yield*/, getArraysOfNames(countries, "text")];
                    case 5:
                        countryNames = _c.sent();
                        console.log("countryNames length = " + countryNames.length);
                        sortedCountryNames = countryNames.slice(0);
                        return [4 /*yield*/, checkSorting(countryNames)];
                    case 6:
                        _c.sent();
                        console.log("Starting second part. Switching to another page.");
                        return [4 /*yield*/, protractor_1.browser.get(appAddressGeoZones)];
                    case 7:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.$$(tableRowCss).asElementFinders_()];
                    case 8:
                        tableRows = _c.sent();
                        console.log("Number of countries to check: " + tableRows.length);
                        i = 0;
                        _c.label = 9;
                    case 9:
                        if (!(i < tableRows.length)) return [3 /*break*/, 26];
                        if (!(i > 0)) return [3 /*break*/, 12];
                        return [4 /*yield*/, protractor_1.browser.get(appAddressGeoZones)];
                    case 10:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.$$(tableRowCss).asElementFinders_()];
                    case 11:
                        tableRows = _c.sent();
                        _c.label = 12;
                    case 12: return [4 /*yield*/, tableRows[i].$$('td').asElementFinders_()];
                    case 13:
                        cells = _c.sent();
                        return [4 /*yield*/, cells[2].$(countryLinkCss).getAttribute("text")];
                    case 14:
                        countryToOpen = _c.sent();
                        return [4 /*yield*/, cells[2].$(countryLinkCss).click()];
                    case 15:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.browser.$('table#table-zones')), 5)];
                    case 16:
                        _c.sent();
                        return [4 /*yield*/, protractor_1.browser.$$("table tr").asElementFinders_()];
                    case 17:
                        regionRows = _c.sent();
                        regionNameCss = 'table#table-zones tr:not(.header) select:not(.select2-hidden-accessible)';
                        return [4 /*yield*/, protractor_1.browser.$$(regionNameCss).asElementFinders_()];
                    case 18:
                        regions = _c.sent();
                        regionNames = new Array();
                        console.log("Number of regions for country " + countryToOpen + " = " + regions.length);
                        j = 0;
                        _c.label = 19;
                    case 19:
                        if (!(j < regions.length)) return [3 /*break*/, 23];
                        return [4 /*yield*/, regions[j].$('[selected]').isPresent()];
                    case 20:
                        regionSelected = _c.sent();
                        if (!regionSelected) return [3 /*break*/, 22];
                        _b = (_a = regionNames).push;
                        return [4 /*yield*/, regions[j].$('[selected]').getAttribute("text")];
                    case 21:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 22;
                    case 22:
                        j++;
                        return [3 /*break*/, 19];
                    case 23: return [4 /*yield*/, checkSorting(regionNames)];
                    case 24:
                        _c.sent();
                        _c.label = 25;
                    case 25:
                        i++;
                        return [3 /*break*/, 9];
                    case 26: return [4 /*yield*/, protractor_1.browser.quit()];
                    case 27:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    function checkSorting(names) {
        return __awaiter(this, void 0, void 0, function () {
            var sortedNames, i;
            return __generator(this, function (_a) {
                sortedNames = names.slice(0);
                // console.log(`County Names are:`);
                // console.log(sortedCountryNames);
                sortedNames.sort();
                for (i = 0; i < names.length; i++) {
                    expect(names[i]).toBe(sortedNames[i], i + 1 + " row in the table is incorrect: expected " + sortedNames[i] + " while seen " + names[i]);
                }
                return [2 /*return*/];
            });
        });
    }
    function getArraysOfNames(elements, attributeName) {
        return __awaiter(this, void 0, void 0, function () {
            var result, _i, elements_1, element, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        result = new Array();
                        _i = 0, elements_1 = elements;
                        _c.label = 1;
                    case 1:
                        if (!(_i < elements_1.length)) return [3 /*break*/, 4];
                        element = elements_1[_i];
                        _b = (_a = result).push;
                        return [4 /*yield*/, element.getAttribute(attributeName)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    }
    function getArraysOfElements(tableRowCss, elementsInArray, cellCss, elementCss) {
        return __awaiter(this, void 0, void 0, function () {
            var tableRows, result, _i, tableRows_1, tableRow, cells, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.$$(tableRowCss).asElementFinders_()];
                    case 1:
                        tableRows = _c.sent();
                        result = new Array();
                        _i = 0, tableRows_1 = tableRows;
                        _c.label = 2;
                    case 2:
                        if (!(_i < tableRows_1.length)) return [3 /*break*/, 6];
                        tableRow = tableRows_1[_i];
                        return [4 /*yield*/, tableRow.$$(cellCss).asElementFinders_()];
                    case 3:
                        cells = _c.sent();
                        _b = (_a = result).push;
                        return [4 /*yield*/, cells[elementsInArray].$(elementCss)];
                    case 4:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6:
                        console.log("Result array length: " + result.length);
                        // console.log(result[i]);
                        return [2 /*return*/, result];
                }
            });
        });
    }
});
