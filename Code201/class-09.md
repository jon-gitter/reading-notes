[Table of Contents](https://jon-gitter.github.io/reading-notes/)

## Read 09 Notes

### Duckett HTML & CSS Book
- _Chapter 7: Forms (pp.144-175)_
  - forms are printed documents that contain spaces for you to fill in information
  - can add text, make choices, submit forms
  - How forms work
    - user fills in form
    - info goes to server
    - server processes info with another programming language
    - server creates a new page to send to the browser based on the information received 
  - `<form>` - form controls live here
    - must have action attribuite
    - method get or post, get = values from the form are added to the end of the URL specified in action attribute, post = values are sent in what re known as HTTP headers
  - `<input>` - used to create several different form controls value of input determines what kind of input they will be creating
    - when type = "text" it creates a single line of text input
    - when type = "password" it creates a single line of text but blocked out
  - `<textarea>` is used to create multiline text input
  - type = "radio" is buttons that allow the user to pick one of a number of options
  - type = "checkbox" are checkboxes to let users pick multiple options
  - `<select>` - creates a drop down box
    - add multiple for multiple differet selections
  - type = "file" lets you upload a file
  - type = "submit" lets you send a form to the server
  - type = "image" can use an image as the submit button
  - `<button>` gives users more control over how their buttons appear
  - type="hidden" hides stuff
  - `<label>` each form control should utilize this element. 
  - `<fieldset>` - can group related form controls together inside this
  - type = "email" inputs email
  - type = "search" does search queries
  - 



- _Chapter 14: Lists Tables & Forms (pp.330-357)_
  - list-style-type: allows you to control the shape or style of a bullet point
  - list-style-image: allows you to specify an image as your bullet points
  - list-style-position: indicates whether the marker should appear on the inside or the outside of the box containing the main points
  - list-style: allows you to express the markers style, image and position properties in order
  - table styling on pages 337-338
  - empty-cells: allows you to specifiy if you want their borders shown
  - border-spacing: and border-collapse: allows you to reduce or increase spacing between cell borders
  - styling ideas: pages 341-347



### Duckett JS Book
- _Chapter 6: Events (pp.243-292)_
  - different event types page 246 and 247
  - events are either fired or raised
  - How events trigger code
    - select element node(s) you want the script to respond to 
    - indicate which event on teh selected node will trigger the response
    - state the code you want to run when the event occurs
  - 3 ways to bind an event to an element
    - html event handlers (DO NOT USE)
    - traditional dom event handlers
      - `element.oneevent = functionName;
    - dom level 2 event listeners
      - `element.addEventListener('event', functionName [, Boolean]);
  - when an event occurs the event object tells you information about the event, adn the element it happened upon
  
  


[Table of Contents](https://jon-gitter.github.io/reading-notes/)