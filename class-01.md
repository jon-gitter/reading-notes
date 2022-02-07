## Read 01 Notes


### Duckett HTML & CSS Book
- _Introduction (pp.2-11)_
    - SEO: search engine optimization
    - important to remember that not all users have the latest browser updates, might not be able to use all features of your website
    - web servers host the website, constantly connected to the internet, send web page data to those that request it, some large companies host their own servers while others use a web hosing company to host sites.
    - screen readers: programs that read out the contents of a computer screen to a user with visual or other impairments
    - how the web works: browser first tries to connect to a Domain Name System (DNS) server. DNS servers tell your browser how to find the website.  


- _HTML Chapter 1: Structure (pp.12-39)_
    - HTML elements: angled elements aka brackets (<>), made up of an opening and closing tag and any content that lies between them. Each HTML element tells the borser something about the information that sits between its opening and closing tags. HTML uses elements to descibe the structure of pages.
    - HTML attributes: provide additional information about the contents of an element, they appear on teh opening tag of the element and aremade up of two parts: a **name** and **value** separated by an equals sign. 
        - Ex =  `<p lang="en-us">Paragraph in English</p>` 
    - `<body>` element: everything inside is shown inside the main browser window
    - `<head>` element: contains everything about the page rather than information that is shown within the mian part of the browser window. Usually find `<title>` element inside `<head>` element. 
    - `<title>` element: either shown in the top of the broser, above where you usually type in the URL (the tab) of the page you want to visit. Found on the title bar of the web page. 
    - when working on a website will rarely see the HTML elments (body, title, etc) instead you will use a content managment system (CMS) that helps expedite the title, body, etc in a different GUI. Easy to use b/c it provides a single template. Will usually also include a text editor.  
    - HTML pages are text documents

- _HTML Chapter 8: Extra Markup (p.176-199)_
    - good practice to declare which version of HTML the page is using. Use `<!DOCTYPE html>` for HTML5 (latest HTML).
    - use `<!-- text goes here -->` to comment out code in HTML
    - id attribute: every HTML element can carry the id attribute. used to uniquely identify that element from other elements on the page. Its value should start with a letter or an underscore (not a number or any other character). Important that no two elements on the same page have the same value for their id attribues (otherwise it is no longer unique). Allows you to use the unique id in CSS giving that element the ability to style it differently from any other instance of the same elmeent on the page. 
        - Ex: `<p id="pullquote">` 
    - class attribute: every HTML element can carry the class attribute. used to identify several elements as being different form the other elements on the page. its value should descibe the class it belongs to
        - Ex: `<p class="important"`>
    - block elements: some elements will always appear to start on a new line in the browser window known as block elements. 
        - Ex: `<h1>`, `<p>`, `<ul>`, `<li>`
    - inline elements: will always appear to continue on the same line as their neighbouring elements. 
        - Ex: `<a>`, `<b>`, `<em>`, `<img>`
    - `<div>` element: allows you to group a set of elements together in one block level box. you might create a `<div>` element to contain all of the elements for teh header ofyour site or you might create a `<div>` element to contain comments from visitors. In a browser the contents of the `<div>` element will start on a new line, but other than this it will make no difference to the presentation of the page. using id or class attributes to `<div>` means you can create CSS style rules to indicate how much space the `<div>` element should occupy on teh screen and change the appearance of all the elements contained within it. easier to follow code to hold sections on a page
    - `<span>` element: acts like an inline equivalent of the `<div>` element. used to either contain a seciton of text where there is no other suitable lement to differentiate it from its surrounding text or contain a number of inline elements. common reason to use `<span>` elements is so they can control the appearance of teh content of these elements using CSS. Usully used with class or id attributes
    - `<iframe>` element: similar to little window cut into your page and in that window you can see another page, short for inline frame. common use is to put a google map into the page. the content of the `<iframe>` can be any html page (on same server or across the web). attribues for `<iframe>` are src (source), height (specific height in pixels), width (specific width in pixels). scrolling (not supported in HTML5, indicates whether the iframe should have scrollbars or not, can be set to yes, no, or auto), frameborder (not supported in HTML5, indicates whether the frame should have a border or not, value of 0=no border 1=shown border), seamless (applied where scrollbars are not desired, doesn't need a value but can be given a value of seamless, older browsers don't support teh seamless attribute)
        - Ex: `<iframe`
                 width="450"
                 height="350"
                 src="https://www.">`
                `</iframe>` 
    - `<meta>` element: lives inside the `<head>` element and contains information about that web page. not visible to users but tells search engines about your page, who created it, and whether or not it's time sensitive (can be set to expire). empty element so it does not have a closing tag, uses attributes to carry the information. name and content attribues are most popular and tend to be used together, these attributes specify properties of the entire page. the value of the name attribute is the propery you are setting, adn the value of the content attribute is teh value that you want to give to this property. The value of the name attribute can be anything you want it to be, there are some defined values that are commonly used: description (contains description of page, commonly used by search engines to understand what the page is about), keywords (contains a list of comma separated words that a user might search on to find the page), robots (inidcates whether a search engine should add this page to their search results or not, a value of noindex can be used if this page should not be added, a value of nofollow can be used if seach engines should add this page int heir results but not any pages that it links to). also uses http-equiv and content attribute in pairs some are: author (tells whot the website author is), pragma (prevents the browser from caching the page, aka storing it locally to save time downloadig it on subsequent visits), expires (used to indicate when the page should expire and no longer be cached, date format is specific)
        - `<html><head>
		<title>Information About Your Pages</title>
		<meta name="description" content="An Essay on Installation Art">
		`<meta name="keywords" content="installation, art, opinion">`
		`<meta name="robots" content="nofollow">`
		`<meta http-equiv="author" content="Jon Duckett">`
		`<meta http-equiv="pragma" content="no-cache">`
		`<meta http-equiv="expires" content="Fri, 04 Apr 2014 23:59:59 GMT">`
	         `</head>`
	        `<body>`
		     `<p>Please view the source of this page to examine the meta data.</p>`
        </body></html>`

- _HTML Chapter 17: HTML5 Layout (pp.428-451)_

- _HTML Chapter 18: Process & Design (pp.452-475)_



### Duckett JS Book
- _Introduction_

- _JS Chapter 1: The ABC of Programming (pp.11-52)_