function init(){
	document.addEventListener("keydown",function(){
		//console.log(event.which);
		switch (event.which){
			case 13:
				convertFrom(document.activeElement.id);
				break;
			case 46:
				empty();
				
		}
	} ) 
}

function convertFrom(base){
	var bin = document.getElementById("bin").value;
	var oct = document.getElementById("oct").value;
	var hex = document.getElementById("hex").value;
	var dec = document.getElementById("dec").value;
	
	if(bin != "" && base==="bin"){
		document.getElementById("oct").value = parseInt(bin,2).toString(8);
		document.getElementById("hex").value = parseInt(bin,2).toString(16);
		document.getElementById("dec").value = parseInt(bin,2).toString(10);
	}
	else if(oct != "" && base==="oct"){
		document.getElementById("bin").value = parseInt(oct,8).toString(2);
		document.getElementById("hex").value = parseInt(oct,8).toString(16);
		document.getElementById("dec").value = parseInt(oct,8).toString(10);
	}
	else if(hex != ""&& base==="hex"){
		document.getElementById("bin").value = parseInt(hex,16).toString(2);
		document.getElementById("oct").value = parseInt(hex,16).toString(8);
		document.getElementById("dec").value = parseInt(hex,16).toString(10);
	}
	else if(dec != "" && base==="dec"){
		document.getElementById("bin").value = parseInt(dec,10).toString(2);
		document.getElementById("oct").value = parseInt(dec,10).toString(8);
		document.getElementById("hex").value = parseInt(dec,10).toString(16);
	}
}

function empty(){
		document.getElementById("bin").value = "";
		document.getElementById("oct").value = "";
		document.getElementById("hex").value = "";
		document.getElementById("dec").value = "";
}