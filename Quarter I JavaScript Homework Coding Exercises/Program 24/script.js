let animal1 = 'cat';

if (animal1 == 'cat') {
    console.log(animal1 == 'cat');
}

if (animal1 == 'cat') {
    console.log(animal1 !== 'cat');
}

if (animal1 === 'cat') {
    console.log(animal1 === 'Cat');
}

let rating = 8;

if (rating === 8) {
    console.log('you are a superstar');
}

let x = 5;
let y = '5';
if (x == y) {
    console.log(true);
}

let a = 5;
let b = 6;
let c = 7;
let d = 55;
if (a !== b) {
    console.log(true);
}

if (a < b) {
    console.log(true);
}

if (c > b) {
    console.log('c is greater than b');
}

if (c <= d) {
    console.log('c is less than and equal to d');
    console.log(c <= d);
}

if (c >= b) {
    console.log('c is Greater than and equal to b');
    console.log(c >= d);
    console.log(c >= b);
}

if (c < d && b > a) {
    console.log('c is less than d && b is greater than a');
    console.log(c < d && b < a); // to check otherwise statement is incorrect.
}

if (c < d || b < a) {
    console.log('c is less than d or b is less than a');
    console.log(c < d || b < a); // to check even one is incorrect but it still shows true
}

const array1 = [1, 2, 3];

console.log(array1.includes(2));
console.log(array1.includes(4));
// let a = 6;
// let b = 8;

// console.log(a > && == b);
// console.log(a <= || == b);


// let Number1 = 786;

// if (Number1 == 786) {
//     console.log(Number1 == '786');
// }

// if (Number1 === 786) {
//     console.log(Number1 === '786');
// }

// let car = 'mclaren';

// if (car == 'mclaren') {
//     console.log(car == 'mclaren');
// }

// if (car == 'mclaren') {
//     console.log(car === 'ford');
// }

// let Money = 'Halal';

// if (Money == 'Halal') {
//     console.log(Money == 'Halal');
// }

// if (Money === 'Halal') {
//     console.log(Money === 'Haram');
// }
