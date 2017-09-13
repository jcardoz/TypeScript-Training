// Tuple types allow you to express an array 
// where the type of a fixed number of elements is known, but need not be the same. 
// For example, you may want to represent a value as a pair of a string and a number.

// Declare a tuple type
let pairing: [string, number];
console.log(pairing);

// Initialize it
pairing = ['hello', 10]; // OK
// pairing = [10, "hello"];

// When accessing an element with a known index, the correct type is retrieved:
console.log(pairing[0].substr(1)); // OK
// console.log(x[1].substr(1));

// When accessing an element outside the set of known indices, a union type is used instead:
pairing[2] = "world"; // OK, 'string' can be assigned to 'string | number'

// pairing[3].toString();

// pairing[4] = true;