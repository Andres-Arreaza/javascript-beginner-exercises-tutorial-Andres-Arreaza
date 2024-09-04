/// How Much Does the Wedding Cost?
let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
     const newGuests = parseInt(guests);
    let cost = 0;
    // Your code here
    if (newGuests<=50) {
          return cost = 4000;
    } else if(newGuests>50 && newGuests<=100){
          return cost = 10000;
    } else if(newGuests>100 && newGuests<=200){
          return cost = 15000;
    }else{
          return cost = 20000;
    }
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');