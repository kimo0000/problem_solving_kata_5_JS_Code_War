function moveZeros(arr) {
// Methode 1
// let arrNumZero = arr.filter(el => el === 0);
// let otherNum = arr.filter(el => el !== 0);
// console.log(arrNumZero, otherNum);
// return otherNum.concat(arrNumZero);

// Methode 2:
// let zero = [];
// let others = [];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === 0) {
//        zero.push(arr[i]);
//     } else {
//        others.push(arr[i]);
//     }
// }
// return others.concat(zero);

// Methode 3:
let zeroInArr = arr.filter(el => el === 0).length;
let final = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
        continue;
    } else {
        final.push(arr[i]);
    }
}
return final.concat(Array(zeroInArr).fill(0));
}

console.log(moveZeros([false, 0, 1,2, 0,0,1,0,3, "a"]));