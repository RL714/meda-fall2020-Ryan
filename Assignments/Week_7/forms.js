$(document).ready(function () {

    $("#plus").click(function () {
        var firstNumber = $("#num1").val(); 
        var secondNumber = $("#num2").val();        
        var firstNumberConverted = parseInt 
        (firstNumberString);
        var secondNumberConverted = parseInt(secondNumberString);
        /*
            "hello" - > NaN
            "100Hello" -> 100; 
            "100" -> 100
            "Hello100" -> NaN 
            "90k318df9k03" -> 90 
            isNan() checks if the argument is an Nan, if it is, returns true, if it is not, returns false. 
        */ 
       if ( isNan (firstNumberConverted) || isNaN (secondNumberConverted) ) {
           $("#results").html("Error: One of your numbers is nota number!")
           $("#results").css("color", "black"); 
       }

       else {}
    }); 

}); 