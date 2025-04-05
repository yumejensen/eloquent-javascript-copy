
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(num) {
  //the num determines the size of the triangle
  // for loop that starts at 1, stops at num
  for (let count = 1; count <= num; count++){
    let mySymbol = '#';
    // repeat method returns new string with specified number of copies
    console.log(mySymbol.repeat(count));
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  // for loop that goes from start to end
  for (let count = start; count <= end; count++)
    if (count % 3 === 0 && count % 5 === 0){
      console.log("fizzbuzz");
    } else if (count % 3 === 0){
      console.log("fizz");
    } else if (count % 5 === 0){
      console.log("buzz");
    } else {
      console.log(count);
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
  // start with empty string for board
  let chessboard = "";
  // for loop for the lines
  for (let i = 1; i <= x; i++){
    // variables for space and #
    let space = " ";
    let square = "#";
    // space will be odd and square will be even
    if (i % 2 !== 0){
      chessboard += space;
    } else {
      chessboard += square;
    }
  }
  return chessboard;
}

console.log(drawChessboard(8));





////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}