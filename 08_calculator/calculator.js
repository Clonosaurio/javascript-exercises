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

const sum = function(arr) { //arr.reduce() was better
  if(arr.length == 0) {
    return 0;
    }
  let total = 0;
  arr.map(num => total += parseInt(num));
  return total;  
};

const multiply = function(arr) { //arr.reduce() was better
  let total = 1;
  arr.map(n => total *= n);
  return total;

  /* //from "solution" branch:
  return array.length
  ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;
  */

};

const power = function(n, p) {
	//easy solution:
  //return n**p;
  //from "solution" branch:
  //return Math.pow(a, b);
  total = n;
  for (let i = 1; i < p; i++) total = total * n;
  return total;
};

const factorial = function(n) {
  total = 1;
  for(let i = 1; i <= n; i++) total *= i;
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
