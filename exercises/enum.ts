// A helpful addition to the standard set of datatypes from JavaScript is the enum. 
// As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
// Note the difference in the way we declare an enum - no equal-to sign is present.
enum errorCode {Yellow, Orange, Red}

let low: errorCode = errorCode.Yellow;
let medium: errorCode = errorCode.Orange;
let high: errorCode = errorCode.Red;

console.log(low);
console.log(medium);
console.log(high);

// We can also use errorCode[0] to fetch the specific name from the Enum
console.log(errorCode[0]);
console.log(errorCode[1]);
console.log(errorCode[2]);

// The numbering by default starts from 0, but the number can be changed by giving a numeric value to the enum values

enum notificationCode {Yellow = 1, Green = 3, Red = 5}

let warning: notificationCode = notificationCode.Yellow;
let success: notificationCode = notificationCode.Green;
let error: notificationCode = notificationCode.Red;

console.log(warning);
console.log(success);
console.log(error);