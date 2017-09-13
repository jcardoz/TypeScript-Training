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