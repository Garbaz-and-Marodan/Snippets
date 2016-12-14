var matrix; var rows; var columns = 0;

function update(){
	rows = matrix.children[0].children[0].children.length;
}

function init(){
	// some vars
	matrix = document.getElementById("matrix");
	update();
	
	document.addEventListener("keydown",function(){
		//console.log(event.which);
		switch (event.which){
			case 13: // Enter
				break;
			case 46: // Delete
				break;
				
				
				
			case 37: // Left
				move("left");
				break;
			case 38: // Up
				move("up");
				break;
				
			case 39: // Right
				move("right");
				break;
			case 40: // Down
				move("down");
				break;
				
		}
		update();
	} ) 
}

function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}

function splitString(string){	
	var first = true; //true=first part; false=second part
	var part1 = part2 = "";
	
	for(var i=0;i<string.length;i++){
		if(string.charAt(i)!=" " && first){
			part1 += string.charAt(i);
		}
		else if(string.charAt(i)===" " && first) first=false;
		else if(string.charAt(i)!=" " && !first){
			part2 += string.charAt(i);
		}
	}
	
	return [part1,part2];
}

function makeClass(r,c){
	return "r" + r.toString(10) + " c" + c.toString(10);
}

function move(direction){
	var active = {};
	if(isDescendant(document.getElementById("matrix"),document.activeElement)){
		active.object = document.activeElement;
		active.row = parseInt(splitString(active.object.className)[0].substr(1));
		active.column = parseInt(splitString(active.object.className)[1].substr(1));
		//console.log(active);
		}
		
	var newActive = {};
	switch (direction){
		case "left":
			if(active.row>=0)	newActive.column = active.column-1;
			newActive.row = active.row;
			break;
		case "up":
			if(active.row>=0)	newActive.row = active.row-1;
			newActive.column = active.column;
			break;
		case "right":
			if(active.column===columns)	addCol();
			newActive.column = active.column+1;
			newActive.row = active.row;
			break;
		case "down":
			if(active.column===columns)	addCol();
			newActive.column = active.column+1;
			newActive.row = active.row;
			break;
	}
	console.log("old: "+active.row+" "+active.column,"new: "+newActive.row+" "+newActive.column);
	document.getElementsByClassName(makeClass(newActive.row,newActive.column))[0].focus();
}

function addRow(){
	var row = matrix.insertRow(-1);
	row.className = "row";
	
	for(var i=0;i < rows;i++){
		var cell = row.insertCell(-1);
		cell.className = "column";
		var input = document.createElement("input");
		input.className = "r"+rows+" c"+i;
		input.type = "text";
		cell.appendChild(input);
	}
}
function addCol(){
	for(var i=0;i < matrix.children[0].children.length;i++){
		var row = matrix.children[0].children[i];
		var cell = row.insertCell(-1);
		cell.className = "column";
		var input = document.createElement("input");
		input.className = "r"+ rows +" c"+i;
		input.type = "text";
		cell.appendChild(input);
	}
	columns++;
}













