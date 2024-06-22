/**
 * FUNCTIONS
 * 
 * 0.   A reusable set of statements that performs a task or calculates a value with some kind of input and output
 * 
 * 1.   functions have parameters which is data passed in as arguments that act as local variable assignments within the funciton
 * 
 * 2.   functions resolve to some value, whatever they return or undefined if they return nothing
 * 
 */

/**
 * DECLARING AND CALLING
 * 
 * 0.   functions are declared with the function keyword followed by the name of the function, parameters, and statements defining the function in curly braces
 * 
 * 1.   calling a function executes the statements within the function body. functions are called with the funciton name and parenthesis containing any arguments being passed in
 * 
 */

//names a funciton that does a thing
function doThis (){
    console.log('this');
}

//calls the function
doThis();




/**
 * PARAMETERS AND ARGUMENTS
 * 
 * 0.   parameters refer to the input variable names in a function definition
 * 
 * 1.   arguments are the actual values passed in to a funciton when invoking it
 * 
 */

//a function with input parameters that are used in the function body
function plus (num1, num2){
    console.log(num1 + num2);
}

//invoking the function passing in arguments
plus(2, 3);

/**
 * NAMED/ANONYMOUS FUNCTIONS
 * 
 * 0.   named functions are initialized using the funciton keyword
 * 
 * 1.   can be used in an expression or declared in a statement
 * 
 * 2.   anonymous funcitons do not have a name, and can only be retrieved by the variable one is stored in
 * 
 * 3.   anonymous functions

 */

//function that prints unnamed to the console is assigned to a variable
let anon = () => console.log("unnamed");

//can only access the function with the variable
anon();

/**
 * INPUTS AND OUTPUTS
 * 
 * 0.   input parameters are known as arguments when the function is invoked with real data
 * 
 * 1.   arguments may only be accessed inside the function closures
 * 
 * 2.   functions only provide an output with a return keyword statement
 * 
 * 3.   functions naturally return undefined without an explicit return statement
 * 
 */

//has a value, but does not return it
function output1 (){
    "anything";
}

//returns a value
function output2 (){
    return 'anything';
}

console.log( output1(), output2());



/**
 * FUNCTION SCOPE
 *
 * 0.   all statements inside a function are bound to its scope and cannot be referenced outside of the function
 * 
 *  */

function scope (){
    let scoped = "value in here"
    return scoped;
}

//console.log("no value out here: ", scoped) //=>throws an error 
    
console.log("value in here:", scope());

/**
 * CLOSURES
 * 
 * 0.   combination of a function bundled (enclosed) with references to its surrounding context (lexical environment)
 * 
 * 1.   closure is created every time a function is created
 * 
 * 2.   
 * 
 */

//function outer has a  variable outVal
function outer (x){
    let outVal = 10;
    function inner(){
        //function inner returns outval, contained outside its scope
        return outVal * x;
    }
    //function outer returns the invocation of the function inner that holds the value 10
    return inner();
}

console.log(outer(5));