// https://app.codesignal.com/arcade/intro/level-1/jwr339Kq6e3LQTsfa
// Write a function that returns the sum of two numbers.

function add(param1, param2) {
    if (typeof param1 === 'number' && (param1 % 1) === 0) {
        if (typeof param2 === 'number' && (param2 % 1) === 0) {
            if (-1000 <= param1 && param1 <= 1000) {
                if (-1000 <= param2 && param2 <= 1000) {
                    return param1 + param2;
                };
            };
        };
    };
    return 0;
}

exports.add = add;
