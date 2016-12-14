function init(){
	document.addEventListener("keydown",function(){
		//console.log(event.which);
		switch (event.which){
			case 13:
				calculate();
				break;
			case 46:
				empty();
				
		}
	} ) 
	this.gantryWidth = document.getElementById("gantry").offsetWidth;
	this.newWidth = this.gantryWidth/3-50;
	document.getElementsByTagName("table")[1].width=this.gantryWidth;
	document.getElementsByTagName("tr")[1].width=this.gantryWidth;
	for(var i=0;i<3;i++){
		document.getElementsByTagName("input")[i].size = this.newWidth/10;
	}
}

function proceed(){
}

function calculate(){
	if(document.activeElement.id === "in1") document.getElementById("in2").focus();
	else {
		var a,b = 0;
		a = document.getElementById("in1").value;
		if(document.getElementById("in2").value!=0) b = document.getElementById("in2").value;
		document.getElementById("out").value = "0";
		document.getElementById("out").value = (parseInt(a,2)+parseInt(b,2)).toString(2);
	}
	
}

function empty(){
	document.getElementById("in1").focus();
	document.getElementById("in1").value = "";
	document.getElementById("in2").value = "";
	document.getElementById("out").value = "";
}
