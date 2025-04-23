////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: 3 numbers, start of range, end, and increment/ decrementor - which is optional
O: The range as an array
C: N/A
E: If there is no increase/ decreaser go by 1
*/
function range(start, end, step, output = []) {
  // if start = end or step is negative, return empty array
  if (start === end || step < 0){
    return output;
  };
  // if step is undefined, step = 1
  if (step === undefined){
    step = 1;
  };
  // if positive direction
  if (start < end){
    // for loop incrementing
    for (let i = start; i <= end; i += step){
      output.push(i);
    }
  }; 
  //  if negative direction
  if (start > end){
    // for loop for decrementing
    for (let i = start; i >= end; i -= step){
      output.push(i);
    }
  };
  return output;
};


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  // reduce method on array
  return array.reduce((acc, current) => {
    // add each number
    acc += current;
    return acc;
  }, 0);
};


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: An array
O: A new array - reversed
*/
function reverseArray(array, output = []) {
  // for loop going backwards - push to output
  for (let i = array.length - 1; i >= 0; i--){
    output.push(array[i]);
  }
  return output;
};


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: An array
O: The original array - reversed
*/
function reverseArrayInPlace(array){
  // output array - backwards elements
  let reverseCopy = [];
  for (let i = array.length - 1; i >= 0; i--){
    reverseCopy.push(array[i]);
  }
  // reassign original array to new array
  for (let i = 0; i < array.length; i++){
    array[i] = reverseCopy[i];
  }
  return array;
};


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// video available
// a list is an object structured as a series of nodes (nested objects)

function arrayToList(array) {
  //create function scoped variable null
  let rest = null;
  // iterate backwards
  for (let i = array.length - 1; i >= 0; i--){
    // reassign rest to value: thing in array and then rest is a nest
    rest = {value: array [i], rest: rest};
  }
  // return rest - reassigned
  return rest;
};


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// video available
/*
I: A list (object)
O: An array of the values
*/
// start at outer and end at inner
function listToArray(list, array = []) {
  // base - once we hit innermost
  if (list.rest === null){
    // last value
    array.push(list.value);
    return array;
  }
  // recursion - add values to array
  array.push(list.value);
  // return rest - get rid of first onion layer
  return listToArray(list.rest, array);
};


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: An element and a list (element = value: __)
O: A new list, adds the element to the front of the input list
   basically add the outermost layer 
*/
function prepend(element, list) {
  //add value: element and then enclose rest of list inside an object
  //holder object
  addedList = {};
  // put element inside
  addedList.value = element;
  // put rest inside
  addedList.rest = list;
  return addedList;
};


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
I: A list and a number
O: The element that exists at that number (indexed at 0)
*/
function nth(list, number) {
  // can i just use the list to array function here?
  let listArr = listToArray(list);
  // return index <number> if it exists in array
  if (number >= 0 && number <= listArr.length - 1){
    return listArr[number];
    // else it does not exist
  } else {
    return undefined;
  }
};

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// video available

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};