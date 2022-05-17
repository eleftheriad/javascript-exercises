const sumAll = function(num1, num2) {
    if (num1<0 || num2<0) {
        return "ERROR"
    }
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    }
    let diff = Math.abs(num2-num1)
    if (num2>num1) {
        max = num2
        min = num1
    }else {
        max= num1;
        min = num2;
    }
    let sum=0
    for (let i = 0; i < diff-1; i++) {
        sum = sum + (min + 1 + i);
    }
    sum = sum + min + max;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
