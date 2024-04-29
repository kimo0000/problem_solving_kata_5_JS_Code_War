function bigIt(str) {
  // Methode 1:
  // let final = str.split(" ").map((el, i, arr) => {
  //         return el.slice(1) + el.slice(0,1) + "ay";
  // }).join(' ')
  // return final.includes('!')
  //             ? final.slice(0, -2)
  //             : final;

  // Methode 2:
//   let splitedStr = str.split(" ");
//   let final = "";
//   for (let i = 0; i < splitedStr.length; i++) {
//     final += splitedStr[i].slice(1) + splitedStr[i].slice(0, 1) + "ay" + " ";
//   }
//   return final.includes("!")
//               ? final.slice(0, -3)
//               : final;

// Methode 3:
let final = str.split(' ')
          .map(word => word.replace(word[0], "") + word[0] +"ay")
          .join(' ');
return final.includes("!") ? final.slice(0, -2) : final;
}

console.log(bigIt("hello World !"));