---
title: Sequential Metanarrative
---

## Sequential Metanarrative

Everywhere you go online, you leave a vast digital footprint behind. Whether that's the videos you watch, the things you buy, the pages you view, the people you talk to, or the things you make, there's a chronological log of that data, somewhere. 

Let's tell a (short) story out of styled chronological data. This doesn't need to be a "narrative," per se – you can give a rich description of a person entirely off of their metadata. However, we should see some indication that these things exist sequentially, i.e., *in time*.

To figure out what you're making, it helps to answer these questions.

1. Who or what is your subject? Are you trying to characterize a person, a product, or a company?
2. What kind of data are we looking at? Their messages? Reviews about a product? A list of blog post summaries? Someone's browsing history?
3. What kind of mood should this have?

### Requirements

#### Technical
* A div wrapper around your content, that has an `id` set, that represents whatever section of a webpage this would be. Is it a list of news articles? Great. `<div id="news">`. Is it a list of reviews? Also great. `<div id="reviews">`.
* Each individual item of data, which has several parts, each have their own div, that shares a class. So, for a single review, each review would be enclosed in a `<div class="review">`.

In the abstract, a list of news articles might look like this:

```html
<div id="news-list">
  <div class="news-item">...</div>
  <div class="news-item">...</div>
  <div class="news-item">...</div>
</div>
```

* *Something* that is floated left (or right?), which is pretty typical with this type of list. It's often an image, but it could be a name, a date, etc., but it has to be something.
* Good use padding/margins/borders, such that the individual parts of each data block look nice against each other.
* Each of those individual parts of a data block should have some CSS rules associated with it.
* Pick some characteristic fonts (at least two) and colors to give a sense of mood or intention to whatever this data is. Use [Google Fonts](https://fonts.google.com) to get some nicer, free ones!
* Make one piece of the data block do something when you hover over it.

#### Artistic

I should get the sense that you are describing whatever your subject is, and that there's a sense of change over time.

There should be enough individual parts of the data block that it's believable.

#### Submission

Make a new folder in Neocities for this project, and send me the link to that page.

In Collab, send me that link, plus a short reflection on what you figured out, what frustrated you, what questions you have, why you chose what you did, etc.

Also, since floats can be a little difficult, and they won't look good at every browser width, you should figure out what width they look best at. [Here's how you figure that out.](/artofweb-21/questions/width)