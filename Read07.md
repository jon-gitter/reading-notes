refrence for notes is: https://developer.mozilla.org/en-US/docs/Glossary/Control_flow
https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/js/js_operators.asp

control flow - the order in which the computer executes statements in a script

code is run in order from first line to last line (top to bottom), unless the computer encounters something that changes the control flow such as conditionals and loops

Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.

A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

structure of a function:
    function name(parameter1, parameter2, parameter3){}
    name()

    function must end with name() to call/invoking the function.
    function arguments are the values recieved by the function when it is invoked
    inside the function, the arguments (parameters) behave as local variables

The code inside the function will execute when "something" invokes (calls) the function:
When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)

Variables declared within a JavaScript function, become LOCAL to the function.
Local variables can only be accessed from within the function.

Arithmetic vs Assignment Operators
    arithmetic does simple addition, subtraction, etc on integers while assignment operators assign values to JS variables
    Ex: arimetic would include + (addition), - (subtraction), * (multiplicaiton)
        assignment would include = (x=y), += (x+=y or x=x+y), -= (x-=y or x = x-y)

    You can also use + operator to concatenate strings
        Ex: text1 + text2 + text 3;
    You can add strings and numbers
        Ex: let z = "Hello" + 5;  result would be Hello5

Comparison operators 
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator

Logical Operators
&&	logical and
||	logical or
!	logical not

Type Operators
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type