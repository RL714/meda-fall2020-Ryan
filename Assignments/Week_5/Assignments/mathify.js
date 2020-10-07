function add(num1, num2) {
    var sum = num1 + num2;
    return sum;  
    }


var results = add(100, 50); 
console.log(results); 


var results = subtract(100, 50); 
console.log(results); 

var results = multiply(100, 50); 
console.log(results); 

var results = divide(100, 50); 
console.log(results); 



console.log( add(54,29) ); 

function subtract(num1, num2) {
    var difference = num1 - num2;
    return difference;  
    }

    function multiply (num1, num2) {
        var product = num1 * num2;
        return product;  
        }

function divide (num1, num2) {
            var quotient = num1 / num2;
            return quotient;  
            }

            function circleArea(radius) {
                var radiusSquare = multiply (radius, radius);
                var pi = Math.PI; 
                console.log (radiusSquare, pi); 

                var area = multiply (radiusSquare, pi); 
                return area; 
            }
            console.log(circleArea(80.3)); 

            function totalSum3Times(num1, num2) {
                var firstSum = add (num1, num2);
                var secondSum = add (num2 + 1, firstSum); 
                var thirdSum = add(num2 +2, secondSum);
                return thirdSum; 
            } 

            var results = totalSum3Times(4, 5); 

            console.log(results); 