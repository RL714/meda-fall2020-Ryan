//while loop

if (true) {

}

var counter =0; 

while (counter <10) {
    console.log("Running");
    
    counter = counter + 1; 
}

//do while loop 

while (false) {


}  

do {
    //This line will always run  at least 1 time, 
    //because we execute the code first and THEN we check the condition. 


} while (false); 

// for loop, same as a while loop, but a lot more compact 

// Break is for stopping the loop immediately. Generally used with if statements to test heter we want to continue with the loop or not
for (var i =0; i <10; i = i +1) {
    console.log("Running");
    
if (i ==6) {
    break; 
}
}

// shorthands 
var someNumber = 10; 

someNumber++; //someNumber = someNumber +1;
someNumber--; //someNumber = someNumber - 1; 
someNumber += 2;//someNumber = someNumber + 2;
someNumber -= 2; //someNumber = someNumber -2;
someNumber /=3; 
someNumber *=3; 

//function sayRunning () {
   // comnsole.log("Running"); 


//sayRunning
//sayRunning
//sayRunning
//sayRunning
//sayRunning
//sayRunning
//sayRunning
//sayRunning
//sayRunning
//sayRunning 

//      /*      *= 

// BREAK AND CONTINUE; 

// Continue. once the continue keyword is exectuted, the rest of the code in the CURRENT loop will not run and will move on to the next iteration of the loop. 

for (var i = 0; i < 10; i= 1 + 1) {
    continue; 

    console.log("ruunning with continue keyboard"); 
}

