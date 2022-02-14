[Table of Contents](https://jon-gitter.github.io/reading-notes/)

## Read 06 Notes

### Online Readings
- _Understanding the problem domain is the hardest part of programming https://simpleprogrammer.com/understanding-the-problem-domain-is-the-hardest-part-of-programming_
  - learning a new technology
  - naming things
  - testing your code
  - debugging
  - fixing bugs
  - making software maintainable 


- _What’s the difference between primitive values and object references in JavaScript? https://betterprogramming.pub/intermediate-javascript-whats-the-difference-between-primitive-values-and-object-references-e863d70677b_
  - all data types in JS are in two catagories: primitive values and object references
  - 8 data types in JS
    - boolean
    - null
    - undefined
    - number
    - BigInt
    - String
    - Symbol
    - Objects
  - arrays, functions, and dates are objects
  - 
  
### Duckett JS Book

- _Chapter 3: Object Literals (pp.100-105)_
  - objects: group together a set of variables and functions to createa  model of something you would recognize from the real world. In an object, variables and functions take on new names.
  - Property: variables that are part of objects, they tell us about the object
  - methods: when a function is part of an object
  - key: cannot have two in the same object with same name, it is the name and and value in an object
  - creating and object:
    - ``` 
    var hotel = {
      name: 'Quay',
      rooms: 40,
      booked: 25,
      checkAvailability: function(){
        return this.room - this.booked:
      }
    }
    ```
  - accessing an object and dot notation:
    ```
    var hotelName = hotel.name;
    var roomsFree = hotel.checkAvailability();
    ```
  - 


- _Chapter 5: Document Object Model (pp.183-242)_
  - Document Object Model (DOM): specifies how browswers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window
  - DOM tree: the model of the page as teh browswer loads the web page
  - access the elements in a DOM tree with specific commands pg 188-189
  - NodeList: collection of nodes
  - can use class or id to return single or multiple elements
  - item() method: will return an individual node from the NodeList
  - executing code when there are not elements to work with wastes resources
  



[Table of Contents](https://jon-gitter.github.io/reading-notes/)