/**
 * CONTROL FLOW
 * 
 * 0.   The order in which the computer executes statements in a script
 * 
 * 1.   code is run in order from first line to last line within the file
 * 
 * 2.   conditionals and loop structures change the control flow as they are encountered within the code
 * 
 * 3.   If/else statements check the boolean value of conditions to determine how the program will execute
 * 
 * 4.   truthiness or falsiness is evaluated within the if condition parenthesis
 * 
 */

/**
 * IF
 * 
 * 0.   a conditional is an expression that can be resolved to either truthy or falsey
 * 
 * 1.   code within the conditional block is only executed if the conditional resolves to truthy
 * 
 * 2.   
 * 
 * 
 */
//checks if what's inside the parenthesis is true and executes the enclosed code
if (true){
    //do this
    console.log("this");
}

//if it's false it won't execute what's inside
if (false){
    //don't do this
    console.log("not this");
}

//standard logic applies
if (!false){
    console.log("un-false");
}

if (2 > 4){
    console.log("that's not right");
}

if (5 + 5 !== 88970){
    console.log("wow math");
}


//similarly, checking for the presence of a value that resolves to truthy or falsey works as a condition to check

let beanbag;

let eames = 'chair';

if (beanbag){
    console.log(beanbag)
}

if (eames){
    console.log(eames);
}

/**
 * ELSE IF
 * 
 * 0.   additional conditions are checked with else if statement
 * 
 * 1.   chained behind the initial if statement
 * 
 * 2.   if what's inside the parenthesis is true, enclosed code is executed
 * 
 */

//who wants pizza?
let likesPizza = 3;

//checks each 
if( likesPizza === 1 ){
    console.log("pizza is fine");
} else if (likesPizza === 2){
    console.log("Pizza is good.");

} else if(likesPizza === 3){
    console.log("PIZZA IS GREAT!");
}


/**
 * ELSE
 * 
 * 0.   if no conditions resolve to truthy, the code within the else statement block is executed
 * 
 * 1.   
 * 
 *  
 */

let beverage = "water"

if (beverage === "pop"){

    console.log("I think you mean soda");

} else if (beverage === "soda"){

    console.log("what kind of soda?");

} else if (beverage === "coke"){

    console.log("is pepsi okay?")
//the default option if nothing resulves to true
} else {

    console.log("we don't have that");
}

/**
 * SWITCH
 * 
 * 0.   evaluates an expression inside parenthesis and checks it against a series of cases and executes the statement after the first matching case until a break statement  is encountered
 * 
 * 1.   a default case will be referred to if no other case matches the input value
 *  
 * 
 */

//same as above, but much leaner
switch(beverage) {
    case 'pop':
        console.log("you mean soda?");
        break;
    case 'soda':
        console.log("what kind?");
        break;
    case 'coke':
        console.log('we got pepsi');
        break
    default:
        console.log("no");

}