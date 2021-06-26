## How do I change the width/height of an element, or change its spacing?

To do this, we're going to talk about the "box model," which we briefly talked about in class. By "box model," I mean "the series of concentric rectangles that encompass an element."

![box model image](/artofweb-21/assets/images/box-model.png)

#### Innermost: width/height

By default, an element's width will fill the width of its parent, with the height defined by the content inside it. Here are some examples of the sizing if we make no changes.

<p style="background: #9bcefb">This is an element without a lot of content.</p>

<p style="background: #9bcefb">This is an element with a lot of content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur nibh risus, nec sodales urna ullamcorper tempus. In porttitor sapien at massa ultricies, sed sollicitudin dolor dapibus. Vivamus eget turpis eu augue lobortis porta. Nunc maximus viverra nunc, nec rutrum justo auctor vel. Sed auctor dui a eleifend finibus. In dictum lacinia elit, in suscipit felis. Integer in risus vitae est congue tempor. Sed placerat hendrerit turpis eu viverra. Integer ullamcorper velit id purus consequat pharetra. Aliquam semper lorem efficitur, pharetra enim id, iaculis arcu. Pellentesque posuere venenatis magna non porta. Vivamus a justo fermentum, tempus eros vel, tempus nisi. Nam eu mauris turpis.</p>

*Hint*: These elements aren't stretching all the way to the edge of your browser because its parent element, the `<div>` containing this page content, is about 60% of the actual page width.

Let's change some things. Let's try a couple iterations with different width rules.

<p style="background: #9bcefb; width: 300px;">1. I'm set to <code>width: 300px;</code>, which is a fixed value.</p>
<p style="background: #9bcefb; width: 50%;">2. I'm set to <code>width: 50%;</code>, which is 50% of the width of my parent.</p>

Try making your browser window wider/thinner, and see what happens to the two above examples.

#### From there: padding

Padding is the space between an element and its border. We can use padding in a few different ways. Inspect these elements in your browser to see which style rules have been applied.

<p style="background: #9bcefb; padding: 10px;">I've got 10px padding on all sides.</p>

<p style="background: #9bcefb; padding: 30px 10px;">I've got 30px padding on the top and bottom, but 10px on the left and right.</p>

<p style="background: #9bcefb; padding-left: 30px;">I have 30px of padding on the left side only.</p>

This impacts how much of a background image/color is visible, and how much breathing room the element seems to have.

<p style="background: linear-gradient(146deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); color: white;">My background is loud, but my lack of padding makes it look sloppy.</p>

<p style="background: linear-gradient(146deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%); color: white; padding: 20px; border-radius: 10px; font-size: 22px;">Wow – what an improvement!</p>

#### From there: borders

After the padding, comes the borders. You can control several things about them. Here are some samples:

<p style="background: #9bcefb; padding: 10px; border: 1px dashed black;">I've got a 1px dashed black border on all sides.</p>

<p style="background: #9bcefb; padding: 10px; border: 1px dashed black; border-left: 5px solid blue;">I've got a 1px dashed black border on all sides, except my left border, which is 5px solid blue.</p>

#### From there: margins
Margins control how an element is spaced inside its parent. We can get into some tricky stuff here, including right-aligning a whole element, or centering a whole element.

<div>
<p style="background: #9bcefb; padding: 10px; border: 1px dashed black; margin: 40px;">I've got a 40px margin on all sides.</p>

<p style="background: #9bcefb; padding: 10px; border: 1px dashed black; margin-left: 100px;">I've got 100px left margin.</p>

<p style="background: #9bcefb; padding: 10px; border: 1px dashed black; margin-right: 0; margin-left: auto; width: 50%">My width is set to 50% of my parent, my right margin is set to 0, and my left margin is set to "auto."</p>

<p style="background: #9bcefb; padding: 10px; border: 1px dashed black; margin: 0 auto; width: 50%">My width is set to 50% of my parent, but both my left and right margins are set to "auto."</p>
</div>

#### One use of this: floats

Something you see a lot is text wrapping around an image. We can do that with the CSS `float` property. It can be set to `float: left` or `float: right`.

If we set some padding on the image, we can put a nice border around it. And then to keep it from smashing up against the paragraph, we can give the image a 10px margin on its right and bottom sides.

---

<div>
  <img src="/artofweb-21/examples/day1/screenshot.png" style="float: left; width: 140px;" />
  <p><strong>This example has no styles applied, apart from the float.</strong> This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect.</p>
</div>

---

<div style="margin-top: 2em;">
  <img src="/artofweb-21/examples/day1/screenshot.png" style="float: left; width: 140px; margin-right: 1em; margin-bottom: 0.5em; padding: 10px; border: 1px double grey;" />
  <p><strong>This example has some padding and a border around the image, and a right margin to separate the image from the paragraph.</strong> This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect. This text is aligned around the image. It's repeating so you can actually see the effect.</p>
</div>