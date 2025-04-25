// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
I: An array of arrays
O: A single array with everything inside
C: Use reduce method
*/
function flatten(nestedArr) {
  return nestedArr.reduce((acc, current) => {
    // make acc = to concat with current
    acc = acc.concat(current);
    return acc;
  }, [])
};

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
I: A value, a function, an update function, and a body function
O: Make a loop and iterate through
*/
function loop(start, condition, update, action) {
  // for loop w/ start value, range, incrementer
  for (let i = start; condition(i); update(i)){
    // body function
    action(i);
  }
};

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
I: An array and a test condition
O: Boolean, true if every element passes the test
*/
function every(array, test) {
  // for loop
  for (let i = 0; i < array.length; i++){
    // if any fail the test return false right away
    if (!test(array[i])){
      return false;
    }
  }
  // if everything passes return true
  return true;
};

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
I: A string
O: "ltr" if string direction is left to right
   "rtl" if string direction is right to left
*/
function dominantDirection(string) {
  // create a variable ltr and init as empty array
  let ltr = [];
  // create variable rtl and init as empty array
  let rtl = [];
  
  // iterate through string
  for (let i = 0; i < string.length; i++){
    // character script helper function - 
    // takes in char code, if it falls in a certain range, return script object from scripts.js
    let script = characterScript(string.charCodeAt(i));
    // determine if it exists
    if (script !== null){
      // push into ltr and rtl arrays
      if (script.direction === "ltr"){
        ltr.push(script);
      } else {
        rtl.push(script);
      }
    }
  };
  
  // whichever array is longer is dominant direction
  if (ltr.length > rtl.length){
    return "ltr";
  } else {
    return "rtl";
  }
};

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};