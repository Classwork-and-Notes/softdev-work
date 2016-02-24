var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cbutton = document.getElementById("circle");
var sbutton = document.getElementById("stop");

var frameid;
ctx.fillStyle = "#ff0000";

var drawC = function(){
    window.cancelAnimationFrame(frameid);
    var radius = 0;
    var grow = true;
    
    var animCode = function(){

	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, radius, 0, 2 * Math.PI);
	ctx.fill();

	if (grow)
	    radius += 1;
	else
	    radius -= 1;
	
	if (radius == c.width/2)
	    grow = false;
	if (radius == 0)
	    grow = true;
	
	frameid = window.requestAnimationFrame(animCode);
    }
    animCode();
}

var stopIt = function(){
    window.cancelAnimationFrame(frameid);
}

cbutton.addEventListener("click", drawC);

sbutton.addEventListener("click", stopIt);
