"use strict";

if (4 == 4) {
    console.log('Ok!');
} else {
    console.log('Error');
}



// if (num < 49) {
//     console.log('Error');
// } else if  (num > 100) {
//     console.log('mnogo');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('ok!') : console.log('Error');

const num = 56;

switch (num) {
    case 49:
        console.log('neverno');
        break;
    case 100:
        console.log('neverno');
        break;
    case 50:
        console.log('BINGO!');
        break;
    default:
        console.log('ne v etot raz');
        break;
}

