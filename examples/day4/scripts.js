// ----------------
// Basics
// ----------------

console.log("Hello world!");
console.log(4);
console.log("Hello again! Maybe this is a longer sentence");

// Numbers
console.log(18.0);
console.log(4 + 4);

// Strings, quotes, double quotes, backticks
console.log("Hey, didn't David say \"I can't do that?\"");
console.log(`Hey, didn't David say "I can't do that?"`);

// Some math
console.log((4 - 8 + 8) * 7 / 9);
console.log(4 - 8 + 8 * 7 / 9);
console.log(4 < 8);
console.log(4 > 4);
console.log(4 + 4 > 9);
console.log(4 + 4 == 2);
console.log(2 != 3);

// Is this equal to that?
console.log("rabbit" == "rabbit");
console.log("rabbit" == "Rabbit");
console.log(2 == "2");



// ----------------
// Variables
// ----------------

var numberOfPeopleInThisZoomCall = 8;
console.log(numberOfPeopleInThisZoomCall);

// Strings as variables, concatenating them
var greeting = "Hello, ";
var person = "Mr. President";
var breakfast = "cereal";
console.log(greeting + person); //concatenation
console.log("How is your day, " + person + "? Do you want " + breakfast + " for breakfast?");

// example of splitting a string across multiple lines
console.log("how is your day, person?" + 
"Do you want cereal?");

// splitting a string across multiple lines with backticks
console.log(
    `How is your day, ${person}? 
    Do you want ${breakfast} for breakfast?`);

// evaluating code inside a backtick string
var myCars = 1;
console.log(`I have ${myCars > 0} cars.`);




// ----------------
// Functions
// ----------------

// This function takes three strings: a first name, a last name, and a breakfast preference.
// It formats those strings, and prints them to the console.
function printTwo(first, last, breakfast) {
    console.log(`Who's checking in to this hotel?: ${first} ${last}`);
    console.log(`What do they eat for breakfast? ${breakfast}`);
}

// Run that function for three different people.
printTwo("Becky", "Brown", "nothing");
printTwo("LeBron", "James", "protein");
printTwo("Shaquille", "O'Neal", "pancakes");

// This function takes two numbers, and logs their sum.
function weirdMath(one, two) {
    console.log(one + two);
}

weirdMath(90, 10); // should be: 100

var myBankAccount = 0;

function addToBank(value) {
    // myBankAccount = myBankAccount + value;
    myBankAccount += value; // equivalent to the previous line
}

// Check to see if I have enough money to enter the restaurant
function goEat() {
    if (myBankAccount <= 0) {
        console.log("Get out of here!!!!");
    }
    else {
        console.log("Would you like to see the menu?");
    }
}

goEat(); // denied entry
addToBank(50); // find $50
goEat(); // allowed to order
addToBank(-100); // lost $100
goEat(); // denied entry

console.log(myBankAccount); // should be -50




// ----------------------
// Dealing with the page
// ----------------------

// These CSS selectors provided for reference
/*
    p { }

    button { }

    #header { }

    .one { }
*/

var paraOne = document.querySelector(".one");  // reference to <p class="one">
var button = document.querySelector("button"); // reference to <button>
var header = document.querySelector("h1");     // reference to <h1>

console.log(paraOne);   // what does paraOne contain (a LOT)
console.log(paraOne.className); // paraOne's class: "one"
console.log(paraOne.innerText); // paraOne's text: "ATTENTION: All schools closed..."



// ----------------------
// Listening
// ----------------------

// Listening for button clicks: version 1
button.addEventListener("click", changeText); // add the listener

function changeText() { // this function will run on button click
    console.log("a click happened!");
    paraOne.innerText = "Thank you for clicking this alert.";
}

// Listening for button clicks: version 2
// Nameless function is given as an argument to the addEventListener function
button.addEventListener("click", function() {
    console.log("a click happened!");
    paraOne.innerText = "Thank you for clicking this alert.";
});

// Adding to bank account, using the page
var button2 = document.querySelector(".increase"); // reference to <button class="increase">
var mySpan = document.querySelector(".two span");  // reference to <p class="two">...<span>$0</span></p> (only the <span>, not the <p> outside it)

// Listening for button2 clicks, using the "nameless function" approach
button2.addEventListener("click", function() {
    // console.log("clicked button 2");
    addToBank(10);
    mySpan.innerText = "$" + myBankAccount; // add dollar sign, way 1
    mySpan.innerText = `$${myBankAccount}`; // add dollar sign, way 2
});
