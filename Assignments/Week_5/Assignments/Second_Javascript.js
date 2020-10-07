//Date types
"strings";
1000
false; 

var someVariable = -100; 
var isItRaining = false; 

if (someVariable > 10) {
    comnsole.log("This number is higher than 10."); 

    if (someVariable < 1000) {
        console.LOG("This number is lower than 1000.")
    }

} 

else {
    console.log("This number is lower than 10.");

}

if (isItRaining == true) {
    console.log("Bring an umbrella!"); 
}

// Functions 

function coolFunction () {
    console.log(100);
    console.log(10);
    console.log(1);
}

coolFunction();
coolFunction(); 
coolFunction(); 

// Arguments & Parameters 
// Arguments get stored inside of Parameters 
//Arguments are the values given to the function, and parameters are the function variavles that will hold these values

function addExclamation(message, num, num1, importantNumber, names) {
    console.log(message, "!!!", 100);
    
    var results = num * 2; 
    console.log(39); 
}
// Arguments are written inside the parethesis of the function CALL. 
addExclamation("Hello how are you", 2); 
addExclamation("Is is raining", 7); 
addExclamation("Goodbye", 14); 

// console.log (100, 1000, "hello there:"); 

// Returning values from functions. 

// The someText variable was created when you call the function, but it also gets destroyed when the function call ends. 

function getText () {
    var someText = "Nice weatjer.";
    return someText;  
}

// someText does not exist as it was destroyed when the function call ended.

console.log ( getText () );

console.log ("Hello how are you", "!!!", 100); 

    var results = 2 * 2;
    console.log(results);

var userName = "Eduardo"; 

//Conctenation 
var completeSentence = "My name is" + userName ; 
console.log(completeSentence); 

// Type Coercion 
console.log("Hello" + 100); 
console.log("100" + 100);
console.log(100 + "100");
console.log ("This is false " + true); 

// Trying to multiple a string, we end up with a special Number called NaN 
var longString = "Hello there!" * 10; 
