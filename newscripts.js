console.log("i'm working");

alert("I'am working");



function myFunction(){
var btn = document.createElement("BUTTON");       
var t = document.createTextNode("CLICK ME");     
console.log(btn)
btn.appendChild(t);                               
document.body.appendChild(btn);                   
}

myFunction();