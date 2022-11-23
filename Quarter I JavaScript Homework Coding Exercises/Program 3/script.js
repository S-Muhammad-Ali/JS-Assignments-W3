let name1 = "Syed MuHaMmad ALi";

console.log('"UPEERCASE"', name1.toUpperCase());
console.log('"lowercase"', name1.toLowerCase());

//     name1 = name1.toLowerCase().split(' ');
//     for (var i = 0; i < name1.length; i++) {
//         name1[i] = name1[i].charAt(0).toUpperCase() + name1[i].slice(1);
//     }
//     return name1.join(' ');

str = name1.toLowerCase().split(" ");

console.log(str);

for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    titleCase = str.join(" ");
}
console.log('"TitleCase"', titleCase);
