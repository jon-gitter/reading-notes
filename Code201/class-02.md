[Table of Contents](https://jon-gitter.github.io/reading-notes/)

## Read 01 Notes

### Duckett HTML & CSS Book
- _Chapter 2: Text (pp. 40-61)_
  - `<h1>`: heading tag there are six levels, h1 is used for main headings the rest are all subheadings 
  - `<p>`: paragraph
  - `<b>`: bold
  - `<i>`: italic
  - `<sup>`: superscript, little two above E=MCsquared
  - `<sub>`: subscript, littel two below COtwo
  - white space collapsing: used by devs to make code their code cleaner by adding spaces to lines of code.  Code isn't effected by spaces in HTML.
  - `<br />`: line breaks, can be used inside a paragraph
    - Ex: `<p> The Earth<br />is round.</p>`  This will have a break after earth and display the string on the next line.
  - `<hr />`: horizontal rule, does not require a closing tag similar to `<br/>`. creates a horizontal line across the page. 
  - visual editors: often resemble word processors, does the coding for you automatically. 
  - code views: shows the code created by the visual editors
  - semantic markup: text elements not intended to affect the structure of your web page, they add extra information to the pages. Useful for screen readers or seach engines b/c they add that additional information to the text you're using it for.
  - `<strong>`: semantic element, defaults to bold
  - `<em>`: semantic element, emphasis, subtle change to meaning of sentance, defaults to italics
  - `<blockquote>`: semantic element, used for longer quotes, indents text, `<p>` can be used inside this element.
  - `<q>`: semantic element, used for shorter quotes, sit within `<p>`, defaults to quote marks
  - `<abbr>`: semantic element, abbreviations or acronyms
  - `<cite>`: semantic element, when refrencing a source (book, film, etc.), has an opening and closing tag, put name of source not author between tags
  - `<dfn>`: semantic element, define, used to define the instance of something, has opening and closing tags.
  - `<address>`: semantic element, contains contact details for teh authos of the page, displayed in italics, can be used in conjunction with `<p>` element
    - Ex: 
      ```
      <address>
        <p><a href="mailto:example@example.com">
          example@example.com</a></p>
        <p>123 Example Street, Example.</p>
      </address>
      ```
  - `<ins>`: semantic element, shows content inserted into the document, displayed as underlined text
  - `<del>`: semantic element, shows text that has been deleted from document, displayed as strikethrough
  - `<s>`: semantic element, indicates something that is no longer accurate or relevant but shouldn't be deleted, dispalyed as strikethrough


- _Chapter 10: Introducing CSS (pp. 226-245)_
  - think of every HTML element in a box, CSS edits each of those boxes
  - CSS rules work with HTML elements, they govern how the HTML is displayed
  - Structure of a CSS rule:
    ```
    p {
      font-family: Arial;}
    |         |
    |         v
    v     declaration
  selector
    ```
  - selectors indicate which element the rule applies to, declarations indicate how the elements referred to in teh selector should be styled
  - structrue of a CSS declaration:
  ```
  h1, h2, h3 {
    font-family: Arial;}
        |          |
        |          v
        v         value
    property
  ```
  - properties indicate the aspets of the element you want to change
  - values specify the settings you want to use for the chosen properties 
  - **can use the `<link>` element inside `<head>` element to but a link to the .css file  pg235, ensure to use type and rel**
  - can also use the `<style>` element to make CSS internal to HTML, not recommended, usually sits inside the `<head>` element
  - last rule: if the two selectors are identical the latter of the two will take precedence
  - specificity: if one selector is more specific than the other that rule will take precedence, you can add !impoortant after any property value to to indicate it should be considered more important than other rules
  - inheritance: if you specify the font-family or color properties on the `<body>` element they will apply to most child elements, you can force inheritance by putting inherit as the value after the property


### Duckett JS Book
- _Chapter 2: Basic JavaScript Instructions (pp.53-84)_
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


- _Chapter 4: Decisions and Loops (pp.145-162)_
 - 





[Table of Contents](https://jon-gitter.github.io/reading-notes/)