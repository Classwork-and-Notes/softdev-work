var states = ["Iowa", "New Hampshire", "Nevada", "South Carolina", "Alabama", "American Samoa", "Arkansas", "Colorado", "Democrats Abroad", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Louisiana", "Nebraska", "Kansas", "Maine", "Mississippi", "Michigan", "Northern Marianas", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Maryland", "Connecticut", "Delaware", "Pennsylvania", "Rhode Island", "Indiana", "Guam", "West Virginia", "Kentucky", "Oregon", "Virgin Islands", "Puerto Rico", "California", "Montana", "New Jersey", "North Dakota", "New Mexico", "South Dakota", "District of Columbia"];
var delegates = ["44", "24", "35", "53", "53", "6", "32", "66", "13", "102", "91", "77", "38", "67", "222", "16", "95", "51", "25", "33", "25", "36", "130", "6", "214", "156", "71", "107", "143", "75", "23", "33", "16", "25", "101", "86", "14", "247", "95", "55", "21", "189", "24", "83", "7", "29", "55", "61", "7", "60", "475", "21", "126", "18", "34", "20", "20"];

window.addEventListener('load', function(){
    d3.select("#graph").selectAll("div")
	.data(delegates)
	.enter().append("div")
	.style("width", function(d){return d * 10 + "px"})
	.text(function(d,i){return states[i]})
	.style("background-color", function(d,i){
	    if (i >= 29){
		return "#0000cc";
	    }
	}
);
})
    
