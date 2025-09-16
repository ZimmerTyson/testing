// Write a function that takes a name and returns "Hello, [name]!"
let body = document.getElementsByTagName("body");

function sayHello(name) {
  //name = prompt("What is your name?")
  let welcomeMessage = `Hello, ${name}`;
  console.log(welcomeMessage)

  let headline = document.getElementById('headline');
  headline.textContent = welcomeMessage;

  let followUpMessage = document.createElement('p');
  followUpMessage.textContent = `${name}, what are you gonna do today?`;
  followUpMessage.style.fontWeight = '900';
  followUpMessage.style.fontSize = "24px";
  followUpMessage.style.textDecoration = "underline";

  document.body.append(followUpMessage);
}

sayHello();




// Create an array of numbers and find the largest one

const numbers = [1, 234, 3, 500, 700];

const highestNumber = Math.max(...numbers);

console.log(highestNumber);

// Build a simple calculator function (add, subtract, multiply, divide)




function addCalculator(num1, num2) {
  return num1 + num2;
}

console.log(addCalculator(2, 5));


function minusCalculator(num1, num2) {
  return num1 - num2;
}

console.log(minusCalculator(2, 5));


function multiplyCalculator(num1, num2) {
  return num1 * num2;
}

console.log(multiplyCalculator(2, 5));


function divideCalculator(num1, num2) {
  return num1 / num2;
}

console.log(divideCalculator(2, 5));


// Write a function that checks if a number is even or odd

function isEven(number) {
  if (number % 2 !== 0) {
    console.log("This number is odd!")
  } else {
    console.log("This number is even!")
  }
}

isEven(2);
isEven(4);
isEven(9);
isEven(11);




// Create an object representing a person with properties, then access/modify them

const person = {
  firstName: "Tyson",
  lastName: "Zimmer",
  hobbies: "Business and coding"
};

console.log(person);

person.firstName = "Tyler";

console.log(person);



// Create a click counter for button

let clickBtn = document.getElementById('clickBtn');
let clickCount = document.getElementById("currentCount");

let resetBtn = document.getElementById('resetBtn');
let counter = 0;


function resetCount() {
  counter = 0;
  clickCount.textContent = 0;
}



function handleClick() {

  counter += 1;
  console.log(counter)
  clickCount.textContent = `${counter}`;

}

clickBtn.addEventListener("click", handleClick);
resetBtn.addEventListener("click", resetCount);


//Loop through person array 

const elUserList = document.getElementById("elUserList");
const listItem = document.createElement('li')

let peopleCollection = [
  {name: "tyson1", email: "zimmertyson1@gmail.com", phone: "1234567890"},
  {name: "tyson2", email: "zimmertyson2@gmail.com", phone: "8052342345"},
  {name: "tyson3", email: "zimmertyson3@gmail.com", phone: "9021234567"}

];

elUserList.innerHTML = peopleCollection.map(person => 
`<li><strong>Name: ${person.name}</strong>, Email: ${person.email}, Phone: ${person.phone}</li>`

).join('');

