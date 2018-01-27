var x =("my message look at it");
var pi = 3.14
var theMessage = "My new awsome message" 

alert(x)

function myFunction(p1,p2) {
return p1 * p2;
 }

function myOtherFunction(p1,p2) {
return p1 + p2
}

alert(myFunction(6,7));
alert(myOtherFunction(1,3));

console.log(x)

if (pi<7) {
theMessage = "My new cool message";
}

function changeHeader(){
heading = document.querySelector("h1");
heading.innerHTML = theMessage; 
}