# js-class

Some basic JavaScript along with HTML and CSS. Usage of APIs using async and await functions
Also how to use basic promises.

# Some basic HTML practices

We can link the HTML with css using a link tag and is usaually done in the Head element in the HTML file. There can be multiple css files linked to a single HTMl file. The file that is present later overwrites the properties and styles of the previous file if the same element has overlapping styled properties(More about this in the next section). The script tags can be linked at the end of the body tag.

Most of the HTML elements are block elements. Which indicates that these elements occupy the entire width of the parent element, if not specified. A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).Examples of block elements are div, h1, h2, etc. However there are other elements which occupy only the required area and are called inline elements. An inline element does not start on a new line. An inline element only takes up as much width as necessary. Examples are span, a tag, etc.

# Some basic CSS

CSS is what you use to selectively style HTML elements. For example, this CSS selects paragraph text, setting the color to red:

CSS
p {
color: red;
}

To make the code work, we still need to apply this CSS (above) to your HTML document. Otherwise, the styling won't change the appearance of the HTML.
To select a ecertain element by the name of the element we can follow the syntax as above. To select a certain element by the class or id we can use .class-name and #id-name.

padding, the space around the content. In the example below.
border, the solid line that is just outside the padding.
margin, the space around the outside of the border.

Some basic examples:

- width: 600px => This forces the body to always be 600 pixels wide.
- height: 600px => This forces the body to always be 600 pixels in height.
- margin: 0 auto => When you set two values on a property like margin or padding, the first value affects the element's top and bottom side (setting it to 0 in this case); the second value affects the left and right side. (Here, auto is a special value that divides the available horizontal space evenly between left and right). You can also use one, two, three, or four values(refer some documents available on web).
- background-color: #FF9500 => This sets the element's background color.
- padding: 0 20px 20px 20px => This sets four values for padding. The goal is to put some space around the content. In this example, there is no padding on the top of the body, and 20 pixels on the right, bottom and left. The values set top, right, bottom, left, in that order. As with margin, you can use one, two, three, or four values.
- border: 5px solid black => This sets values for the width, style and color of the border. In this case, it's a five-pixel–wide, solid black border, on all sides of the body.
- text-shadow: 3px 3px 1px black => The first pixel value sets the horizontal offset of the shadow from the text: how far it moves across. The second pixel value sets the vertical offset of the shadow from the text: how far it moves down. The third pixel value sets the blur radius of the shadow. A larger value produces a more fuzzy-looking shadow. The fourth value sets the base color of the shadow.
