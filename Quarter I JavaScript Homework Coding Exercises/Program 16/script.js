let guest = [' Mr. Zia Khan', ' Mr. Shahab', ' Maqsood'];

console.log(`${guest} has been invited to dinner party at my home`);
// console.log(`${guest[1]} has been invited to dinner party at my home`);
// console.log(`${guest[2]} has been invited to dinner party at my home`);

console.log(`It is come to our knowledged that Mr.${guest[2]} wont make it to the dinner.`);

guest.splice(2, 1, ' Jackie Chan');

console.log(`${guest} has been invited to dinner party at my home`);

console.log(`New Annoucement to ${guest}, Now we have a bigger table for dinner and since we have more space i have invited 3 more peoples at the dinner`);

guest.unshift(' Mr. Bruce Lee');

guest.splice(3, 0, ' Mr. Umar');

guest.push(' Mr. Abu Bakar');

// console.log(guest);
console.log(`${guest} has been invited to dinner party at my home`);