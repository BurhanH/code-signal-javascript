const { add } = require("../source/add.js");
const assert = require("assert");

describe("Add function test suite", function () {
    describe("Positive tests", function () {
        it("add 6 and 5", function () {
            assert(add(6, 5) === 11);
        });
        it("add 0 and 1000", function () {
            assert(add(0, 1000) === 1000);
        });
        it("add -2 and 4", function () {
            assert(add(-2, 4) === 2);
        });
        it("add -100 and 100", function () {
            assert(add(-100, 100) === 0);
        });
        it("add -100 and 89", function () {
            assert(add(-100, 89) === -11);
        });
        it("add -1000 and -999", function () {
            assert(add(-1000, -999) === -1999);
        });
    });
    describe("Negative tests", function () {
        it("add 'a' and 5", function () {
            assert(add('a', 5) === 0);
        });
        it("call add function with no parameters", function () {
            assert(add() === 0);
        });
    });
});
