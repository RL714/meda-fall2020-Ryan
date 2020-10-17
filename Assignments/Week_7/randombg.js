// Create a button that changes the background color to a random color from a selectionof 16.7 million colors.

Math.random(); 

$(document).ready(function () {

    $("#bgchanger").click(function () {

var redColor = Math.random() *256; //Range should be 0 to 255.9
var redColor = Math.floor(redColor); //removes decimal point 

var greenColor = Math.random() *256;
var greenColor = Math.floor(greenColor);

var blueColor = Math.random() *256;
var blueColor = Math.floor(blueColor);

var rgbValue = `rgb( ${redColor}, ${greenColor}, ${blueColor})`; // Random number between 0 and .09 

var rgbText = `<p>${rgbValue}</p>`; 

    $("body").css("background-color", rgbValue);
    $("body").append(rghText); 
});

    }); 