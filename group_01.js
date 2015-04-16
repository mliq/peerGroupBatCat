var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var arrayAtticusSTI = workHorse(arrayAtticus, arrayAtticusSTI);
var arrayJemSTI = workHorse(arrayJem, arrayJemSTI);
var arrayBooSTI = workHorse(arrayBoo, arrayBooSTI);
var arrayScoutSTI = workHorse(arrayScout, arrayScoutSTI);

function workHorse(array){
	var arraySTI = addName(array);
	arraySTI = stiPercent(array, arraySTI);
	arraySTI = basePlusSTI(array, arraySTI);
	arraySTI = bonusInDollars(array, arraySTI);
	return arraySTI;
}

var funStuff = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
var funStuffSTI = [arrayAtticusSTI, arrayJemSTI, arrayBooSTI, arrayScoutSTI];

var i;
for (i=0; i < 4; i++) {
	var x = document.getElementById("sweetId");
          x.innerHTML += funStuff[i]+"\t"+funStuffSTI[i]+"<br><br>";
}

function addName(oldArray) {
	newArray = [oldArray[0], undefined, undefined, undefined];
	return newArray;
}

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


