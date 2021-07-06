
var myBankAccount = 10;
var myName = "Becky";

// ----------------
// Conditionals: chains of if / else if / else
// ----------------

// Ex 1: Just using numbers
if (myBankAccount <= 0) {
  console.log("No entry");
} 
else if (myBankAccount < 10) {
  console.log("Buy a sandwich?");
}
else if (myBankAccount < 20) {
  console.log("Buy the fancy pasta");
}
else if (myBankAccount < 50) {
  console.log("Buy some truffles?");
}
// The "else" will run if none of the above were true
else {
  console.log("How much money did you bring??");
}

// Ex 2: Using strings instead
if (myName == "Becky") {
  console.log("Hello, Becky");
} 
else if (myName == "Shari") {
  console.log("Hello, Shari");
} 
else {
  console.log("Hello, stranger!");
}


// ----------------
// Conditionals: using && (and) and || (or) to make more complicated conditions
// ----------------

var x = 14;
console.log(x > 0); // true: x is greater than 0
console.log(x <= 10); // false: x is not less or equal to 10

// ------------------
// && (and): only returns true if both conditions evaluate as true
// In the abstract:
console.log(true && true); // returns true
console.log(true && false); // returns false: both must be true
console.log(false && false); // returns false

console.log(x > 0 && x <= 10); // false: x is greater than 0, but it's not less or equal to ten
console.log(x > 0 && x > 20);  // false: x is greater than 0, but it's not greater than 20
console.log(x > 0 && myName == "Becky"); // true: you don't need to just compare numbers

// ------------------
// || (or): returns true if at least one of the conditions is true
// In the abstract:
console.log(true || true); // returns true: both are true
console.log(true || false); // returns true: at least one of them is true
console.log(false || false); // returns false: neither are true

console.log(x > 0 || x > 20); // true: x isn't greater than 20 (false), but it *is* greater than zero (true)
console.log(x <= 0 || x > 20); // false: both of these are false, so the whole thing is false

// ------------------
// Connecting these back to if statements!
// And: This will only run if x is greater than zero AND it's less than 20 AND myName is Becky
if (x > 0 && x < 20 && myName == "Becky") {
  console.log("Hi, Becky! Your number is " + x);
}

// Or: This will only run if x isn't 14 OR x *is* 15, or if myName is "Shari"
if (x != 14 || x == 15 || myName == "Shari") {
  console.log("None of these are true, so you'll never see this message in the console.");
}
else if (x == 15 || myName == "Becky" || x > 20) {
  console.log("At least one of these is true, so this one should run.");
}


// ----------------
// Arrays: ordered lists of values!
// ----------------

// The function from before
function printTwo(first, last, breakfast) {
  console.log(`Who's checking in to this hotel?: ${first} ${last}`);
  console.log(`What do they eat for breakfast? ${breakfast}`);
}

// Splitting up the first/middle/last names into separate arrays
var firsts = ["Becky", "LeBron", "Shaquille"];
var lasts = ["Brown", "James", "O'Neal"];
var bfast = ["nothing", "protein", "pancakes"];

// Here's how we get the individual parts of an array
console.log(firsts[0]); // Becky
console.log(firsts[1]); // LeBron
console.log(firsts[2]); // Shaquille

console.log(bfast); // Returns the whole "firsts" array
console.log(bfast.length); // Returns the length of the array, which is 3
console.log(bfast[3]); // Returns undefined: right now, there is nothing at index 3

// What happens if we add something new?
bfast.push("grapefruit"); // Adds "grapefruit" to the end of the breakfast array
console.log(bfast[3]); // Now this returns "grapefruit"
console.log(bfast.length); // After adding grapefruit, the length is 4


// ----------------
// For loops: How we can quickly cycle through an array!
// ----------------

// To print the information for the first guest, we'd do:
printTwo(firsts[0], lasts[0], bfast[0]);

// But if we wanted to do all of them like that, it would take forever.
// What if we could just loop through everything, instead?

// Here's what that for loop would look like.
for (var index = 0; index < firsts.length; index++) {
  printTwo(firsts[index], lasts[index], bfast[index]);
}

// ------------------
// Breaking down the foor loop:
/*
for (statement1; statement2; statement3) {
  console.log("run this code");
}
*/

// ------------------
// statement1:
var i = 0;
// statement1 is where we say, "I want to loop through the array starting at some value."
// Typically, that value is zero.

// ------------------
// statement2:
i < firsts.length;
// statement2 is where we say, "..and I want to stop looping when you get to this value."
// In an array, typically that value is the length of the list.

// ------------------
// statement3:
i++;
// statement3 is where we say, "After every loop, I want you to change the index by some amount."
// Changing the index is how we can actually get the next value from the array.
// Otherwise, we'd just be getting firsts[0] every time.

