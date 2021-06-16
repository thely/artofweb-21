## Required resources

You will need one of each of these. Where it applies, the ones with a ⭐ are what I'll be teaching with, so if you want your experience to be one-to-one with mine, pick the recommended options.

All of these resources are free.

#### Browser
Something to look at the internet with! Your computer comes with one, but these are easier to develop on.

* ⭐ [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/) ⭐
* [Google Chrome](https://www.google.com/chrome/)

#### Code editor
Editing code is unbelievably difficult in Word, and Notepad isn't much easier. Get one of these!

* ⭐ [Virtual Studio Code](https://code.visualstudio.com/) ⭐
* [Atom](https://atom.io/)

#### Source/version control
Websites (or any other programmed thing) often involve a number of different files (and/or editors), and keeping track of all of them as a series of stages helps a lot. It's like a more robust version of a Google Doc's History. We won't dive hard into this, but it's important as a baseline. `git` is the version control system we're using.

On Mac:
  * Easy way with a unnecessarily large download (4GB, yikes): [install XCode from the App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12), which includes git
  * Intermediate way with much smaller download (~180MB, nice):
    1. Open Terminal via Applications > Utilities > Terminal.
    2. Copy this line: `xcode-select --install`, paste it into Terminal, press Enter
    3. An agreement should pop up. Press "Install," not "Xcode," and you should see it install.
    4. [Here's an article on this process](https://mac-how-to.gadgethacks.com/how-to/install-command-line-developer-tools-without-xcode-0168115/) if you want moral support and/or screenshots.

On Windows: install [Git for Windows](http://git-scm.com/download/win)

#### GitHub
GitHub is a place where you can put your code online, and more easily work with collaborators. It also lets us host sites for free (like this one!).

You'll need to [make a Github account](https://github.com/).

#### Localhost Server
When you're putting together a site on your computer, you need to be able to preview it.

* ⭐ [VSCode Five Server extension](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server) (needs Virtual Studio Code installed first) ⭐
* On Mac: if you're familiar with the Terminal, you can run `python -m SimpleHTTPServer` or `python3 -m http.server`

## Schedule

### Day 1 (6/22)

#### Lecture/discussion
* Introductions: Who are you, what do you want to do, what do you love or hate about the internet, what browser do you use? What experience do you have with art or code?
* Course overview. What we are doing, what we aren’t doing, and what we could do

#### Lab
* Environment setup: installing VSCode and LiveServer plugin, enabling developer tools on your browser, making a GitHub account
* _In groups_: scavenger hunt of [html.energy](https://html.energy/)
* _Together_: Exploring tags and attributes. Basics, text, images, a/v, tables, iframes
* The very basics of using git and GitHub Desktop

#### Assignments
* Do: [Very Bad 1996 Webpage](./projects/1-geocities)
* Look at: [My Boyfriend Came Back from the War](http://www.teleportacia.org/war/wara.htm) and [JODI](http://wwwwwwwww.jodi.org/)

<!-- ------------------------
----------- DAY 2
---------------------------->

### Day 2 (6/24)
#### Lecture
How do you make a website look good, and make looking good easy to maintain?

#### Lab
* container classes in HTML, difference between block and inline
* collection of CSS rules, including: 
  * backgrounds + text styles
  * the box model: width/height, border, padding, margins
  * positioning, part 1: floats, clear, position
* using the developer tools to workshop CSS styles
* _In groups_: box model hunt of [Snow Fall](https://www.nytimes.com/projects/2012/snow-fall/index.html#/?part=tunnel-creek) or [17776](https://www.sbnation.com/a/17776-football)

#### Assignments
* Do: [Your AOLW Directory](./projects/2-aolw-dir) (very simple) + [One callout, four ways](./projects/3-ctoa)
* Read: [https://tedium.co/2018/05/31/webring-history/](https://tedium.co/2018/05/31/webring-history/)

#### Resources
* MDN Web Docs: [the CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
* CSS Tricks Almanac: [background](https://css-tricks.com/almanac/properties/b/background/)

<!-- ------------------------
----------- DAY 3
---------------------------->

### Day 3 (6/29)
#### Lecture
How can we make our pages interactive, how does JavaScript let us do it, and what is this DOM (Document Object Model) that JavaScript is referencing?

#### Lab
* JS: variables, conditionals, event listeners
* HTML: using external files, plus buttons and input fields
* CSS: external fonts, pseudo-classes
* _In groups_: brainstorm ideas for the homework assignment, further explorations with event listeners

#### Assignment
* Do: [Interactive fiction in miniature](./projects/4-if-mini)

#### Resources
* [Google Fonts](https://fonts.google.com/): free fonts you can use
* [DOM Visualizer](http://bioub.github.io/dom-visualizer/)

<!-- ------------------------
----------- DAY 4
---------------------------->

### Day 4 (7/1)
#### Lecture
Can we make our lives easier by making a list full of variables, rather than having a ton of individual variables? (Yes.) How can we iterate through lists in a sane way?

#### Lab
* HTML: tables and lists, revisited
* JS: arrays, loops, functions
* CSS: flexbox
* *In groups*: lab assignment on array practice

#### Assignment
* [Array exercises](./projects/5-arrays)


<!-- ------------------------
----------- DAY 5
---------------------------->

### Day 5 (7/6)
#### Lecture
How can we model more complex ideas, like a single object that has a number of different attributes, or an idea that has both state and behavior?

#### Lab
* JS: functions continued, objects, JSON
* CSS: grid
* *In groups*: experimenting with objects, displaying those objects via grid

#### Assignment
* [Uncreative Writing](./projects/6-generative)

<!-- ------------------------
----------- DAY 6
---------------------------->

### Day 6 (7/8)
#### Lecture
How can we interact with APIs, and what are they? What kind of data can we get from these sources, published or unpublished?

#### Lab
* JS: using AJAX and JSON
* CSS: transitions, animations, shadows
* *In groups*: discuss final project ideas + play with APIs

#### Resources
* [Google Dataset Search](https://datasetsearch.research.google.com/)
* [CSV to JSON Converter](https://www.convertcsv.com/csv-to-json.htm) (to convert some of these datasets!)

#### Assignment
* [Final project](./projects/7-final) introduced (due by last class day)

<!-- ------------------------
----------- DAY 7
---------------------------->

### Day 7 (7/13)
#### Lecture
How do we build a site so it looks good on both a desktop computer and a mobile phone? And what directions can we go from here in JavaScript?

Note: the things we cover on this day are up to the class, based on the interest form you filled out by day 6.

#### Lab
* CSS: accessibility + mobile readiness
* JS: other libraries
* potentially: on-device debugging
* *In groups*: experiment with one of the libraries

#### Resources (TBD)
We will cover 1-2 of these, but all of them are provided for reference.

**Standalone Libraries**  
* ToneJS: audio in the browser
* three.js: display 3D models in the browser
* p5.js: procedural 2D/3D graphics
* leaflet: work with maps
* D3.js: charts, graphs, histograms, etc

**Built-In Javascript APIs**  
* Web Storage API: access localStorage, which behaves similarly to cookies
* History API: programmatically refresh/back/forward a single tab
* Geolocation API: get user's physical position
* HTML Drag and Drop API: like it says on the can!

#### Assignment
* Keep working on the final!

<!-- ------------------------
----------- DAY 8
---------------------------->

### Day 8 (7/15)
Final project day!

#### First Half: Lab
No lab: the first half of class is project presentations within your group. Everyone is expected to give critique or present ideas.

#### Second Half
With the remaining time, we'll briefly discuss each group's experience with the final, and then either continue with exploring various JS libraries, or we'll talk about next steps with front-end development.

#### Assignment
* Your final project is due by tomorrow, 7/16, at 11:59pm. Grades are due on the 18th, so there isn't a lot of wiggle room!