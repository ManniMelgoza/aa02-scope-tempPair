/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the function to a variable using the const keyword and
arrow function syntax.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/

// const totalSum = arrowRestSum = (...numbers) => {
const arrowRestSum = (...numbers) => {

  let total = 0;
  for(let num of numbers) {
    console.log(num);
    total += num;
  }
  return total;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}
