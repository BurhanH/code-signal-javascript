// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
// Given the string, check if it is a palindrome.

function isPalindrome(inputString) {
    if ((typeof inputString === 'string') && (1 <= inputString.length) && (inputString.length <= 100000)) {
        return inputString === inputString.split("").reverse().join("");
    } else {
        return false;
    };
};

exports.isPalindrome = isPalindrome;
