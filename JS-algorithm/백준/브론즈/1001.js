const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b] = input.split(' ').map(Number);

const result = a - b;

console.log(result);
