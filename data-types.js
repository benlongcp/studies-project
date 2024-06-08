/**
 * SIMPLE/PRIMITIVE DATA TYPES Presentation
 * 
 * discrete values, they are "atomic" meaning they cannot store additional values --cannot be mutated
 * 
 * operations on these values do not mutate them, rather NEW values are returned
 * 
 * variables hold the ACTUAL VALUES of simple data types
 *
 * primitive types are passed to a funciton via COPY as opposed to REFERENCE
 **/


 /* 
 * 
 * NUMBER => integers and decimals (floating point)
 * 
 * number encoding  => 1 bit to represent positive or negative
 *                  => 11 bits for the exponont(-1022 to 1023)
 *                  => 52 bits for the mantissa - multiplied by the base, to the power of the exponent
 *                  => all integers are between -2**(52) + 1 and 2**(53) -1
 * 
 * Number Coercion  => numbers are returned as-is
 *                  => null becomes 0
 *                  => true is 1, flase is 0
 * 
 * 
 * Number static properties
 *                  => Number.MAX_SAFE_INTEGER => 2**53 - 1
 *                  => Number.MIN_SAFE_INTEGER => -(2**53 - 1)
 *                  => Number.NaN => not a number value
 *                  => Number.NEGATIVE_INFINITY
 *                  => Number.POSITIVE_INFINITY
 *                  
 * Static Methods
 *                  => Number.isNaN()
 *                  => Number.isFinite()
 *                  => Number.isInteger()
 * 
 * 
 * 
 * 
 * 
 **/                 

 150;
 console.log(150);
 var num = 300;
 var num2 = 150 * 2;
 var float = 33.333;
 
 console.log(float);
 
 
  /**
  * 
  * 
  * 
  * STRING => sequence of characters
  *                  => enclosed in quotes either "" or ''
  *                  => can be concatenated, '+' and compared with equality operators
  *                  => can be accessed with bracket index notation
  * 
  * String Coercion 
  *                  => Strings are returned as-is
  * 
  * 
  * String methods
  *                  => .concat()
  *                  => .endsWith()
  *                  => .includes()
  *                  => .replace()
  *                  => .slice()
  *                  => .split()
  *                  => .startsWith
  *                  => .toLowerCase()
  *                  => .toUpperCase()
  * 
  *
  *   
  * 
  **/
 
  "string";
  var string = "also a string";
  console.log(string[3]);
  var strings = string + " " + string;
  console.log(strings);
  
  if (string + " " + string === strings){
      console.log("equal strings");
  } else {
    console.log("nope");
  }
  
  console.log(string.replace('string', 'gnirts'))
 
  /**
   * 
   * 
   * BOOLEAN => Represents true or false
   * 
   *                     => !! => Double Bang operator converts any non-boolean value into a boolean value
   *                     => Booleans returned as-is
   *                     => undefined is false
   *                     => null is false
   *                     => 0, -1, NaN are false
   *                     => All other numbers are true
   *                     => "" (empty strting) is false
   *                     => All other strings are true
   *                     => All objects are true
   *                     => [] (empty array) is truthy on its own, is loosely equal to false (when comparing to a primitive is conveted to a primitive)
   * 
   * Boolean Methods
   *                     => .toString()
   * 
   * 
   * 
   * 
   */
 
  var booly = true;
 
  console.log(booly);
 
  var bhuely = !!0;
  console.log(bhuely);
 
  var testArray = [];
 
  var arrayValue = !!testArray;
 
  console.log(arrayValue);
 
  console.log(arrayValue == 0);
 
  /**
   * 
   * NaN => Not a Number
   *                     => Not Writable
   *                     => Not Enumerable
   *                     => Not Configurable
   * 
   *                     => Failed number conversion
   *                     => imaginary numers => Math.sqrt(-1)
   *                     => messing with Infinity
   *                     => NaN coerces other operands in an expression or mehtod into NaN
   *                     => Any time an invalid value is respresented as a number
   * 
   * 
   * 
   */
 
  console.log(Number(undefined));
  console.log(Math.sqrt(-1));
 
  /**
   * 
   * 
   * undefined => absence of value
   *                     => return statement with no value (return;)
   *                     => accessing nonexistent object properties
   *                     => initialized undeclared variables
   *                     
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   */
 
  let x;
  console.log(x);
 
  /**
   * 
   * null => intentional absence of object value
   * 
   * 
   * 
   * 
   */
 
  var emptyVessel = null;
  console.log(emptyVessel);
 
 
 
  console.log(1 + null);
