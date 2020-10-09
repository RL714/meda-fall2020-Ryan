/* 

*
**
***
****
*****
****
***
**
*

*/ 

//console.log ("*");
//console.log ("**");
//console.log("***"); 


var column = ""; 

for (var i = 0; i < 10; i = i + 1) {
    column = column + "*"; 
  
    console.log(column);   

console.log(column); 

} 

//console.log("final column state", column); 

var columnArray = column.split("");

//console.log(columnArray); 

columnArray.pop(); 

//console.log(columnArray);

var updatedColumn = columnArray.joint("");

//console.log(undatedColumn);

for (ver i = 0; i < 10; i = i + 1) {
    var columnArray = column.split(""); 
    columnArray.pop(); 
    column = columnArray.join(""); 
}








