const message = "Hello World";
const chars = [];
for (let i = 0; i < message.length; i++) {
  chars.push(message[i]);
}
console.log(chars);

// use cases
let a1 = [1, 2];
let a2 = [3, 4];
let a3 = [...a1, ...a2];

let numbers = [10, 4, 3, 9, 6, 1];
Math.min(...numbers);
