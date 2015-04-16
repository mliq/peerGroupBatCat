var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var funStuff = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

// Initialize global index var.
var i = 0;

// Loop through funstuff and create new variables for output:
function funLooper(array){
	for(i; i < array.length; i++){
		var name = array[i][0];
		eval("var array"+name+"STI = workHorse(array[i],name);");
		console.log(eval("var array"+name+"STI"));

		// array[i] = eval("var array"+name+"STI = x");
		// var x = workHorse(array[i]);
		// console.log(x);
		// eval("var array"+name+"STI = x");
	}
	// console.log(array);
	return ;
}

// var funStuffSTI = [arrayAtticusSTI, arrayJemSTI, arrayBooSTI, arrayScoutSTI];

// var arrayAtticusSTI = workHorse(arrayAtticus, arrayAtticusSTI);
// var arrayJemSTI = workHorse(arrayJem, arrayJemSTI);
// var arrayBooSTI = workHorse(arrayBoo, arrayBooSTI);
// var arrayScoutSTI = workHorse(arrayScout, arrayScoutSTI);

var funStuffSTI = workHorse(funStuff);

function workHorse(array){
	//Make new array with name.
	var outputArray = [array[0], undefined, undefined, undefined];
	array = stiPercent(array, outputArray);
	array = basePlusSTI(array, outputArray);
	array = bonusInDollars(array, outputArray);
	
	//return arraySTI;			
	// var arraySTI = addName(array);
	// array = [name, undefined, undefined, undefined];
	
}

function putArraysInOne(a{
	outputArray = [];
	//Name it array<name>STI
	eval("var array"+array[0]+"STI = array;");
}

for (i=0; i < 4; i++) {
	var x = document.getElementById("sweetId");
          x.innerHTML += funStuff[i]+"\t"+funStuffSTI[i]+"<br><br>";
}

// function addName(oldArray) {
// 	newArray = [oldArray[0], undefined, undefined, undefined];
// 	return newArray;
// }

function stiPercent (oldArray, newArray) {
	var rating = oldArray[3];

	switch (rating){
		case 3:
			newArray[1] = 0.04;
			break;
		case 4:
			newArray[1] = 0.06;
			break;
		case 5:
			newArray[1] = 0.1;
			break;
		default:
			newArray[1] = 0;
			break;
		}

	if (oldArray[1].length == 4) {
		newArray[1] += 0.05;
		}
	if (oldArray[2] > 65000) {
			newArray[1] -= 0.01;
		}
	if (newArray[1] > 0.13) {
		newArray[1] = 0.13;
	}
	return newArray;
}

function basePlusSTI(oldArray, newArray) {
	newArray[2] = oldArray[2] * (1 + newArray[1]);
	newArray[2] = Math.round(newArray[2] * 100) / 100;
	return newArray;
}

function bonusInDollars(oldArray, newArray) {
	newArray[3] = Math.round( oldArray[2] * newArray[1] );
	return newArray;
}


