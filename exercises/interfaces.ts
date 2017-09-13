// Interfaces provide the blue print for an object and check whether the object meets a specific requirement

// Example without an interface

function printLabel(labelledObj: { label: string }): void {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


// Example rewritten using an interface
interface LabelledValue {
    label: string;
    size: number;
}

function printLabelwithInterface(labelledObj: LabelledValue): void {
    console.log(labelledObj.label);
}

let myObj1 = {size: 10, label: "Size 10 Object"};
printLabelwithInterface(myObj1);


// Optional params
// Example rewritten using an interface
interface optionalSizeValue {
    label: string;
    size?: number;
}


function printLabelOnly(labelledObj: optionalSizeValue): void {
    console.log(labelledObj.label);
}

let myObj2 = {label: "Size 10 Object"};
printLabelOnly(myObj2);

// Another example on optional parameters

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let obj3 = {color: "black", widthe: 10};
let mySquare1 = createSquare(obj3);

// Readonly properties
// Some properties should only be modifiable when an object is first created. 
// You can specify this by putting readonly before the name of the property

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5;

// Excess Property Checks
// Object literals get special treatment and undergo excess property checking when assigning them to other variables, 
// or passing them as arguments.
// If an object literal has any properties that the “target type” doesn’t have, you’ll get an error.

// let mySquare = createSquare({color: "black", widthe: 10});