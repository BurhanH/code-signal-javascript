const {add} = require("../source/add.js");
const assert = require("assert");

describe("Add function test suite", function () {
    describe("Positive tests", function () {
        it("add 6 and 5", function () {
            assert(add(6,5), 11);
        });
    });
});
