//CONDICIONAL IF ELSE.

let total = prompt('How many km are left to go?');

function condicioanles(total){
    const newTotal = parseInt(total);
    if (newTotal <= 50) {
        return `I'm parking. I'll see you right now`;
    } else if(newTotal>50 && newTotal<=100){
        return `We'll be there in 5 minutes`
    }else{
        return `We still have a bit of driving left to go`;
    }
}

console.log(condicioanles(total));
