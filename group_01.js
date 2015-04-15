var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var arrayAtticusSTI = addName(arrayAtticus);
arrayAtticusSTI = stiPercent(arrayAtticus, arrayAtticusSTI) ;
arrayAtticusSTI = basePlusSTI(arrayAtticus, arrayAtticusSTI);
arrayAtticusSTI = bonusInDollars(arrayAtticus, arrayAtticusSTI);

var arrayJemSTI = addName(arrayJem);
arrayJemSTI = stiPercent(arrayJem, arrayJemSTI) ;
arrayJemSTI = basePlusSTI(arrayJem, arrayJemSTI);
arrayJemSTI = bonusInDollars(arrayJem, arrayJemSTI);

var arrayBooSTI = addName(arrayBoo);
arrayBooSTI = stiPercent(arrayBoo, arrayBooSTI) ;
arrayBooSTI = basePlusSTI(arrayBoo, arrayBooSTI);
arrayBooSTI = bonusInDollars(arrayBoo, arrayBooSTI);

var arrayScoutSTI = addName(arrayScout);
arrayScoutSTI = stiPercent(arrayScout, arrayScoutSTI) ;
arrayScoutSTI = basePlusSTI(arrayScout, arrayScoutSTI);
arrayScoutSTI = bonusInDollars(arrayScout, arrayScoutSTI);

console.log(arrayAtticus);
console.log(arrayAtticusSTI);

console.log(arrayJem);
console.log(arrayJemSTI);

console.log(arrayBoo);
console.log(arrayBooSTI);

console.log(arrayScout);
console.log(arrayScoutSTI);


var funStuff = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
var funStuffSTI = [arrayAtticusSTI, arrayJemSTI, arrayBooSTI, arrayScoutSTI];

var i;
for (i=0; i < 4; i++) {


	var x = document.getElementById("sweetId");
          x.innerHTML += funStuff[i]+"\t"+funStuffSTI[i]+"<br>";
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






