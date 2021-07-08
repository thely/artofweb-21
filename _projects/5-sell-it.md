## Sell Me Something

Let's make a larger site with multiple sections, based off of current homepage design trends for popular brands. Make me want to buy something from a brand of your own invention. You'll have a header with some navigation, a large splash image with some text to entice you to join/buy/subscribe, and then some more distributed content below.

### Brand

Every product has its own design language, which incorporates colors, fonts, and images with the hope of getting you to buy something. First, make your brand. Then, determine what fantasy/ideal you're trying to sell. Some ideas:

* Meal delivery service
* Clothing brand
* Browser productivity app
* Interest-specific social media site
* Artist/musician
* Power tools
* Video game

### Requirements

#### Structure

You'll need to put together three parts: a navigation bar, a large splash image below that, and some kind of grid or strip of product elements below that.

* The **navigation** should have a logo, and at least three navigation elements. They don't have to lead anywhere. This shouldn't be very tall.
* The **splash image** should be a large image (likely a background image) filling up one side, with large text on the other. The text should not be in the image itself; it should be an `<h1>` or a `<p>` on top of it. You can have a button in here too, which doesn't need to go anywhere (or do anything!) unless you want it to.
* The **grid or strip** of product elements should just be a grid of evenly spaced things below that large splash image. This could be a list of products for a brand, a list of benefits to the product in question, or a list of posts or events.

#### Technical/Aesthetic

To space everything well, you'll use `display: grid;` in some form for each of these.

Make use of whitespace to make the site look as good as you can make it.

Use non-default fonts, and use Google Fonts if you can. No Times New Roman!

Background images shouldn't repeat. Use `contain` or `cover` to make the image fill its parent.

#### Images

To really sell an idea, you need images. This project will likely be a bit image-heavy, but you can leverage anything in your power to get those images. This includes putting something together in [Canva](https://www.canva.com/), getting stock photos from [Unsplash](https://unsplash.com/), or even rolling the dice with a Google Image search.

The only limitation is that, aside from the logo, **you cannot have an image with text on top of it**. If you need descriptive text, it needs to go in a tag!