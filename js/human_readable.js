function humainReadable(seconds) {
let second = seconds % 60;
let minute = parseInt(seconds / 60) < 1 ? 0 : parseInt((seconds / 60) % 60);
let hour = parseInt(seconds / 60) < 60 ? 0 : parseInt(seconds / 60 / 60);
return `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`;
}

console.log(humainReadable(57894));