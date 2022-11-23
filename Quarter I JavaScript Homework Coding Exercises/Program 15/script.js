let guest = ['Zia Khan', ' Shahab', ' Maqsood'];

console.log(`${guest} has been invited to dinner party at my home`);
// console.log(`${guest[1]} has been invited to dinner party at my home`);
// console.log(`${guest[2]} has been invited to dinner party at my home`);

console.log(`It is come to our knowledged that Mr.${guest[2]} wont make it to the dinner.`);

guest.splice(2, 1, ' Jackie Chan')

console.log(`${guest} has been invited to dinner party at my home`);

