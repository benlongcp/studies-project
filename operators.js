/**
 * OPERATORS
 * 
 * 0.   Operators act on data
 * 
 * 1.   operators are organized by HOW the act on data and the number of pices of data (operands) they act upon
 * 
 * 
 */


/**
 * ASSIGNMENT OPERATORS
 * 
 * 0.   the assignment operator (=) is used to assign a value to a variable or property
 * 
 * 1.   it is a binary operator, meaning it acts upon two operands
 * 
 * 2.   assigns value to the left operand based on the value of the right operand   
 * 
 * 3.   (*=) multiplication assignment
 * 
 * 4.   (/=) division assignment
 * 
 * 5.   (%=) remainder assignment
 * 
 * 6.   (+=) addition assignment
 * 
 * 7.   (-=) subtraction assignment
 * 
 */

//declare a variable
let nombre;
//assign it to a value with (=)
nombre = 10;
console.log(nombre)

//assign nombre to itself times itself
nombre *= nombre;
console.log(nombre);

//assign nombre to itself divided by 2
nombre /= 2;
console.log(nombre);

//assign nombre to the remainder of itself divided by 40
nombre %= 40;
console.log(nombre);

//assign nombre to itself plus itself
nombre += nombre;
console.log(nombre);

//assign nombre to itself minus 5
nombre -= 5;
console.log(nombre);

/**
 * ARITHMETIC OPERATORS
 * 
 * 0.   take numbers as operands in the form of literals and/or variables and return a single numerical value
 * 
 * 1.   (**) Exponent operator
 * 
 * 2.   (*) Multiplication operator
 * 
 * 3.   (/) division operator
 * 
 * 4.   (%) remainder operator (modulus)
 * 
 * 5.   (+) addition operator
 * 
 * 6.   (-) subtraction operator
 * 
 * 
 */

//nombre = 15

// nombre to the power of 2 => 225
console.log(nombre ** 2);

//nombre times 2 => 30
console.log(nombre * 2);

//nombre divided by 5 => 3
console.log(nombre / 5);

//nombre  divided by 8 remainder => 7
console.log(nombre % 8);

//nombre plus 9 => 24
console.log(nombre + 9);

//nombre minus 5 => 10
console.log(nombre - 5);


/**
 * COMPARISON OPERATORS
 * 
 * 0.   Compares two operands and returns a boolean value (true or flase) depending on the veracity of the comparison
 * 
 * 1.   (<) less than checks if left operand is less than the right operand
 * 
 * 2.   (>) greater than checks if left operand is greater than the right operand
 * 
 * 3.   (<=) less than equal to checks if left operand is less or equal than the right operand
 * 
 * 4.   (>=) greater than equal to checks if left operand is greater than or equal to the right operand
 * 
 * 5.   (instanceof) determines whether an object is an instance of another object
 * 
 * 6.   (in) determines if an object has a particular property
 * 
 * EQUALITY OPERATORS
 * 
 * 7.   (==) equality operator
 * 
 * 8.   (!=) inequality oeprator
 * 
 * 9.   (===) strict equality
 * 
 * 10.  (!==) strict inequality
 * 
 * 
 */

// let's see if 3 is less than 4
console.log(3 < 4); //=> true

// but is 3 greater than 4?
console.log(3 > 4); //=>false

//now let's see if 5 is less than or equal to 5
console.log(5 <= 5); //=> true

//is 5 greater than or equal to 6?
console.log(5 >= 6); //=> false

//now let's make a test object
const leObjet = {
    property1: "gumdrops",
    property2: 29,
    property5: false,
}

//and let's check to see if property2 is in leObjet
console.log("property2" in leObjet);

//is the string of "3" loosely equal to the number 3?
console.log("3" == 3); //=> true
//is the string "3" strictly equal to the number 3
console.log("3" === 3, "*"); //=> false
//the inverse also holds with (!=) and (!==)
console.log("3" != 3);//=> false
console.log("3" !== 3, "*");//=> true 


/** 
 * LOGICAL OPERATORS
 *  
 * 0.   short circuiting behavior -> from left to right the first operand that meets the condition is evaluated
 * 
 * 1.   (&&) logical AND
 * 
 * 2.   (||) logical OR
 * 
 * 3.   (??) nullish coalescing operator
 * 
 * 
 */

// true and true resolves to true
console.log(true && true);
//false and true resolves to false -- once the first operand is found to be false, the second operand is skipped and false is returned (short circuiting)
console.log(false && true);
// true and false returns false, as does false and false
console.log



/** 
 * UNARY OPERATORS
 * 
 * 0.   A unary operation uses only one operand
 * 
 * 1.   (!) logical not operator, does the opposite
 * 
 * 2.   (-) negation operator converts operand to a Number type and negates it
 * 
 * 3.   (typeof) operator determines the type of a given object
 * 
 * 4.   (delete) operator deletes a property from an object
 * 
 * 
 */

console.log(!true);

console.log(!false);

console.log(+true);

console.log(+false);

let numba1 = 1;

let numba2 = -2;

console.log(+numba2);

console.log(-numba1);

console.log(typeof 33);

console.log(typeof "string?");

let objection = {
    key1: "value 1",
    key2: "value 2",
    key3: "value 3",
};

delete objection.key2;

console.log(objection);


/**
 * TERNARY OPERATOR
 * 
 * 0.   only operator in js that takes three operands: a condition to evaluate, an expression if truthy and an an expression if falsey
 * 
 * 1.   used as an alternative to an if-else statement
 * 
 * 2.   condition ? exprIfTrue : exprIfFalse
 * 
 */


//we create a condition expression that can evaluate to true or false
let condition = true;

//condition is evaluated and true or false response is returned
condition ? console.log(true) : console.log(false);