var Dstates = ["Iowa", "New Hampshire", "Nevada", "South Carolina", "Alabama", "American Samoa", "Arkansas", "Colorado", "Democrats Abroad", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Louisiana", "Nebraska", "Kansas", "Maine", "Mississippi", "Michigan", "Northern Marianas", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Maryland", "Connecticut", "Delaware", "Pennsylvania", "Rhode Island", "Indiana", "Guam", "West Virginia", "Kentucky", "Oregon", "Virgin Islands", "Puerto Rico", "California", "Montana", "New Jersey", "North Dakota", "New Mexico", "South Dakota", "District of Columbia"];
var Ddelegates = ["44", "24", "35", "53", "53", "6", "32", "66", "13", "102", "91", "77", "38", "67", "222", "16", "95", "51", "25", "33", "25", "36", "130", "6", "214", "156", "71", "107", "143", "75", "23", "33", "16", "25", "101", "86", "14", "247", "95", "55", "21", "189", "24", "83", "7", "29", "55", "61", "7", "60", "475", "21", "126", "18", "34", "20", "20"];

var Rstates = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Colorado", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "Virgin Islands", "Wyoming1", "Guam", "District of Columbia", "Florida", "Illinois", "Missouri", "North Carolina", "Northern Marianas", "Ohio", "American Samoa", "Arizona", "Utah", "North Dakota", "Wisconsin", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Nebraska", "West Virginia", "Oregon", "Washington", "California", "Montana", "New Jersey", "New Mexico", "South Dakota","American Samoa","Arizona","Utah","North Dakota","Wisconsin","New York","Connecticut","Delaware","Maryland","Pennsylvania","Rhode Island","Indiana","Nebraska","West Virginia","Oregon","Washington","California","Montana","New Jersey","New Mexico","South Dakota"];
var Rdelegates = ["30", "23", "50", "30", "50", "28", "40", "76", "42", "38", "43", "58", "155", "16", "49", "37", "40", "46", "46", "23", "23", "19", "32", "59", "40", "9", "29", "9", "19", "99", "69", "52", "72", "9", "66", "9", "58", "40", "28", "42", "95", "28", "16", "38", "71", "19", "57", "36", "34", "28", "44", "172", "27", "51", "24", "29","9","58","40","28","42","95","28","16","38","71","19","57","36","34","28","44","172","27","51","24","29"];

var scale = d3.scale.linear()
    .domain([0,d3.max(Ddelegates)])
    .range([0,420])

var D = true;

var loadD = function(){
	d3.select("#key")
	.style("background-color","#0000cc")
    d3.select("#graph").selectAll("div")
	.data(Ddelegates)
	.enter().append("div")
	.transition()
	.duration(2000)
	.style("width", function(d){return d * 10 + "px"})
	.text(function(d,i){return Dstates[i] +": "+ Ddelegates[i]})
	.style("background-color", function(d,i){
	    if (i >= 29){
			return "#0000cc";
	    }
	    else{
	    	return "#aeaeae";
	    }
	}
);
}
    
var loadR = function() {
	d3.select("#key")
	.style("background-color","#ff0000")
    d3.select("#graph").selectAll("div")
	.data(Rdelegates)
	.transition()
	.duration(2000)
	.style("width", function(d){return d * 10 + "px"})
	.text(function(d,i){return Rstates[i] +": "+ Rdelegates[i]})
	.style("background-color", function(d,i){
	    if (i >= 29){
			return "#ff0000";
	    }
	    else{
	    	return "#aeaeae";
	    }
	}
);
}

window.addEventListener('load', loadD);
var r = document.getElementById('rep')
var d = document.getElementById('dem')
d.addEventListener("click", loadD)
r.addEventListener("click", loadR)