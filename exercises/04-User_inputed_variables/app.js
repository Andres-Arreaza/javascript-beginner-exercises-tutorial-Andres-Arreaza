let age = prompt('What is your age?');

// Your code below:
console.log(typeof age); //me muestra el tipo de dato(strig)
let ageInt = parseInt(age);
console.log(typeof ageInt); //me muestra el tipo de dato(number)

let newAge = ageInt + 10;
console.log(newAge);

let varstring = String(newAge); // Cambia la variable a string
console.log( typeof varstring);
