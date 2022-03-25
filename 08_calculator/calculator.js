const add = function(...n) {
	let total = 0
  n.map(num => total += num);
  return total;
};

const subtract = function(n1, ...n2) {
	let total = n1;
  n2.map(num => total -= num);
  return total;
};

const sum = function(arr) {
  if(arr.length == 0) {
    return 0;
    }
  let total = 0;
  arr.map(num => total += parseInt(num));
  return total;  
};

const multiply = function(arr) {
  let total = 1;
  arr.map(n => total *= n);
  return total;
};

const power = function(n, p) {
	// return n**p;
  total = n;
  for (let i = 1; i < p; i++) {
    total = total * n;
  }
  return total;
};

const factorial = function(n) {
  total = 1;
  for(let i = 1; i <= n; i++){
    total *= i;
  }
  return total;
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
