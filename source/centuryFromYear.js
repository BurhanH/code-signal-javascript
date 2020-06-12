// https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN
// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
    if (typeof year === 'number' && (year % 1) === 0) {
        if (1 <= year && year <= 2005) {
            return Math.ceil(year/100);
        };
    };
    return 0;
};

exports.centuryFromYear = centuryFromYear;
