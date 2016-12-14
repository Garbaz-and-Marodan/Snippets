/*
Returns the inversion number of the given permutation (See https://en.wikipedia.org/wiki/Inversion_%28discrete_mathematics%29)

perm = Array of numbers representing the permutation. (e.g. [2,1], which maps 1->2 and 2->1)

return: Returns the inversion number

*/
function init(){
	//document.getElementById("perm").width = 200;
}


var transCount = 1;
function invnum(perm){
	var result = 0;
	for(i = 0; i < perm.length; i++) {
		for(j = i+1; j < perm.length; j++) {
			if(perm[i] != "" && perm[j] != "" && !isNaN(perm[i]) && !isNaN(perm[j]) && Number(perm[j]) < Number(perm[i])) {
				result++;
			}
		}
	}
	return result;
}

function calc() {
	document.getElementById("result").value = invnum(document.getElementById("perm").value.split(' '));
}

function evalTrans() {
	var modPerm = document.getElementById("perm").value.split(' ');
	for(i = 0; i < transCount; i++) {
		var tmpTransIn = document.getElementById("transInput" + i);
		if(tmpTransIn != null && tmpTransIn.value != "") {
			var tmpTrans = tmpTransIn.value.split(' ');
			if(tmpTrans[0] != "" && tmpTrans[1] != "" && !isNaN(tmpTrans[0]) && !isNaN(tmpTrans[1])) {
				var a = parseInt(tmpTrans[0],10)-1;
				var b = parseInt(tmpTrans[1],10)-1;
				var tmpVal = modPerm[a];
				modPerm[a] = modPerm[b];
				modPerm[b] = tmpVal;
				document.getElementById("transOutput" + i).value = modPerm.toString().replace(/,/g," ");
			}
		}
		
	}
}
function keyHandlePerm(e) {
	if(e.which == 13 || e.keyCode == 13) {
	setTimeout(calc());
	}
//	else {
//		console.log(e.keyCode);
//	}
}

function keyHandleTrans(e,id) {
	console.log(e.which,id);
	if(e.which == 13) {
		if(document.activeElement.id == "transInput" + (transCount-1)) {
			var currTrans = document.createElement("div");
			currTrans.id = "trans"+transCount;
			var input = document.createElement("input");
			input.id = "transInput"+transCount;
			input.type = "text";
			input.size = "10";
			input.setAttribute("onkeypress","keyHandleTrans(event,id)");
			
			currTrans.appendChild(input);
			document.getElementById("transTD").appendChild(currTrans);
			document.getElementById("transInput" + transCount).focus();
			
			var currOut = document.createElement("input");
			currOut.id = "transOutput"+transCount;
			currOut.type = "text";
			currOut.size = "100";
			currOut.setAttribute("readonly","");
			
			document.getElementById("outTD").appendChild(currOut);
			
			transCount++;
		}
		else {
			document.getElementById("transInput" + (parseInt(document.activeElement.id.replace(/transInput/,''))+1)).focus();
		}
	}
	evalTrans();
}

function clearTrans() {
	for(var i=1;i<transCount;i++){
	console.log("rmv "+i+" from "+transCount);
		document.getElementById("transTD").removeChild(document.getElementById("transTD").childNodes[i]);
		document.getElementById("outTD").removeChild(document.getElementById("outTD").childNodes[i]);		
	}
	transCount=1;
}
