window.onload = function() {
let x = document.getElementById("target");
x.onmousemove = showCoords;
let y = document.getElementById("box");
y.onmouseup = mUp;
y.onmousedown = mDown; 
};
function showCoords(event) { 
document.getElementById("target").innerHTML = 
"screen : (" + event.screenX + ", " + event.screenY + ")\n\n" 
+ "client : (" + event.clientX + ", " + event.clientY + ")\n" 
+ "button : (" + event.button + ")"; 
} 
function mDown() { 
let t = document.getElementById("box") 
t.style.backgroundColor = "#1ec5e5"; 
t.innerHTML = "Release Me"; 
} 
function mUp() { 
let t = document.getElementById("box") 
t.style.backgroundColor="red"; 
t.innerHTML="Thank You"; 
}