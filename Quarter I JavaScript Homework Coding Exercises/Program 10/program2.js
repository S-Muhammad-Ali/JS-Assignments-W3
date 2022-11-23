// program 2: Syed Muhammad Ali Date: 10/23/22

// ok first i thought TRIM would work but trim only work on the start and End for in between we need to use relace.

// what replace funtion did that it replaces every thing before "," with after ","
// "/ /g" do replce globally 
// We use the \s character in the regex. The special character matches spaces, tabs and new lines.



let person_name1 = '\t Syed \n \t Muhammad \n \t Ali \n';

console.log(`before strip:${person_name1}`);
console.log(`After strip:${person_name1.replace(/\s/g, "")}`);