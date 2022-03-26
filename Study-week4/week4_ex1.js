function pageLoad(){
	let btn= document.getElementById("myBtn");
	btn.onclick = displayDate;
}

function displayDate(){
	document.getElementById("demo").innerHTML = Date();
}
window.onload = pageLoad;