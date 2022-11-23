// let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < ordinalNumbers.length; i++) {
//     let numb = ordinalNumbers[i];
//     if (numb <= 1) {
//         console.log(`${numb}st `);
//     } else if (numb <= 2) {
//         console.log(`${numb}nd `);
//     } else if (numb <= 3) {
//         console.log(`${numb}rd `);
//     } else {
//         console.log(`${numb}th `);
//     }
// }

let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let ordNum of ordinalNumbers) {
    if (ordNum <= 1) {
        console.log(`${ordNum}st `);
    } else if (ordNum <= 2) {
        console.log(`${ordNum}nd `);
    } else if (ordNum <= 3) {
        console.log(`${ordNum}rd `);
    } else {
        console.log(`${ordNum}th `);
    }
}