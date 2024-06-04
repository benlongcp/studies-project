//now what could this be doing all the way up here?
console.log(bacon);

/**
 * STORING DATA (BINDINGS)
 * 
 * 0.   A binding is the primary mechanism for storing a value in memory
 * 
 * 1.   Can be thought of as a pointer or a containment vessel that either references or directly stores information
 *      This value is "pinned" to the scope where it is declared
 * 
 * 2.   Bindings are nitialized through declaration and assigment.
 * 
 * 3.   For the purposes of data storage/reference, stored values can be declared as a variable (var), let, or constant (const)
 * 
 * 4.   We can store both complex and primitive datatypes
 * 
 * 5.   stored values in bindings are expressions and always resolve to the data they represent
 * 
 * 6.   should have qualitative, readable names, andUseCamelCase naming convention
 * 
 */

// a wild number on the loose:
55;
// must be allocated space in storage to use it for anything, so let's create a lil tracking tag
var numbaFiftyFive;
//we'll catch and release and attatch "numba" to this number (data)
numbaFiftyFive = 55;
//we can exchange the ticket for that data whenever we want now
console.log(numbaFiftyFive);
//our tracking tag can be tracked with another tracking tag
var numba = numbaFiftyFive;
console.log(numba);

/**
 * DECLARATION & ASSIGNMENT
 * 
 * 0.   Stored values can be declared with var, let or const and then the assignment name
 * 
 * 1.   Assignment names are directed to values with the equals '=' sign
 * 
 * 2    Reassignment: var and let can be reassigned. const cannot be reassigned
 * 
 */

//an initialized (declared and assigned variable)
var greatExampleFarva = "That's powdered sugar";
console.log(greatExampleFarva);
//reassigning our example
greatExampleFarva = "License and registration meow";
console.log(greatExampleFarva);



/**
 * VAR, LET & CONST
 * 
 * 0.   var is scoped to funcitons, but NOT to if-blocks or loop blocks
 * 
 * 1.   let is scoped to functions, if, & loop blocks
 * 
 * 2.   const is scoped to functions, if, & loop blocks
 * 
 * 3.   const variables CANNOT be reassigned, but CAN point to mutatable complex datatypes
 * 
 */



//var will stay in a funciton scope
function cinemaSCOPE(){
    var camera = "click";
}
//console.log(camera);

//but NOT in an if block
if (true){
    var imGlobal = "I'm global";
}

console.log(imGlobal);

//NOR in a loop
for (var i = 0; i < 1; i++)
    var globalLoopVar = "I'm also global";
console.log(globalLoopVar);


/**
 * HOISTING
 * 
 * 0.   var declarations (not assignments) are hoisted to the top of the program
 * 
 * 1.   will return undefined if referenced prior to declaration
 * 
 * 2.   const and let declarations are NOT hoisted and will return an error if referenced before declaration
 * 
 */


//oh that's what that was for
var bacon = "defined, sizzle";
console.log(bacon);