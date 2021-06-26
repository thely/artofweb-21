## How do I embed something from YouTube, Vimeo, SoundCloud, Twitter, etc?

Every platform has their own way of doing this. Typically, every network will have some kind of Share button that will lead you to an embed code. Here's YouTube, where Share is next to the likes/dislikes:

![YouTube image of finding the share button](/artofweb-21/assets/images/yt-1.png)

Inside "Share," there's typically a button called "Embed."

![Finding the embed button inside share](/artofweb-21/assets/images/yt-2.png)

Clicking "Embed" should show you some messy-looking HTML code inside an `<iframe>` tag.

![Finding the actual HTML embed code](/artofweb-21/assets/images/yt-3.png)

Whatever that code is, copy it and paste it into your HTML document. This is the one I got for the specific video embedded below:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/hqs4lTPy4YE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

And here's what it looks like, embedded:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hqs4lTPy4YE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>