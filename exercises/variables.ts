// Number
let aNumber: number = 10;

let anotherNumber: Number = 5;
console.log(anotherNumber);

// String
let aString: string = 'this is a string';
console.log(aString);

// Both single quotes or double quotes are fine
let anotherString: String = "this is also a string";
console.log(anotherString);

// Using template strings
let alsoAString: string = `This is a string as well ${aNumber}`;
console.log(alsoAString);

// Boolean
let isDone: boolean = true;
console.log(isDone);

// Any
// This type is useful when we move from an existing JavaScript application
// and are not sure what type the specific variable is
// This should not be used as this defeats the purpose of using TypeScript
let unsureVariable: any = 'this may be a string';
unsureVariable = true;

// Null & Undefined
// Similar to JavaScript, these cannot be assigned explicitly 
// unless assigning the same value to themselves
let myNull: null = null;
let myUndefined: undefined = undefined;
