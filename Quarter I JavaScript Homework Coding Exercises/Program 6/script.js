let person_name1 = '\t Syed \n \t Muhammad \n \t Ali \n';

console.log(`before strip:${person_name1}`);
console.log(`After strip:${person_name1.replace(/\s/g, "")}`);