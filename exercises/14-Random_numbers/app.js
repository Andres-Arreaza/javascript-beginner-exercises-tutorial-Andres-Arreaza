//GENERANDO UN NUMERO ALEATORIO ENTRE 0-10.


// PRIMERA FORMA  DE GENERAR UN NUMRO ALEATORIO.

//Funcion que genera un numero aleatorio.
function getRandomInt(){
	// La propiedad Math.floor redondea el nunmero random hacia abajo 6.9 es 7.
	//La propiiedad Math.random()*N es para escoger un numero random del 0 al 10, le sumamos 1 para que llegue al 10 y no al 9.999.
	let randomNumber = Math.floor(Math.random()*10)+1;
	return randomNumber;
}


// SEGUNDA FORMA  DE GENERAR UN NUMRO ALEATORIO.
/*
 function getRandomInt(min, max){
 	let randomNumber = Math.floor(Math.random()*(max-min+1))+min;
 	return randomNumber;
	}


 console.log(getRandomInt(1,10));
*/