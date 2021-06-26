---
title: Geocities, Slightly Improved
---

## Geocities, Slightly Improved

Now that you've learned some CSS, let's experiment! Whoever your character is, they've learned something since 1996, and they're ready to explore all the fun new CSS rules available to them in 2004-2005.

Do all of your CSS styles inside a `<style>` tag. That means you should write your CSS out "internally," like this:

```html
<style>
  p {
    color: red;
  }
</style>
```

and *not* inline, like this:

```html
<p style="color: red;">paragraph</p>
```
### Requirements

#### Technical
These are the minimal requirements, but you can use as many as you want. "More" doesn't always mean "better." No need to copy-paste the full CSS from the "What can I do to text?" link for every single element you want to mess with.

* **Fonts**: Pick a different font other than the default. Use it everywhere. (Alternatively: use one font on your body text, and pick a different font for your headers!)
* **Size**: Apply different spacing (margins/padding) for your paragraphs and headers.
* **Borders**: Put borders around your `<img>` tags, give them some padding, and give them a max-width. Try floating some of them.
* **Selectors**: Inside your `<style>` tag, use at least four selectors. One of them needs to address a specific child, and one of them needs to address a class. Check out the "What selectors are there?" below if you need a refresher.

#### Artistic

To the best of your ability, with the tools you have, make it look "nice" (whatever that means to you).

There will be some things that you want that you still won't be able to do. Explore CSS a little, figure out what those limitations are, and we can talk about them.

### Submission

In Neocities, make a `project2` folder, and drop all your files for this project in there. Clicking on `index.html` in that folder will take you to that webpage. Copy that link, and submit it on Collab by Tuesday the 29th at 11:59pm.

### Resources

* [How do selectors work?](/artofweb-21/questions/css-selectors)
* [How do I change the width/height of a model, or change how it's spaced?](/artofweb-21/questions/box-model)
* [What can I do to text?](/artofweb-21/questions/text-styles)
* [How do I embed a source from YouTube/Vimeo/SoundCloud/Twitter/etc?](/artofweb-21/questions/embed)

### Examples + etc.

[Here are the slides from Thursday.](/artofweb-21/slides/day-2-css.html)

[Here's the site we put together with different styles.](/artofweb-21/examples/day2/index.html) Use "Inspect" to look at the code. Remember that the `<style>` tag is in the `<head>`, and that you can always look at the center column of the Inspector window to see what styles are applied on a given element.