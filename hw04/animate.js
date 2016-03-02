pic = document.getElementById("svgid");
g = document.getElementById("go");
s = document.getElementById("stop");
var intervalID;
var grow = false;
var maxR = parseInt(pic.getAttribute("width"))/2

var drawC = function(){

    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", parseInt(pic.getAttribute("width"))/2);
    c1.setAttribute("cy", parseInt(pic.getAttribute("height"))/2);;
    c1.setAttribute("r", 0);
    c1.setAttribute("stroke","black");
    c1.setAttribute("fill","red");

    pic.appendChild( c1 );
}

var animate = function(){
    drawC();
    var c = document.getElementsByTagName("circle")[0];	
    var r  = parseInt(c.getAttribute("r"));
    var grow = function(){	
	if (grow)	
	    c.setAttribute("r",++r);
	else
	    c.setAttribute("r",--r);

	if (r == 0 || r == maxR)
	    grow = !grow;
    }
    intervalID = setInterval(grow, 100);   
}

var clear = function(){
    window.clearInterval(intervalID);
    pic.removeChild(document.getElementsByTagName("circle")[0]);
}

g.addEventListener("click",animate);
s.addEventListener("click",clear);
