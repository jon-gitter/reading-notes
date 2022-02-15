[Table of Contents](https://jon-gitter.github.io/reading-notes/)

## Read 03 Notes

### Duckett HTML & CSS Book
- _CSS Layout (https://web.dev/learn/css/layout/)_
  - display property determines if the box it is applied to acts as inline or block. 
  - There are two main layout mechanisms that create layout rules for multiple elements, flexbox and grid.
  - Flexbox is a layout mechanism for one-dimensional layouts. Layout across a single axis, either horizontally or vertically.
  - Grid is similar in a lot of ways to flexbox, but it is designed to control multi-axis layouts instead of single-axis layouts (vertical or horizontal space).
  - If not using grid or flexbox, your elements display in normal flow. There are a number of layout methods that you can use to adjust the behavior and position of items when in normal flow.
  - multicolumn layout
    ```
    .countries {
	column-count: 2;
	column-gap: 1em;
}
  ```
  - 

- _Chapter 15: Layout (pp.358-404)_
  - block level elements start on new line
  - inline elements flow in between surrounding text
  - if one block-level element sits inside another bloc-level element than the outer box is knows as the containing or parent element
  - utilize pf 363 and 364 for controlling positioning of elements
  - use pg 365-376 to get better examples of controlling layouts\
  - must be cognizant of other users screens
    - usually create web pages around 960-1000 pixels
  - can use fixed or liquid layouts for websites (helps with different screens etc)
    - pros and cons on page 382
  - 960 pixel layout on pg 389 and 390

[Table of Contents](https://jon-gitter.github.io/reading-notes/)