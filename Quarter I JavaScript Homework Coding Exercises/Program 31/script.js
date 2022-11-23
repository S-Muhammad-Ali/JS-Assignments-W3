
// let userNames = ['admin', 'maria', 'sunny', 'hunny', 'kinza'];
let userNames = [];

if (userNames.length === 0) {
    console.log('We need to find some users!')
}

for (i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log(`Hello Admin, would you like to see a status report?`)
    } else {
        console.log(`Hello ${userNames[i]} thank you for logging in again`);
    }
}
