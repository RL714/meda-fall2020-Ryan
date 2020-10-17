$(document).ready(function () {

    setTimeout(function () {
        $("body").append("<div id='content'></div>")
        // .append ADDS to existing children, and is placed at the end of the children's list. 

        $("div#content").html("<p>'Hello there!'</p><br />");
        // .html REMOVES existing children elements of selected elements of selected element, and adds in what we typed in the argument. 

        $("div#content").html(""); 
        
        $("body").prepend("<h1>Ths page was dynamically generated!</hi>"); 
        // .prepend, is the same, except it adds to the BEGINNING of children's
    
    }, 5000); 

    var myFaveFood = "Pizza"; 

    var newHTMLCode = 
        `<ul>
                    <li>${myFaveFood}</li>
                    <li>Burrito</li>
                    <li>Hamburger</li>

                    </ul>`;  
    $("body").append(newHTMLCode); 

    $("button#create-box").click(function() {
            $("h1").hide(); 
            // visually () hides element, code still exists.
            // .empty () -> removes children code.
            // .remove() -> removes selected element 
            $("body").append(`<div style='width: 100px; height: 100px; border: 1px black solid;'></div>`); 
    })
}); 

