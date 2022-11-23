
const current_users = ['admin', 'maria', 'sunny', 'khalda', 'kinza'];
const new_users = ['admin', 'maria', 'sabra', 'misbah', 'khalda'];

new_users.forEach((name) => {
    const isNotAvailble = current_users.includes(name);

    if (isNotAvailble) {
        console.log(`${name} is not availble`)
    } else {
        console.log(`${name} is availble`)
    }
})