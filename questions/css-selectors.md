## How do selectors work?

Pretend we have the following HTML for a news site. The `#news-block` div is a container for a list of individual articles, each of which is in a `.single-entry` div. (Remember: #ids are for elements that should only occur once, which usually means large page sections, while .classes can occur as many times as you want. We'd probably have a ton of `.single-entry` blocks if this was a real news site.)

```html
<div id="news-block">
  <div class="single-entry">
    <h1>The news this week: <em>whoa</em></h1>
    <p>Here are all the things that happened in my life this week. I <em>wish</em> I could tell you everything, but you'll have to <a href="https://google.com">ask Google</a> what <em>really happened.</em></p>
  </div>
  <div class="single-entry">... more of the same from earlier ...</div>
</div>
```

Here's how we can change specific things about it:

```css
/* change the default font of the whole page through the body tag. easiest to do this here. */
body {
  font-family: "Comic Sans MS", sans-serif;
}

/* make all the paragraphs double-spaced */
p {
  line-height: 2;
}

/* give both the h1 and p tags a bottom margin of 20px */
p, h1 {
  margin-bottom: 20px;
}

/* make all the em tags inside p tags colored red */
p em {
  color: red;
}

/* give each entry a decent margin away from other entry blocks */
.single-entry {
  margin: 10px;
}

/* put a background color on this whole section, and give it some padding so it looks a little better */
#news-block {
  background-color: #eeeeee; /* a pretty light grey */
  padding: 10px;
}

/* there isn't really a reason to do this, but you could do this too. If you had p tags elsewhere on the page that weren't inside a <div class="single-entry">, they wouldn't have their font size increased by this rule. */
.single-entry p {
  font-size: 20px;
}

```

