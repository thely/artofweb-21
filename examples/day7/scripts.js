console.log("hello!");

// printTwo(), copied without changes from day3
function printTwo(first, last, breakfast) {
    console.log(`Who's checking in to this hotel?: ${first} ${last}`);
    console.log(`What do they eat for breakfast? ${breakfast}`);
}

// How it was before: splitting everyone's data up into different arrays
var firsts = ["Becky", "LeBron", "Shaquille"];
var lasts = ["Brown", "James", "O'Neal"];
var bfast = ["nothing", "protein", "pancakes"];

// How it is now: each person is an object, with properties
var becky = {
    first: "Becky",
    last: "Brown",
    bfast: "nothing",
    bday: "8/23"
};

// Even better: an array of objects, containing everyone!
var users = [
    {
        first: "Becky",
        last: "Brown",
        bfast: "nothing",
        bday: "8/23"
    },
    {
        first: "LeBron",
        last: "James",
        bfast: "protein"
    },
    {
        first: "Shaquille",
        last: "O'Neal",
        bfast: "pancakes"
    }
]

// How to get Shaq's breakfast
console.log(users[2].bfast);

// Looping through this new method
for (var index = 0; index < users.length; index++) {
    console.log(index);
    printTwo(users[index].first, users[index].last, users[index].bfast);
}

// ---------------------------------
// Using lists of objects to fill out HTML templates
// ---------------------------------

// List of news blocks
var news = [
    {
        title: "Looney Tunes new drop??",
        desc: "YOU WON'T BELIEVE WHAT'S HAPPENING.... I love Elmer Fudd and his crazy freeze frame YOU WON'T BELIEVE WHAT'S HAPPENING.... I love Elmer Fudd and his crazy freeze frame",
        link: "youtube.com/something" // you could add in new properties as well
    },
    {
        title: "my mail is on fire?? [GONE WRONG]",
        desc: "The post office is ripping me off! Don't let them get you the way they got me!"
    },
    {
        title: "Third video",
        desc: "No time to describe"
    },
    {
        title: "Political Satire",
        desc: "These jokes are offensive"
    }
];

// We need str to exist first, so we can put text in it
var str = "";

for (var i = 0; i < news.length; i++) {
  // concatenate whatever is currently in str with this template
  // we use backticks to be able to easily drop the pieces of content in
    str += `
    <div class="news-item">
        <h1>${news[i].title}</h1>
        <p>${news[i].desc}</p>
        <h4>View this video</h4>
        <hr />
    </div>
    `;
}

// Check out what's in there – it's definitely text that looks like HTML!
console.log(str);

// Now, we need to put that text somewhere. Get the parent...
var parent = document.querySelector("#news-block");
console.log(parent);

// ...and then set the parent's innerHTML property to the str we made earlier.
parent.innerHTML = str;
