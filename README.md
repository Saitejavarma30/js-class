# Quick Learning

Some basic JavaScript along with HTML and CSS.
Usage of APIs using async and await functions
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

### Synchronos programming

Consider the following code:

JS

```
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

This code:

Declares a string called name.
Declares another string called greeting, which uses name.
Outputs the greeting to the JavaScript console.
We should note here that the browser effectively steps through the program one line at a time, in the order we wrote it. At each point, the browser waits for the line to finish its work before going on to the next line. It has to do this because each line depends on the work done in the preceding lines.

That makes this a synchronous program. It would still be synchronous even if we called a separate function, like this:

JS

```
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Here, makeGreeting() is a synchronous function because the caller has to wait for the function to finish its work and return a value before the caller can continue.

### Asynchronus programming

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and therefore, are asynchronous. For example:

Making HTTP requests using fetch()

So even though you may not have to implement your own asynchronous functions very often, you are very likely to need to use them correctly.

Following are the ways in which we can implement async code in javascript

### Callbacks

A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time.

However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions. For example, consider the following:

JS

```
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```

Here we have a single operation that's split into three steps, where each step depends on the last step. In our example, the first step adds 1 to the input, the second adds 2, and the third adds 3. Starting with an input of 0, the end result is 6 (0 + 1 + 2 + 3). As a synchronous program, this is very straightforward. But what if we implemented the steps using callbacks?

JS

```
function doStep1(init, callback) {
const result = init + 1;
callback(result);
}

function doStep2(init, callback) {
const result = init + 2;
callback(result);
}

function doStep3(init, callback) {
const result = init + 3;
callback(result);
}

function doOperation() {
    doStep1(0, (result1) => {
        doStep2(result1, (result2) => {
            doStep3(result2, (result3) => {
                console.log(`result: ${result3}`);
            });
        });
    });
}

doOperation();
```

Because we have to call callbacks inside callbacks, we get a deeply nested doOperation() function, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).

When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors at each level of the "pyramid", instead of having error handling only once at the top level.

### Promises

Promises are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

Promises come with some quite specific terminology that it's worth getting clear about.

First, a promise can be in one of three states:

- pending: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.
- fulfilled: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
- rejected: the asynchronous function has failed. When a promise is rejected, its catch() handler is called.
  Note that what "succeeded" or "failed" means here is up to the API in question. For example, fetch() rejects the returned promise if (among other reasons) a network error prevented the request being sent, but fulfills the promise if the server sent a response

```
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
```

Here we are:

- calling the fetch() API, and assigning the return value to the fetchPromise variable
- immediately after, logging the fetchPromise variable. This should output something like: Promise { - state: "pending" }, telling us that we have a Promise object, and it has a state whose value is "pending". The "pending" state means that the fetch operation is still going on.
- passing a handler function into the Promise's then() method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a Response object, which contains the server's response.
- logging a message that we have started the request.

The complete output should be something like:

```
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Note that Started request… is logged before we receive the response. Unlike a synchronous function, fetch() returns while the request is still going on, enabling our program to stay responsive. The response shows the 200 (OK) status code, meaning that our request succeeded.

#### Chaining Promises

With the fetch() API, once you get a Response object, you need to call another function to get the response data. In this case, we want to get the response data as JSON, so we would call the json() method of the Response object. It turns out that json() is also asynchronous. So this is a case where we have to call two successive asynchronous functions

```
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
```

In this example, as before, we add a then() handler to the promise returned by fetch(). But this time, our handler calls response.json(), and then passes a new then() handler into the promise returned by response.json().

This should log "baked beans" (the name of the first product listed in "products.json").

But we know that by calling a callback inside another callback, we got successively more nested levels of code? And we said that this "callback hell" made our code hard to understand? Isn't this just the same, only with then() calls?

It is, of course. But the elegant feature of promises is that then() itself returns a promise, which will be completed with the result of the function passed to it. This means that we can (and certainly should) rewrite the above code like this:

```
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
```

Instead of calling the second then() inside the handler for the first then(), we can return the promise returned by json(), and call the second then() on that return value. This is called promise chaining and means we can avoid ever-increasing levels of indentation when we need to make consecutive asynchronous function calls.

This brings us to the last piece: how do we handle errors? The fetch() API can throw an error for many reasons (for example, because there was no network connectivity or the URL was malformed in some way) and we are throwing an error ourselves if the server returned an error.

To support error handling, Promise objects provide a catch() method. This is a lot like then(): you call it and pass in a handler function. However, while the handler passed to then() is called when the asynchronous operation succeeds, the handler passed to catch() is called when the asynchronous operation fails.

If you add catch() to the end of a promise chain, then it will be called when any of the asynchronous function calls fail. So you can implement an operation as several consecutive asynchronous function calls, and have a single place to handle all errors.

```
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
```

you should see the error logged by our catch() handler.

#### For more examples refer to

[Promises-example1](javascript/weater-api)
[Promises-example2](javascript/project-1)

### Async/Await

An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

The async keyword gives you a simpler way to work with asynchronous promise-based code. Adding async at the start of a function makes it an async function:

JS

```
async function myFunction() {
  // This is an async function
}
```

Inside an async function, you can use the await keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.

This enables you to write code that uses asynchronous functions but looks like synchronous code. For example, we could use it to rewrite our fetch example:

JS

```
async function fetchProducts() {
    try {
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error

        const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }

        // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the parsed JSON object or throw an error

        const data = await response.json();
        console.log(data[0].name);
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

fetchProducts();
```

Here, we are calling await fetch(), and instead of getting a Promise, our caller gets back a fully complete Response object, just as if fetch() were a synchronous function!

We can even use a try...catch block for error handling, exactly as we would if the code were synchronous.

Note though that async functions always return a promise, so you can't do something like:

JS

```
async function fetchProducts() {
    try {
        const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

const promise = fetchProducts();
console.log(promise[0].name);
```

"promise" is a Promise object, so this will not work
Instead, you'd need to do something like:

JS

```
async function fetchProducts() {
    try {
        const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
```

You'll probably use async functions a lot where you might otherwise use promise chains, and they make working with promises much more intuitive.

Keep in mind that just like a promise chain, await forces asynchronous operations to be completed in series. This is necessary if the result of the next operation depends on the result of the last one, but if that's not the case then something like Promise.all() will be more performant.

To learn about how the async await function please refer to
[Async Await](javascript/weather-async)
