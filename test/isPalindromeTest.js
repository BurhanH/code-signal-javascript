const { isPalindrome } = require("../source/isPalindrome.js");
const assert = require("assert");

describe("isPalindrome function test suite", function () {
    describe("Positive tests", function () {
        it("aabaa", function () {
            assert(isPalindrome("aabaa") === true);
        });
        it("abac", function () {
            assert(isPalindrome("abac") === false);
        });
        it("c", function () {
            assert(isPalindrome("c") === true);
        });
    });
    describe("Negative tests", function () {
        it("empty string", function () {
            assert(isPalindrome("") === false);
        });
        it("invoke the function without parameter", function () {
            assert(isPalindrome() === false);
        });
         it("pass a number as a parameter", function () {
            assert(isPalindrome(56) === false);
        });
    });
});
