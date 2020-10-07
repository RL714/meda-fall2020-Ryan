var myVar = 100;

myvar = 200;

myVar = 100; 

var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] 

var months = [
    "january",
    "february",
    "march"
];

var mixedArray = [100, "hello there", true];

console.log(weekdays[0]);

console.log(mixedArray[4]); 

console.log(mixedArray); 

mixedArray[1] = "Hello there!";

console.log(mixedArray); 

mixedArray[3] = 1005

console.log(mixedArray); 

mixedArray[1] = null;

console.log(mixedArray);

var emptyArray = []; 

//Array Methods 

//Array push 

emptyArray.push('this is my first item!');

console.log(emptyArray); 

emptyArray.push(10000);

emptyArray.push(false); 

console.log(emptyArray); 

// Array Pop

emptyArray.pop(); 

console.log(emptyArray); 

emptyArray.pop();
emptyArray.pop();

console.log(emptyArray); 

// Array Unshift. adds a new value to the beginning of the array  

weekdays.unshift("superday"); 

console.log(weekdays); 

// Array Shift 

weekdays.shift();

console.log(weekdays); 

// Array for Each 

weekdays.forEach( function (weekdays) {
    console.log(weekdays); 

} ); 

//Loops and Arrays. 

var setOfNumbers = [1, 10, 100, 1000, 10000, 400, 119, 
    39, 20, 300, 1993, 3920, 39]; 

for (var i = 0; i < setOfNumbers.length; i = i + 1) {
    var product = setOfNumbers[i] * 6; 
    console.log(product); 

}


// Array within Array AKA multidimensional array. 

var masterArray = [
    [10, 29], 
    [14, 20],
    [50, 12]
];

masterArray; // the entire array. 
masterArray[1].length;
masterArray[2][0]; // This will grab the number 50 from the third array inside of this array  



