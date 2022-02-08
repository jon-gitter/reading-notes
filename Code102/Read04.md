[Table of Contents](https://jon-gitter.github.io/reading-notes/)

Wireframe - schematic of what you'd like your site to look like. Can be done digitially or with pen and paper. Good way to do a macro planning for what your site will look like.

Wireframe resources = Invision & Miro

<p> is the opening tag, content goes between, </p> is the closing tag. Entire length is called the element.

nesting - putting elements inside other elements, ensure you close your elements in correct order. 

empty elements - do not need a </>, ex = <img src="" alt="">

Anatomy of an HTML document:
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image">
  </body>
</html>


<!DOCTYPE html> — doctype. It is a required preamble. In the mists of time, when HTML was young (around 1991/92), doctypes were meant to act as links to a set of rules that the HTML page had to follow to be considered good HTML, which could mean automatic error checking and other useful things. However these days, they don't do much and are basically just needed to make sure your document behaves correctly. That's all you need to know for now.
<html></html> — the <html> element. This element wraps all the content on the entire page and is sometimes known as the root element.
<head></head> — the <head> element. This element acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers. This includes things like keywords and a page description that you want to appear in search results, CSS to style our content, character set declarations, and more.
<meta charset="utf-8"> — This element sets the character set your document should use to UTF-8 which includes most characters from the vast majority of written languages. Essentially, it can now handle any textual content you might put on it. There is no reason not to set this and it can help avoid some problems later on.
<title></title> — the <title> element. This sets the title of your page, which is the title that appears in the browser tab the page is loaded in. It is also used to describe the page when you bookmark/favorite it.
<body></body> — the <body> element. This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else.


Write comments in HTML with: <!--Comments go here -->

Headings - allow you to specify that certain parts of your content are headings — or subheadings. In the same way that a book has the main title, chapter titles, and subtitles, an HTML document can too. HTML contains 6 heading levels, <h1>–<h6>, although you'll commonly only use 3 to 4 at most

Paragraphs - <p> elements are for containing paragraphs of text; you'll use these frequently when marking up regular text content

Lists - Marking up lists always consists of at least 2 elements. The most common list types are ordered and unordered lists:
Unordered lists are for lists where the order of the items doesn't matter, such as a shopping list. These are wrapped in a <ul> element.
Ordered lists are for lists where the order of the items does matter, such as a recipe. These are wrapped in an <ol> element.
Ex: <ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
    </ul>

Links - <a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a> 


Semantics - refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)
Ex: the <h1> element because it gives the text it wraps around the role of a top level heading on your page.

Other sematinc elements: <article> <aside> <details> <figcaption> <figure> <footer> <header> <main> <mark> <nav> <section> <summary> <time>

[Table of Contents](https://jon-gitter.github.io/reading-notes/)