var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var button = document.getElementById("clear");
ctx.strokeRect(0,0,400,400);
console.log("hello world")
ctx.beginPath();
var xcor;
var ycor;

clear =  function(e){
	ctx.clearRect(0,0,400,400);
    ctx.strokeRect(0,0,400,400);
    ctx.beginPath();

    //stroke();
}

draw = function(e){
	ctx.moveTo(xcor,ycor);
    ctx.arc(e.pageX, e.pageY, 10, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    xcor = e.pageX;
    ycor = e.pageY;
}

c.addEventListener("click", draw);
button.addEventListener("click",clear);