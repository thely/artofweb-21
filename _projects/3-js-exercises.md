## Javascript Exercises

Make a site that answers/solves the following. Both sections have have some combination of HTML and Javascript.

Put an `<hr />` between your sections so I don't get confused!

### To Do

#### Extending the bank account

These will all be based off of the bank account example we did in class. Make sure yours correctly adds an amount to the bank account variable.

1. Make a second button that decreases the amount by $10 per click (in addition to the existing button that makes it increase by $10 per click).

2. Set two different saving goals, saved as variables (like `buyACar`, or `payRent`), that are different numbers (`payRent = 700`, `fancyDinner = 100`). When you add or lose money, log a message to the console if `myBankAccount` goes above one of those thresholds. Log different messages based on which goal you've reached.

3. Make a third button, that clears the bank account back to zero when clicked.

4. Make a fourth button, called Next Month. Make some `interestRate` value, set to something like 0.05. Every time you press Next Month, increase the amount in the account by that interest rate.

#### Multiple meanings

1. Write a paragraph's worth of text, and put at least four `<span>`s in it. Whenever you click on one of the spans, change text in another `<span>` on the paragrpah. Remember that a span can wrap any amount of text, or even break in the middle of the word.

2. In CSS, try setting `cursor: pointer;` on `span:hover`. Check online to see what other properties `cursor` can have, and use a few others.

3. Do something extra when the viewer has exhausted all of the potential text changes you have. You may need to set one boolean variable (like `isOneClicked`, `isTwoClicked`, `isThreeClicked`, etc.) for each change, which you set to true/false after it's been performed.

A hint on #3: you can make more complicated conditions on an `if` statement by writing `&&` between statements. So `if (myBankAccount >= 50 && myBankAccount < 200)` will only run if the value of `myBankAccount` is both greater than or equal to 50 *and* less than 200. You can keep adding on extra conditions as long as you string them together with `&&`.

### Submission

Upload these to Neocities as you've done with previous projects. **Double check that Neocities is actually loading your scripts.js properly** by testing out your buttons. When in doubt, make sure the link to your script is something along the lines of `/project3/scripts.js`.