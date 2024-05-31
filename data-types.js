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

  /**
   * 
   * 
   * COMPLEX DATA TYPES
   * 
   * 
   * 
   * 
   * 
   */

  /**
   * 
   * 
   * ARRAYS
   * 
   * 
   */

  /**
   * 
   * 
   * OBJECTS
   * 
   * 
   * 
   */

  /**
   * 
   * 
   * COPY BY REFERENCE VS VALUE
   * 
   * 
   */


