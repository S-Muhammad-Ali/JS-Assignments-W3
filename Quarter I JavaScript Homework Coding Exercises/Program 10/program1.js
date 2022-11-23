//Program 1: Syed Muhammad Ali Date: 10/23/22

// This program is all about lowercase, uppercase and out of nowhere The titlecase  --__--

let name1 = "Syed MuHaMmad ALi";

console.log('"UPEERCASE"', name1.toUpperCase());
console.log('"lowercase"', name1.toLowerCase());

str = name1.toLowerCase().split(" ");

// console.log(str);

for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    titleCase = str.join(" ");
}
console.log('"TitleCase"', titleCase);