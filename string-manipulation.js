/**
 * STRING MANIPULATION
 * 
 * 0.   strings are indexed similarly to arrays and individual characters can be accessed with bracket notation
 * 
 * 1.   Strings have a length property of the number of characters it is composed of that can then be iterated through
 * 
 * 
 */

let string = "free bumperstickers with every purchase";

console.log(string[0]); //=> "f"

console.log(string.length);//=> 39

let indexStr = '0123456789';

console.log(indexStr[5]); //=> "5"

for (let i = 0; i < string.length; i++){
    console.log(string[i]);
}


/**
 * OPERATORS
 * 
 * 0.   strings can be assigned to variables
 * 
 * 1.   strings can be added to other strings with the '+' operator
 * 
 * 2.   strings can be checked against one another with comparison operators "<" ">" "<=" ">=" "==" "===" (case sensitive)
 * 
 * 
 * 
 */


let emptyStr = "";

let strVal = "value";

emptyStr += strVal;

console.log(emptyStr);



let double = emptyStr + strVal;

console.log("double:  ", double);

console.log("hello" === "hi");



if (double === emptyStr + strVal){

    console.log("seeing double");
}




/**
 * NOTABLE STRING METHODS
 * 
 * 0.   .charAt(index) => takes an index number and returns the character at that index
 * 
 * 1.   .concat(str1, str2, ... , strN) => concatenates string arguments into a new string
 * 
 * 2.   .endsWith(searchString, endPosition) => returns a boolean value as to whether a string ends with the characters of the input
 * 
 * 3.   .includes(searchString) => returns a boolean value checkiing if the argument string is contained inside a striung
 * 
 * 4.   .indexOf(searchString, startPosition) => returns the index of the first occurrence of the searched string
 * 
 * 5.   .lastIndexOf(searchString, startPosition) => returns the index of the last occurrence of the searched for string
 * 
 * 6.   .replace(searchString, replacement) => returns a new string with the first instance of the search pattern replaced
 * 
 * 7.   .replaceAll(searchString, replacement) => same as above, but replaces all instances of the search pattern
 * 
 * 8.   .slice(start, stop) => extracts a section of string, returning it as a new string
 * 
 * 9.   .split(separator) => divides the string into an array
 * 
 * 10.  .startsWith(searchString, startPosition) => determines if the string starts with the specified search string
 * 
 * 11.  .toUpperCase() => makes string uppercase
 * 
 * 12.  .toLowerCase() => makes string lowercase
 *  
 */



let alphabet = "ABCDEFGHIJKLMNOpqrstUVWXYZ"

let stringMeths = `alphabet: ${alphabet}\n

alphabet.charAt(0): ${alphabet.charAt(0)}\n

double.concat(double): ${double.concat(double)}\n

alphabet.endsWith('Z'): ${alphabet.endsWith("Z")}\n

alphabet.includes('LMNOP'): ${alphabet.includes("LMNOP")}\n

alphabet.indexOf('N'): ${alphabet.indexOf('N')}\n

(alphabet + alphabet).lastIndexOf('N'): ${(alphabet + alphabet).lastIndexOf('N')}\n

alphabet.replace("ABC", "abc"): ${alphabet.replace("ABC", "abc")}\n

(alphabet + alphabet).replaceAll("XYZ", "xyz"): ${(alphabet + alphabet).replaceAll("XYZ", "xyz")}\n

alpabet.slice(0, 3): ${alphabet.slice(0, 3)}\n

alphabet.split(''):  ${alphabet.split("")}\n

alphabet.startsWith(ABC): ${alphabet.startsWith("ABC")}\n

alphabet.toUpperCase(): ${alphabet.toUpperCase()}\n

alphabet.toLowerCase(): ${alphabet.toLowerCase()}
`;

console.log(stringMeths);