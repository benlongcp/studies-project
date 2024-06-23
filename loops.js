/**
 * LOOPS
 * 
 * 0.   In order to repeat a task, we use a LOOP
 * 
 * 1.   we primarily use while loops, for loops, and for-in loops
 * 
 * 2.   loops iterate through, either discrete values or elements of arrays or key/value pairs of objects
 * 
 */


/**
 * WHILE LOOPS
 * 
 * 0.   executes the statement(s) inside the loop body as long as some extrinsic test condition is true
 * 
 * 1.   test condition is updated within the body of the loop
 */


let condition = true

//checks condition
while(condition){
    //create a random number between 0 and 2
    rand = Math.floor(Math.random()* 3) + 1
    
    console.log(condition)
    console.log(rand);

    //changes condition to false if we hit a certain number, thus allowing us to exit the loop
    if (rand === 3){

        condition = false;
        console.log(condition);
    }
    
}

/**
 * FOR LOOPS
 * 
 * 0.   creates a loop that contains three expressions enclosed in parentheses, divided by semicolons
 * 
 * 2.   statement inside the loop body is executed the specified number of times
 * 
 * 3.   for statement is given an initialization, a stopping condition, and an "afterthought" that is used to update the variable at the end of the loop
 * 
 * 4.   initialization creates variable to be evaluated before the loop begins
 * 
 * 5.   condition is the expression that is evaluated before each loop, when true the loop executes its code
 * 
 * 6.   afterthought occurs after the loop is iterated
 * 
 * 7.   we can iterate forwards or backwards, in custom increments
 * 
 * 8.   We can iterate through individuaL elements of an array using the .length property
 * 
 * 
 */

//global variable that we'll use to loop through
let iterations = 10


//we start at the number one and go until we hit a value greater than 10. 
//Each iteration, the counter is incremented
for (let i = 1; i <= 10; i++){
    console.log(i, "/", iterations);
}

//here's an array
let numArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

//let's iterate backwards over this one
for (let i = numArray.length -1; i >= 0; i--){
    
    console.log("bassackwards:   ", i, numArray[i]);
}

//now lets iterate forwardsby 2s

for (let i = 0; i < numArray.length; i += 2){
    console.log("by 2s:   ", i, numArray[i]);
}


/**
 * FOR IN LOOPS
 * 
 * 0.   similarly, an object can be iterated through its keys with a for-in loop
 * 
 * 1.   for (variable in object){
 *          statement
 * }
 * 
 * 
 */

//here's an object
let theObject = {
    key1: "value 1",
    key2: "value 2",
    key3: "value 3",
}

//looping through the object
//for each key in theObject
for (let key in theObject){
    
    //logs the key name
    console.log("Key:  ", key);
    
    //logs the value
    console.log("Value:  ", theObject[key]);

}