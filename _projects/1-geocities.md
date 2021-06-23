---
title: Very Bad 1996 Personal Webpage
---

## Very Bad 1996 Personal Webpage

Before Squarespace and Wix, there were an array of free webhosts, none of which gave you any guidance as to good web design. Geocities, Lycos, and Angelfire were the most frequent, but there were (I’m sure) others that have since died. Their models were not especially economically sound, but we’ll make some really abysmal web pages in their honor.

### Concept

Invent a character who is ready to create their first webpage on something as rudimentary as Geocities. Who are they? What’s their name? What do they like? How old are they? Why are they making this site? Common themes: fan pages, sharing art, serial stories, tutorials, walkthroughs, small business sites. You can look at [One Terabyte of Kilobyte Age Photo Op](https://oneterabyteofkilobyteage.tumblr.com/) to look at a vast array of Geocities landing pages (many of them broken) for inspiration.

Make their landing page. This should include a mix of text (with different fonts, font colors/stylings), images (static and animated), likely some autoplaying background audio, anchor links to parts of the page, and a few embeds from other sites. Go to as many extremes as you want––these pages did not often look very good. Things to think about: do they share their face? Do they have an alias? Are they good at what they do? Do they use emoticons?

### Example pages

[To see the example HTML we wrote in class (plus a few extras), click here.](/artofweb-21/examples/day1/index.html)

Here are the example Geocities sites I showed in class:

* [Nefarios Darius's page on "energy"](https://web.archive.org/web/20091022123634/http://geocities.com/nefarious_darius/myenergy.html)
* [NETWINGS site on... basic computer usage?](https://web.archive.org/web/20091027063331/http://geocities.com/netwings.geo/)
* [Jeedsie's about page.](https://web.archive.org/web/20091027104650/http://geocities.com/jeedsie320/bio.html) Her home page is broken, but the rest of the pages seem like they still work. Her "pride" page is very sweet.

All these people were just people, making sites with the tools available to them at the time. The aesthetic wasn't great, because the tools for adding visual coherence didn't exist yet. There wasn't yet a good/easy way of adding drop shadows to elements on the page, or rounding the corners of page elements, or a reliable way of showing everyone the same font, so everything was stodgy and rectangular.

If you want to see what business websites looked at the time (like Apple, Disney, Amazon, Google), here are some good articles (with pictures): 
* [90's Web Designs You Won't Believe Existed](https://www.justinmind.com/blog/10-90s-websites-designs-you-wont-believe-existed/)
* [What Apple, Google, and Amazon’s websites looked like in 1999](https://mashable.com/article/90s-web-design/) 
* [How Google's homepage has changed over the last 20 years](https://uxdesign.cc/google-how-the-biggest-search-engines-homepage-has-changed-over-the-last-20-years-3b59db931a0d)

### Reminders + Recommendations

Some tips about making sure your HTML doesn't break:

* The system for how text is colored in VS Code – whether it nicely colors a tag, or gives a `"string in quotes"` a nice color, etc – is called **syntax highlighting**. If something seems miscolored in VS Code, it means your syntax is wrong somewhere, which means the page is broken.
* Remember that all tags need to have a start and an end, except for `<img>`. This means all the bits of the tag have to be there: the opening `<`, the tag name, and the closing `>`. Otherwise, the tag is broken.
* Make sure anything that needs a closing tag has its closing tag.
* If a tag has an attribute, it *has* to be in the format of `name="value"`, and those quotes have to surround the entire content of the value. `width="200px"` is what we want to see. `width=200 px` (without quotes) will break.


### Requirements

**Technical requirements:**

* structural tags: html, head, body, title
* content tags: at least three `p` tags, at least three `img` tags, at least one header tag (`h1`-`h6`), at least one `table`, at least two other tags (`iframe`? `audio`?)
* at least three things included from the Resources section
* at least two pages, linked to each other with `<a>`

**Artistic requirements:**

I don’t need to be fully convinced that this character is a real person (maybe it’s more interesting if they aren’t?), but there should be evidence that you put effort in. There's a lot you could say about the visual style of this era, but one thing that's certain is that it was [*maximal*](https://www.toptal.com/designers/ui/maximalist-design) (to the point of ugliness). You don't need all your content to be on-brand, you just need to have a *lot* of it.

### Submission

Make an account on Neocities to host all this live! You'll use this for all the rest of the assignments. Once you're on Neocities, do the following:

* Click on Edit Site (or potentially Start Site)
* Make a new folder inside of the file manager block you see, and call it `project1`.
* Dump all the files for this project (whichever .html files and images you're using) inside the `project1` folder.
* The link to your project should look something like `https://[username].neocities.com/project1`. Go to that link, and make sure it works.
* Submit that link in Collab.

### Resources

* [Dynamic Drive](http://dynamicdrive.com/): intrusive and generally unnecessary JS widgets
* [Blingee](http://blingee.com/): era-appropriate image/gif editor
* [Gifcities](https://gifcities.org/): treasure trove of old gifs