// /**
//  * COLLECTIONS
//  * 
//  * ARRAYS VS OBJECTS
//  * 
//  * Objects are used for storing different values attached to keywords within a single scope
//  * 
//  * Arrays are used to collect like-data together and are indexed numerically
//  * 
//  * Collections are complex datatypes, meaning they do not have a fixed size in memory are copied by reference and are mutable
//  * 
//  */



[];
{};
let testArr = []; // array literal
let testObj = {}; //object literal
console.log(testArr);
console.log(testObj);



// /**
//  * ADDING TO ARRAYS
//  * 
//  * When populating an array with values, commas (,) are used to separate values into their indexes
//  * 
//  * Arrays are indexed numerically and can have values added directly through the index number using bracket notation
//  * 
//  * Several Array methods can also add values
//  *  .push() method
//  *  .unshift() method
//  *  .splice() method
//  * 
//  * 
//  * 
//  * 
//  */



//adding a value to an array by direct index
 testArr[0] = "direct";
 console.log(testArr);

 //adding data to the end of the array with the .push() method
 testArr.push("push");
 console.log(testArr);

 //adding data to the beginning of the array with .unshift() method
 testArr.unshift("unshift");
 console.log(testArr);

 //adding data to the middle of the array with the .splice() method
testArr.splice(2, 0, "spliced in", "also spliced in", "also also spliced in"); // .spice(/start index/, /delete count/, /replacement data/, ... , /replacement data/)
console.log(testArr);



// /** 
//  * ADDING TO OBJECTS
//  * 
//  * Populating an object with key/value data, commas are used to separate key/value pairs, (:) colons are used to associate them
//  *      { key: "value",
//  *        key2: "value2"
//  *      }
//  * 
//  * objects are otherwise added or appended with direct key access using either bracket or dot notation
//  * 
//  * dot notation uses the literal key name with no quotes
//  * 
//  * bracket notation uses either the literal key name in quotes or a placeholder not in quotes 
//  * 
//  * 
//  * 
//  */




//creating a new key:value pair with dot notation
testObj.key1 = "value1"
console.log(testObj.key1); //accessing the value with dot notation

//creating a new key:value pair with bracket notation and a non-literal string
let keyVar = 'key2'
testObj[keyVar] = "value2"
console.log(testObj['key2']); // in quotes if literal key
console.log(testObj[keyVar]); // not in quotes if referenceing the key



// /**
//  * REMOVING DATA FROM ARRAYS
//  * 
//  * Values in arrays can be removed from the head or tail with .shift() and .pop() methods respectively
//  * 
//  * The .splice() method can be used to remove values from the middle of an array
//  * 
//  * The .slice() method can be used to remove values in relation to the head or tail of an array
//  * 
//  */




//.pop() methods used to remove the "push" data
testArr.pop(); 
console.log(testArr);

// .shift() methods used to remove "unshift" data
testArr.shift();
console.log(testArr);

//splice method is used to remove the "direct" data
testArr.splice(0, 1);
console.log(testArr);

//slice method used to crop the ends of the array
console.log(testArr.slice(1, 2)); //=> returns a new value




// /** REMOVING DATA FROM OBJECTS
//  *
//  * The delete unary operator is used to remove key:value pairs from objects
//  * 
//  */

//delete unary operator deletes the key and value corresponding to key1
delete testObj.key1;
console.log(testObj);


// /** ACCESSING ITEMS IN COLLECTIONS
//  * 
//  * Arrays use direct indexing with bracket notation
//  * 
//  * objects used key indexing either with bracket notation or dot notation
//  * 
//  */

console.log(testArr[0]);
console.log(testObj.key2);
console.log(testObj['key2']);