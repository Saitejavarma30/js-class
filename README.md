# Quick Learning

Some basic JavaScript along with HTML and CSS. Usage of APIs using async and await functions
Also how to use basic promises.

## Some basic HTML practices

HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.

![alt text](image.png)

### Elements

The main parts of our element are as follows:

- The opening tag: This consists of the name of the element (in this case, p), wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect — in this case where the paragraph begins.
- The closing tag: This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends — in this case where the paragraph ends. Failing to add a closing tag is one of the standard beginner errors and can lead to strange results.
- The content: This is the content of the element, which in this case, is just text.
- The element: The opening tag, the closing tag, and the content together comprise the element.

### Void Elements

Some elements have no content and are called void elements. A void element is an element in HTML that cannot have any child nodes (i.e., nested elements or text nodes). Void elements only have a start tag; end tags must not be specified for void elements.

```
<img src="images/firefox-icon.png" alt="My test image" />
```

We can link the HTML with css using a link tag and is usaually done in the Head element in the HTML file. There can be multiple css files linked to a single HTMl file. The file that is present later overwrites the properties and styles of the previous file if the same element has overlapping styled properties(More about this in the next section). The script tags can be linked at the end of the body tag.

Most of the HTML elements are block elements. Which indicates that these elements occupy the entire width of the parent element, if not specified. A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).Examples of block elements are div, h1, h2, etc. However there are other elements which occupy only the required area and are called inline elements. An inline element does not start on a new line. An inline element only takes up as much width as necessary. Examples are span, a tag, etc.

## Some basic CSS

CSS is what you use to selectively style HTML elements. For example, this CSS selects paragraph text, setting the color to red:

CSS

```
p {
color: red;
}
```

To make the code work, we still need to apply this CSS (above) to your HTML document. Otherwise, the styling won't change the appearance of the HTML.
To select a ecertain element by the name of the element we can follow the syntax as above. To select a certain element by the class or id we can use .class-name and #id-name.

padding, the space around the content. In the example below.
border, the solid line that is just outside the padding.
margin, the space around the outside of the border.

### Some basic examples:

- width: 600px => This forces the body to always be 600 pixels wide.
- height: 600px => This forces the body to always be 600 pixels in height.
- margin: 0 auto => When you set two values on a property like margin or padding, the first value affects the element's top and bottom side (setting it to 0 in this case); the second value affects the left and right side. (Here, auto is a special value that divides the available horizontal space evenly between left and right). You can also use one, two, three, or four values(refer some documents available on web).
- background-color: #FF9500 => This sets the element's background color.
- padding: 0 20px 20px 20px => This sets four values for padding. The goal is to put some space around the content. In this example, there is no padding on the top of the body, and 20 pixels on the right, bottom and left. The values set top, right, bottom, left, in that order. As with margin, you can use one, two, three, or four values.
- border: 5px solid black => This sets values for the width, style and color of the border. In this case, it's a five-pixel–wide, solid black border, on all sides of the body.
- text-shadow: 3px 3px 1px black => The first pixel value sets the horizontal offset of the shadow from the text: how far it moves across. The second pixel value sets the vertical offset of the shadow from the text: how far it moves down. The third pixel value sets the blur radius of the shadow. A larger value produces a more fuzzy-looking shadow. The fourth value sets the base color of the shadow.

## Some basic Javascript

JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich.

JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:

Browser Application Programming Interfaces (APIs) built into web browsers, providing functionality such as dynamically creating HTML and setting CSS styles; collecting and manipulating a video stream from a user's webcam, or generating 3D graphics and audio samples.
Third-party APIs that allow developers to incorporate functionality in sites from other content providers, such as Twitter or Facebook.
Third-party frameworks and libraries that you can apply to HTML to accelerate the work of building sites and applications.
