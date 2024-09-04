//GENERADOR DE NUMEROS ALEATORIOS ENTRE  1-6
function getRandomInt(){
	let randomNumber = Math.floor(Math.random()*6)+1;
	return randomNumber;
}
console.log(getRandomInt());