const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(array) {
  let sum_= 0
	for (let i = 0; i < array.length; i++) {
    sum_ = sum_ + array[i];
  }
  return sum_
};

const multiply = function(Y) {
  let product = 1;
  for (let i = 0; i < Y.length; i++) {
    product = product * Y[i];
  }
  return product;
};

const power = function(x, y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
	if (x === 0 || x===1) {
    return 1;
  }
  let fact = x;
  for (let i = 0; i < x-1 ; i++) {
    fact = fact * (x-1-i)
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
