const students = [
  { id: 1, name: "Alice", age: 20, grade: 85, major: "Computer Science" },
  { id: 2, name: "Bob", age: 22, grade: 78, major: "Engineering" },
  { id: 3, name: "Charlie", age: 19, grade: 92, major: "Mathematics" },
  { id: 4, name: "Diana", age: 21, grade: 88, major: "Computer Science" },
  { id: 5, name: "Eve", age: 23, grade: 76, major: "Engineering" }
];

const numbers = [1, 5, 10, 15, 20, 25, 30, 35, 40];
const words = ["apple", "banana", "cherry", "date", "elderberry"];
const prices = [19.99, 25.50, 12.75, 8.99, 45.00, 32.25];


//* Map Exercises
// Exercise 1: Basic Transformation
// Create a new array with all numbers doubled.

let doubled = numbers.map( number => {
  return number * 2;
})

console.log(doubled);


// Exercise 2: Object Property Extraction
// Get just the names of all students.

const studentNames = students.map( student => {
  return `Name: ${student.name}`;
})

console.log(studentNames);



// Exercise 3: String Transformation
// Make all words uppercase and add an exclamation mark.

const upperWords = words.map(toUpper);

console.log(upperWords);

function toUpper(word) {
  return word.toUpperCase();
}




// Exercise 4: Creating New Objects
// Create summary cards for each student (name and grade only).

const cardContainer = document.getElementById("cardContainer");


cardContainer.innerHTML = students.map(createCards).join('');

function createCards(student) {
 return `<div>
    <h3>${student.name}</h3>
    <p>${student.grade}</p>
    <hr>
  
  </div>`
}

console.log(cardContainer);



//* Filter Exercises
// Exercise 1: Number Filtering
// Get all numbers greater than 20.

let isGreaterThan = numbers.filter(greaterThan20);
console.log(isGreaterThan);

function greaterThan20(number) {
  return number > 20;
}


// Exercise 2: String Length Filter
// Get words that are longer than 5 characters.

let longerThan5 = words.filter(longerThan);
console.log(longerThan5);

function longerThan(word) {
  return word.length > 5;
}



// Exercise 3: Object Property Filter
// Get students with grades above 80.

const gradesOver80 = students.filter(over80);
console.log(gradesOver80);

function over80(student) {
  return student.grade > 80;
}



// Exercise 4: Complex Filter
// Get Computer Science students who are 20 or older.

const findStudent = students.filter(compSci);
console.log(findStudent);

function compSci(student) {
  return student.age >= 20 && student.major === "Computer Science";
}


//* Reduce Exercises

// Exercise 1: Sum All Numbers
// Calculate the total sum of all numbers.

const sumTotal = numbers.reduce(sum);

console.log(`Total: $${sumTotal.toFixed(2)}`);

function sum(previous, next) {
  return previous + next;
}


// Exercise 2: Find Maximum
// Find the highest grade among all students.

let highestGrade = students.reduce(maximum, 0);

console.log(highestGrade);

function maximum(accumulator, student) {
  return Math.max(accumulator, student.grade);
}


// Exercise 3: Count by Category
// Count how many students are in each major.

// Hint: Start with an empty object {}, then add/increment counts




// Exercise 4: Create a Summary String
// Create a sentence with all student names.




//*  INDEXOF & INCLUDES Exercises
// Exercise 1: Find Position
// Find the position of "cherry" in the words array.





// Exercise 2: Check Existence
// Check if the number 25 exists in the numbers array.




// Exercise 3: Find Object by Property
// Find the index of the student named "Diana".

// Hint: Use findIndex() for objects



// Exercise 4: Find Object
// Find the student with ID 3.




//* OBJECT Manipulation Exercises
// Exercise 1: Object.keys()
// Get all the property names from the first student.




// Exercise 2: Object.values()
// Get all the property values from the first student.



// Exercise 3: Add Properties
// Add a "status" property to each student based on their grade (>= 80 = "Pass", < 80 = "Needs Improvement").




// Exercise 4: Group Objects
// Group students by their major using reduce.