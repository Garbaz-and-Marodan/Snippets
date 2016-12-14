
/*
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;
*/
function init(){
	document.getElementById("a").value.width = "40px";
	this.width = document.getElementById("gantry").offsetWidth;
	this.columns = document.getElementsByTagName("tr")[0].getElementsByTagName("td").length;
	this.newWidth = this.width/this.columns;
	document.getElementById("table").width = this.width;
	
	for(var i=0;i<document.getElementsByTagName("tr").length;i++){
		
		document.getElementsByTagName("td")[i].width = this.newWidth;
	}
	
	for(var i=0;i<document.getElementsByClassName("input").length;i++){
		document.getElementsByClassName("input").width = this.newWidth;
	}
	
	document.getElementById("ausrechnen").width = this.newWidth;
}

function ausrechnen(){
	
	document.getElementById("output").innerHTML = a+b+c;
}