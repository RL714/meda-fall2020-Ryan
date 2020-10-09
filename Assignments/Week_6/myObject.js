var myObject = {
    id: "93j219d", 
    firstName: "Rob",
    lastName: "Smith",
    address: ["123 Main St.", "345 Califronia StaticRange."],  
    age: 45,
    title: "Engineer"
};

var myArray = ["Rob", "Smith", "123 Main St.", 45, "Engineer" 
];

var months = {
    firstMonth: "January",
    secondMonth: "February"
}

myArray.length;
myArray[0]; // myArray.0 IS NOT VALI
console.log(myObject.address);
myObject["first Name"]; // how to access key with space in it 

var myEmployees = []; 

myEmployees.push(myObject); 

mySecondEmployee = {
    firstName: "Dan",
    lastName: "Lincoln",
    address: "124 Main St.",
    age: 32, 
    title: "CEO"

}; 

myThirdEmployee = {
    firstName: "Mary",
    lastname: "Doe",
    address: "345", 
    age: 40, 
    title: "Scientist"
}

myEmployees.push(mySecondEmployee, myThirdEmployee);

console.log(myEmployees); 

var totalAges = 0; 

for (var i = 0; i < myEmployees.length; i = i + 1) {
    totalAges = totalAges + myEmployees[i].age; 
}

var averageAge = totalAges / myEmployees.length; 

console.log(averageAge); 

// Functions inside of Objects, Arrays, and Variables... 

var something = 100; 

function someFunction() {
    console.log("I am a function");
}
// We are NOT calling someFunction, instead we are passing the definition ofof someFunction into storedFunction

var storedFunction = someFunction;

// Because storedFunction is holding an actual function (from line 66) we can actuallly run this function bt purting parenthesis after the variable call
storedFunction(); 
someFunction(); 

var runForEachEmployee = function (employee) {
    console.log("Hello!" + "" + employee.firstname); 
};

myEmployees.forEach(runForEachEmployee); 

var specialObject = {
    doSomework: function () {
    console.log("Working!");
    }
}; 

specialObject.doSomework(); 
console.log();
myEmployees.length;   

//An object's property holds data.
//An object's method holds a function (that belongs to that object)

var myArray2 = [
    100,
    200,
    function() {
        console.log("hello");
    },
    400
];

myArray2[2]();  // Runs the function in the array at index 2.  