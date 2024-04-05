/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/

function sandwichMaker() {
  let ingredients = ["tomato"];

  return function(ingredient) {
    ingredients.push(ingredient);
    // The push() method of Array instances adds the
    // specified elements to the end of an array and
    // returns the new length of the array.

    return "One sandwich with " + ingredients.join(" and ");
    // The join() method of Array instances creates and returns
    // a new string by concatenating all of the elements in
    // this array, separated by commas or a specified separator
    // string. If the array has only one item, then that item will
    // be returned without using the separator.
  };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
