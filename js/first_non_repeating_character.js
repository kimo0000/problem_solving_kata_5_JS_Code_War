function firstNonRepeating(str) {
  if(str == "") return "";
let strLower = str.toLowerCase();

let obj = {};
for (let i = 0; i < strLower.length; i++) {
  if (str[i] in obj) {
    obj[strLower[i]] += 1;
  } else {
    obj[strLower[i]] = 1;
  }
}
let final = [];
for (const key of Object.entries(obj)) {
  final.push(key);
}
let letter = final.sort((a, b) => a[1] - b[1])[0][0];
let letterCount = final.sort((a, b) => a[1] - b[1])[0][1];
let letterIndex = strLower.indexOf(letter);
return letterCount > 1 ? "" : str[letterIndex];

// Methode 2:
// if(str == "") return "";
// let strLower = str.toLowerCase();
// const counter = new Map();
// for (let i = 0; i < strLower.length; i++) {
//   counter.set(strLower[i], (counter.get(strLower[i]) || 0) + 1);
// }
// let letter = Array.from(counter).sort((a, b) => a[1] - b[1])[0][0];
// let letterCount = Array.from(counter).sort((a, b) => a[1] - b[1])[0][1];
// const letterIndex = strLower.indexOf(letter);
// return letterCount > 1 ? "" : str[letterIndex];
}

console.log(firstNonRepeating("sTreSs"));