var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")
var cbutton = document.getElementById("circle");
var rbutton = document.getElementById("rect");
var sbutton = document.getElementById("stop");

var img = new Image();
img.onload = function(){    
    ctx.drawImage(img, 0, 0, 150, 75);
};
img.src = "dvd.png";

var frameid;
ctx.fillStyle = "#ff0000";


var drawC = function(){
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
    window.CancelAnimationFrame(frameid);
}

var drawR = function(){
    var x = 0;
    var y = 0;
    var right = true;
    var down = true;
    
    var animCode = function(){
	ctx.clearRect(0, 0, c.width, c.height);
	y++;
	x++;
	ctx.drawImage(img, x, y, 200, 100);

	if (x == c.width)
	    



	
	frameid = window.requestAnimationFrame(animCode);
    }
    animCode();
}


cbutton.addEventListener("click", drawC);
rbutton.addEventListener("click", drawR);
sbutton.addEventListener("click", stopIt);
