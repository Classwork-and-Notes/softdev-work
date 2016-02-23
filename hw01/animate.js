var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cbutton = document.getElementById("circle");
ctx.fillStyle = "#ff0000";
var grow = true;

var drawC = function(){
    console.log("drawn");

    var animCode = function(){
	var radius = 0;
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(250, 250, radius, 0, 2 * Math.PI);
	ctx.fill();
	radius += 1;
	/*	
	if (radius == c.width/2)
	    grow = false;
	if (radius == 0)
	    grow = true;
	
	if (grow)
	    radius += 1;
	else
	    radius -= 1;
	*/
    
	window.requestAnimationFrame(animCode);
    }
    animCode();
}

cbutton.addEventListener("click", drawC);

