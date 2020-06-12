const { centuryFromYear } = require("../source/centuryFromYear.js");
const assert = require("assert");

describe("Century from year function test suite", function () {
    describe("Positive tests", function () {
        it("1988 year", function () {
            assert(centuryFromYear(1988) === 20);
        });
        it("1 year", function () {
            assert(centuryFromYear(1) === 1);
        });
        it("2001 year", function () {
            assert(centuryFromYear(2001) === 21);
        });
        it("2000 year", function () {
            assert(centuryFromYear(2000) === 20);
        });
    });
    describe("Negative tests", function () {
        it("'abcd' input", function () {
            assert(centuryFromYear('abcd') === 0);
        });
        it("call centuryFromYear function with no parameters", function () {
            assert(centuryFromYear() === 0);
        });
        it("0 year", function () {
            assert(centuryFromYear(0) === 0);
        });
        it("2010 year", function () {
            assert(centuryFromYear(2010) === 0);
        });
        it("-456 input", function () {
            assert(centuryFromYear(-456) === 0);
        });
    });
});