// ------------------
// Sidebar: what's the ++ for?
// It's a shorthand for "increase the number in this variable by 1."
// ++ is only for increasing by 1. You can't use ++ to increase by anything else.
var z = 0;
z = z + 5; // take whatever's in z, increase it by 5, set z to that number.
z += 4;    // take whatever's in z, increase it by 4, set z to that number. (one shorthand)
z++;       // take whatever's in z, increase it by 1, set z to that number. (shorter shorthand)


// Look at it one more time, make sure you understand what you're seeing
for (var index = 0; index < firsts.length; index++) {
  printTwo(firsts[index], lasts[index], bfast[index]);
}


// --------------------------
// Arrays + storytelling
// --------------------------
// Now let's connect all this to the assignment.

// ------------------
// Version 1: just click to continue the story

var i = 0; // i represents where we are in the story!
var trainButton = document.querySelector(".train");
var trainText = document.querySelector(".trainText");
var story = [
  "You are in a train.",
  "You are being chased through the train!",
  "You are at the back of the train, being chased."
];

// Button listener
trainButton.addEventListener("click", function() {
  if (i < story.length) {
    trainText.innerText = story[i];
    i++;
    // trainButton.innerText = "To step " + i;
  } else {
    trainText.innerText = "You died!";
    trainButton.style.display = "none"; // You can hide the "next" button when the story ends
  }

  // Or, you could opt to show a specific button only when you hit some step of the story
  // if (i == 1) {
  //   hideButton.style.display = "inline";
  // }
});

// ------------------
// Version 2: interpret typed text when a button is clicked
var input = document.querySelector(".textInput");
console.log(input);

// Typing version: click will get value of input
trainButton.addEventListener("click", function() {
  var val = input.value; // this is the value of whatever is in the text input box

  if (val == "start") {
    trainText.innerText = story[0];
  } else if (val == "north") {
    trainText.innerText = story[1];
  } else if (val == "run") {
    trainText.innerText = story[2];
  } else if (val == "help") {
    trainText.innerText = "You died!";
    trainButton.style.display = "none"; // hides the "next" button when we hit the end
  }

  // Something you might notice is that this setup will always run story[0]
  // *any time* you type "start", regardless of where you are in the story.
  // I'd recommend keeping track of "i" like we did before, and doing something like:
  // if (val == "start" && i == 0)
  // should you want to use this method.
});

// ------------------
// What if I want another set of options, if I have points in the story where there 
// are multiple choices?

// One option is to have a second array, which is listening to clicks on
// a second button. That might look like this.
var story2 = [
  "",
  "You hide behind your luggage.",
  "The train pulls in, and you are still hidden."
];

// And here's how we might think about using that second button.
var hideButton = document.querySelector(".hideAtStart");

hideButton.addEventListener("click", function() {
  if (i == 1) {
    console.log(story2[i]);
  }
  else if (i == 2) {
    console.log(story2[i]);
  }
});

// ------------------
// Another type of listener: the keyup.
// This will track any kind of keyboard input you do on the page,
// regardless of whether it's inside a text input area or not.
document.addEventListener('keyup', function(e) {
  if (e.key == "k") {
    if (i > 0 && i < 10) {
      console.log("Oh god, you killed him!");
      // do whatever you need to here
    }
  }
  else if (e.key == "q") {
    console.log("Would you like to quit?");
  }
});


// ------------------
// Maybe you want each step of the journey to have multiple
// different choices. You could have several different arrays that
// offer different choices at each step. Maybe they look like this:
var storyStep2 = [
  "You go to the front of the train",
  "You go to the back of the train",
  "You stay right where you are."
];

// That's fine, but it gets a little hard to look at if you have 5 steps in your story,
// and each is in a different storyStepX array. Instead of having a bunch of
// separate arrays, you could instead stick all of them into one larger array,
// like this:

var wowStory = [
  [
    "You go to the front of the train",
    "You go to the back of the train",
    "You stay right where you are."
  ],
  [
    "You yell for the conductor",
    "You fight the person chasing you"
  ]
];

// wowStory is... an array of arrays! Whoa! Here's how we get each value out of it.

// Looking at the first list
console.log(wowStory[0][0]); // go to the front
console.log(wowStory[0][1]); // go to the back
console.log(wowStory[0][2]); // stay where you are
console.log(wowStory[0]); // the list that contains the above 3 options
console.log(wowStory[0].length) // 3

console.log(wowStory[1][0]); // yell
console.log(wowStory[1][1]); // fight
console.log(wowStory[1]); // list that contains the above 2 options
console.log(wowStory[1].length) // 2

console.log(wowStory.length); // 2. The ouside array only contains 2 values, even if both have things in them.