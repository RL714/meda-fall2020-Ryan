var timer = setInterval(function() { // Asynchronous
    console.log("1 second has passed");
}, 1000);

// Synchronous
console.log(1);
console.log(2);
console.log(3);


// Asynchronous

setTimeout(function () {
    console.log(5);

    clearInterval(timer);
}, 5000);

//var runsForever = setInterval(function () {
//     console.log("3 seconds have passed.");
// }, 3000);

// clearInterval(runsForever); this will stop the interval.

console.log(6);

// Closures

var myGlobalVariable = 100;

function someFunction() {
    var myLocalVariable = 10;

    console.log(myLocalVariable);

    console.log(myGlobalVariable);
}

someFunction();

console.log(myGlobalVariable);

// console.log(myLocalVariable); Cannot access myLocalVariable because it is in a child scope.



// If statements do not have scopes.
if (true) {
    // Code to run
} 

if (false) {
    // Code to run
}


// Example
if (true) {
    var createdVariable = 300;
}

console.log(createdVariable);

//MY BUNK ASSS CODE
//var timer = setInterval (function() {
//console.log("1 second has passed."); 
//}, 1000);  



//Synchronous 
//console.log(1);
//console.log(2);
//console.log(3);




//Asynchronous 

//setTimeout(function () { 
    //console.log(5); 

//}, 5000); 

//var runsForever = setInterval(function () { console.log("3 Seconds have passed."); 
//}, 3000); 

//console.log(6); 

// Closures 

//var myGlobalVariable = 100; 

//function someFunction () {
  //  var myLocalVariable = 10; 

    //console.log(myLocalVariable); 

//}

//someFunction(); 

//console.log(myGlobalVariable)

// console.log(myLocalVariable); Cannot access myLocalVariable because it is in a child scope 

//GOES SOMEWHERE ELSE ###################################
//var string ="This is a sentence."; 

//var stringArray = string.split(" ");

//console.log(stringArray); 

//stringArray.pop(); 

//console.log(stringArray); 

//var updatedString = stringArray.join("!");

//console.log(updatedString); 
//GOES SOMEWHERE ELSE ####################################


// If statements do not have scopes/ 
//if (true) {

//}

//if (false) {
    // Code to Run 
//}


//if (true) { 
  //  var createdVariable = 100; 
//}

//console.log(createdVariable); 

//for (var i = 0; i < stringArray.length; i = i + 1) {

  //  var currentLetter = stringArray[i];
    
    //    firstMartch = i; 
    //break; This will stop the loop once we find the first match. 

//    stringArray[i] = "E"; 

  //  if (currentLetter === "e") {
    //    console.log("We found an e!");
      //  continue; // This will ignore the following code and move on with the rest of the loop 
//    }

  //  console.log("No e here!"); 
//}

//if (firstMatch === -1) {
  //  console.log("We did not find any Es!")

//} else {

//}

//console.log(stringArray.join("")); 