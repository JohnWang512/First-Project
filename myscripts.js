
$( document ).ready(function() {
    
    var txt1 = "<button>New super button</button>";
    console.log("jquery is working");
    $("body").append(txt1);
    $("body").click(function() {
    $("body").append(txt1);
    console.log("hello");
    $("icon").toggleClass("ion-arrow-up-c");
    });
    // Handler for .ready() called.
    });

var x =("my message look at it");
var pi = 3.14;
var theMessage = "My new awsome message";

alert(x);

function myFunction(p1, p2) {
return p1 * p2;
}

function myOtherFunction(p1, p2) {
return p1 + p2;
}

//alert(myFunction(6,7));
alert(myOtherFunction(1,3));

console.log(x);

if (pi<7) {
theMessage = "My new cool message";
}

function changeHeader(){
heading = document.querySelector("h1");
document.querySelector("h1").innerHTML = theMessage; 
}

function myFunction(){
var btn = document.createElement("button");       
var t = document.createTextNode("CLICK ME");     
btn.appendChild(t);
    
    //console.log("the button" + btn);
document.body.appendChild(btn);                   
}

