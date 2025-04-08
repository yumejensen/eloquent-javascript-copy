////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  if (num1 < num2){
    return num1;
  } else {
    return num2;
  }
};

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
  // base - if subtracting by 2 ends in 1, it's odd
  // base - if subtracting by 2 ends with 0, it's even
  if (n === 1) {
    return false;
  } else if (n === 0){
    return true;
  }
  // recursiom
  // minus 2 until 1 or 0 OR
  // add 2 until 1 or 0
  if (n < 0){
    return isEven(n+2);
  } else if (n > 0){
    return isEven(n-2);
  }
};


////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// takes in a string + character
// default param is 0 for counter
function countChars(string, char, count=0) {
  //for loop to go over string
  for (let i = 0; i < string.length; i++){
    if (char === string[i]){
      // when a character is found, add to the count
      count += 1;
    }
  }
  return count;
};

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//similar process - takes in string and has default param 0 for counter
function countBs(string, count=0) {
  // for loop to search string
  for (let i = 0; i < string.length; i++){
    if (string[i] === 'B'){
      // if something is 'B' add to count
      count += 1;
    }
  }
  return count;
};

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};