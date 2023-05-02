// Printing a variable value
var a = "Amreen";
console.log("Value for A", a);

// Adding numbers
var numa1 = 6;
var numa2 = 10;
var addition = numa1 + numa2;
console.log("Addition", addition);

// Subtraction numbers
var nums1 = 8;
var nums2 = 6;
var subtraction = nums1 - nums2;
console.log("Subtraction", subtraction);

// Multiply numbers

var numm1 = 4;
var numm2 = 5;
var multiply = numm1 * numm2;
console.log("Multiply", multiply);

// Divide numbers
var numd1 = 15;
var numd2 = 2;
var divide = numd1 / numd2;
console.log("Divide", divide);

//All Calculations can be done once the variables are defined
//We can re-use the same variables and their values again and again

var one = 40;
var two = 8;
var Caladdition = one + two;
var Calsubtration = one - two;
var Calmultiply = one * two;
var Caldivide = one / two;

console.log("Caladdition", Caladdition);
console.log("Calsubtration", Calsubtration);
console.log("Calmultiply", Calmultiply);
console.log("Caldivide", Caldivide);

//let a = 30;
//let a = 40;
//console.log("a", a);
//with let you cannot declare the variable again as it's already declared

//When we declare a value with var then the old value is overridden with the new one
var newValue = 10;
var newValue = 13;
console.log("newValue", newValue);

/* ARRAYS */

let newArray1 = ["Amreen", "Iqbal", "Vamsi", "Sharad", "Anil", "Ravi"];

/* Destructuring in JavaScript is a way of extracting values from objects or arrays
and assigning them to variables in a more concise way. 

## START Destructuring an array: */
const [v1, v2, v3, v4, v5, v6] = newArray1;
console.log("v1", v1);
console.log("v2", v2);
//Output: v1 Amreen
//Output: v2 Iqbal
/* ## END Destructuring an array: */

console.log("Print the values of newArray1", newArray1);

console.log("Print the value of 0th item in the newArray1", newArray1[0]);

console.log(
	"Print the value of 0th item in the newArray1",
	newArray1[0] + " " + newArray1[1]
);

/* ## Destructuring an object: In this example, we create an object `myObject` with three properties.
We then use destructuring to extract the properties from the object and assign

```javascript
const myObject = { name: "John", age: 30, city: "New York" };
const { name, age, city } = myObject;

console.log(name); // Output: "John"
console.log(age); // Output: 30
console.log(city); // Output: "New York"
``` */

/* Destructuring multiple objects end */
let newArray2 = [
	{
		name1: "Amreen",
		name2: "Iqbal",
		name3: "Vamsi",
		name4: "Sharad",
		name5: "Anil",
		name6: "Ravi",
	},
	{
		name1: "Anil",
		name2: "Sharad",
		name3: "Vamsi",
		name4: "Ravi",
		name5: "Amreen",
		name6: "Iqbal",
	},
];
const { name1, name2, name3 } = newArray2[1];
console.log("Name", name1); // output Name Anil

/* Destructuring multiple objects end */

const [newv1, newv2, newv3, newv4, newv5, newv6] = newArray2;
console.log("v1", v1);
console.log("v2", v2);
//Output: v1 Amreen
//Output: v2 Iqbal
/* ## END Destructuring an array: */

//Map function which will count number of characters of each item in the array list

let mappedValues = newArray1.map((str) => {
	//const { length } = str;  /* Destructuring */
	const length = str.length;
	const variable2 =
		str[1]; /* Will print second character of each item in array */

	return length;
});

console.log("mappedValues", mappedValues);

//Iqbal Checking....
