// let country = "France";
// let population = "70000000"
// let continent = "Europe"


// console.log(country)
// console.log(population)
// console.log(continent)


// const firstName = 'Jonas'
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear)
// + ' year old' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(`String with \n\
//   mutliple \n\
//   lines`);

//   const age = 15;

//   if(age >= 18){
// console.log('Sarah can start driving license 🏎️');
//   } else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
//   }


//   const birthYear = 2012;
//   let century
//   if(birthYear <= 2000){
//     century = 20;
//   } else {
//     century = 21;
//   }

//   console.log(century);

// const favourite = Number(prompt("What's your favourite number?"))
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite===23) {
//   console.log('I love 23');
// } else if (favourite=== 7) {
//   console.log('7 is a cool number');
// }
// else  {
//   console.log('Number is not 23 nor 7');
// }


// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);


// const day = 'thursday';

// switch(day) {
//   case 'monday':
//     console.log('Plan course stucture');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day');
// }


// const age =23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');



/* Write your code below. Good luck! 🙂 */

let tip = 0;
const bill = 25;
switch (bill) {
    case bill >= 50 && bill <=300:
        tip = bill*0.15;
        console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip+bill}`);
        break;

    case bill < 50:
        tip = bill*0.20;
        console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip+bill}`);
        break;

    case bill > 300:
        tip = bill*0.20;
        console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip+bill}`);
        break;

    default:
        console.log('erreur')
}
