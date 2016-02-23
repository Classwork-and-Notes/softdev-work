var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cbutton = document.getElementById("circle");
var sbutton = document.getElementById("stop");
var grow = true;

var frameid;
ctx.fillStyle = "#ff0000";

var drawC = function(){
    console.log("drawn");
    var radius = 0;
    
    var animCode = function(){

	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, radius, 0, 2 * Math.PI);
	ctx.fill();

	if (grow)
	    radius += 1;
	else
	    radius -= 1;
	console.log(radius);
	
	if (radius == c.width/2)
	    grow = false;
	if (radius == 0)
	    grow = true;
	
	console.log(grow)

	window.requestAnimationFrame(animCode);
    }
    animCode();
}

var stopIt = function(){
    windowCancelAnimationFrame();
}

cbutton.addEventListener("click", drawC);

sbutton.addEventListener("click", stopIt);
