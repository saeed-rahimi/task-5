"use strict";
//////////////////////// reverse task
const sentence = "The quick brown fox jumps over the lazy dog";
const out = sentence
  .split(" ")
  .reverse()
  .map((e) => e.split("").reverse().join(""))
  .join(" ");
console.log(out);
/////////////////////////////////////





///////////////////////movie task
const recommendedMovies1 = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "Memento",
];
const recommendedMovies2 = ["The Matrix", "Avatar", "Inception", "Titanic"];
const mergeArr = recommendedMovies1.concat(recommendedMovies2);
console.log(mergeArr);
const uniqueArray = [...new Set(mergeArr)];
console.log(uniqueArray);
const reverseUnique = uniqueArray.reverse();
console.log(reverseUnique);
const strArr = reverseUnique.join(" | ");
console.log(strArr);
//////////////////////////////////





////////////////////////////PC task
const inventory = ["mouse", "keyboard", "monitor", "laptop", "printer"];
const searchTerm = "laptop";
const check = inventory.findIndex((e) => e === searchTerm);
if (check !== -1) {
  inventory.splice(check, 1).push("sss");
  inventory.push(searchTerm);
} else {
  inventory.push(searchTerm);
}
console.log(inventory);

const Arr=[]
Arr.push(inventory.slice(2,3))
Arr.push(inventory.slice(-2,-1))
console.log(Arr.join(" ; "));

