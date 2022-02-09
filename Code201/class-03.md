[Table of Contents](https://jon-gitter.github.io/reading-notes/)

## Read 01 Notes

### Duckett HTML & CSS Book
- _Chapter 3: Lists (pp.62-73)_
  - `<ol>`: ordrered lists, numbers, put `<li>` element for each number 
  - `<ul>`: unordered list, type you put the `<li>` element for each bullet
  - `<dl>`: definition list, consists of terms and their definitions, inside `<dl>` you use `<dt>` (contains the term being defined) and `<dd>` (definition)
  - you can nest additional lists inside of current list to create indentation effect with additional subbullets
  

- _Chapter 13: Boxes (pp.300-329)_
  - by default a box is sized just big enough to hold its contents
  - use width, height to adjust dimentions. can use pixels, percentages, or ems
  - min-width and max-width: specifies smallest and largest box that can be displayed when the browswer window is narrow (min) or wid (max)
  - min-height and max-height: specifies smallest and largest box that can be displayed when the browswer window is narrow (min) or wid (max)
  - overflow: tells the browser what to do if the content contained within a box is larger than the box itself, can have two values (hidden or scroll)
  - good example of box visualization on pg 307
  - border-width: sets width of border, can be thin, medium, thick or specified by pixel
  - border-style: can set to solid, groove, dashed, inset, outset, etc. pg 310
  - border-color: can specify border color, can be specific on which side of the border you want to color
  - shorthand border: width then style then color (must be in that order)
  - padding: allows for space between the content of an element and it's border
  - margin: controls the gap between boxes
  - centering content: you can set the left and rigth margin to auto and set the width of the box. You should also include text-align: center so text will work corretly in older browsers
  - display inline: causes a block-level element to act liek an inline element
  - display block: cause an inline element to act like a block-level element
  - display inline-block: causes a block-level element to flow like an inline element while retaining other features of a block level element
  - hidden visibility: allows you to hide certain content and leaves a speace where it would be
  - border images: takes an image and slices it into nine pieces. the property requires 3 pieces of information: 1) the url of image 2) where to slice the image 3) what to do with the straight edges (stretch, repeat, round)
  - box shadow: lets you add shadow to a box, can do horizontal offset, vertical offset, blur distance, spread of shadow. can use positive and negative values to expand shadow or contract
  - rounded corners: use border-radius. might need to add additional properties to make it work in other browsers
  - elliptical shapes: to create more complex shapes you specify different distances for the horizontal and vertical parts of the rounded corners good example on pg 322



### Duckett JS Book
- _Review Chapter 2: Basic JavaScript Instructions (pp.70-73)_
  - script: a seriers of instructions taht a computer can follow one-by-one, each step is known as a statement, statement end with a semicolon
  - use camelCase for naming variables
  - each statement should start on its own line, makes it easier to read
  - code block: statements surrounded by curly braces ({}), 
  - use // for one line comments, use /* for multiline comments and end it with */
  - variables: used to store temporary bits of information
  - variables need to be assigned a value
    - Ex: `let quantity = 3;` let = keyword, quantity = variable name, = = assignment operator, 3 = variable value
  - numeric data type: 3
  - string data type: 'Hello'
  - boolean data type: true
  - use \ before any type of quote mark that appreas within a string to escape the quotation characters
  - variables can store numeric data, string data, or boolean data
  - once a variable has been assigned it can be changed again without assigning it another variable name just the value
  - 6 rules for naming variables:
    1) name must begin with a letter, $, or underscore cannot begin with number
    2) name can contain letters, $, or underscore but cannot contain dash or period
    3) cannot use keywords or reserved words
    4) all variables are case sensitive, so score and Score are different variable names, this is bad practice however
    5) use a name that describes the kind of information that the variable stores
    6) use camelCase for multiple words in a variable name or underscore
  - arrays: special type of variable, stores list of values that are related to one another, values inside don't need to be the same data type can be strings with numbers and/or booleans. can also be used with () instead of [] but [] are preferred.
    - ex: `let food = ['bread', 'cheese', 'meat'];`
  - index: start at 0, assiged to each item in an array, can be called (ex: using the previous example above, `let itemThree = food[2];`, I would be calling the 'meat' string)
  - expressions: resluts in a single value can be either strictly assigned from a variable or two or more values to return a single value 
    - ex: `let area = 3 * 3` 
  - operators: relied on by expressions, can create a single value from one or more values
    - Ex: assignment operators, arithmetic operators (pg76), string operators (pg78), comparison operators (>), logical operators (&&)


- _Chapter 4: Decisions and Loops (pp.162-182)_
  - switch statement: starts with a variable called the switch value, each case indicates a possible value for this variable adn the code that should run if teh variable matches that value. like an off off switch, used to execute something if a certain condition is met. also has a default option if no switch is executed. the break statement (break;) stops the rest of the code from executing, faster than if...else b/c it doesn't have to run all the code
  - type coercion: javascript's ability to convert data types behind the scenes to complete an operation
    - ex: string could be converted to a number ('1' >  0) this statement would evaluate as true, also important to use and know the difference between `===` and `==`
    - becuase of this JS uses weak typing vs strong typing
  -    


[Table of Contents](https://jon-gitter.github.io/reading-notes/)