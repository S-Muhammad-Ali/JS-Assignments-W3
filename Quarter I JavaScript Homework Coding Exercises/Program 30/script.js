let userNames = ['admin', 'maria', 'sunny', 'hunny', 'kinza'];

for (i = 0; i < userNames.length; i++) {
    if (userNames[i] == 'admin') {
        console.log(`Hello ${userNames[0]} would you like to see a status report?`);
    } else {
        console.log(`Hello ${userNames[i]} thank you for logging in again`);
    }
}