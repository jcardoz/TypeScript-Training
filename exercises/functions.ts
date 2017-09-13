// For a function, we need to define the types of the arguments it receives
// We also need to define the return type which the function passed back
function sayHello(sValue: string):void {
	console.log(`Hello ${sValue}`);
}

sayHello('World');


// If we want the parameter to be optional, we can use the ? sign
function greetStark(sValue?: string):void {
	
	console.log(sValue?`Hello ${sValue}`:`Hello Stark`);
	
}

greetStark();
greetStark('Arya');

// Never return type
// The never type represents the type of values that never occur. 
// For instance, never is the return type for a function that always throws an exception or one that never returns

// Function returning never must have unreachable end point
function error(message: string): never{
    throw new Error(message);
}