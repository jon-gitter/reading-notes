[Table of Contents](https://jon-gitter.github.io/reading-notes/)

## Read 10 Notes

### Duckett JavaScript Book
- _Chapter 10: Error Handling & Debugging (pp447-_
  - to find the source of an error good to know how scripts are processed, know the order of execution
  - execution context: each function creates a new execution context and there is one global execution context
  - JS interpreter processes one line of code at a time, when a statement needs data from another function, it stacks the new function on top of the current task
  - hoisting: variables and functions within each execution context are created before they are executed
  - functions in JavaScript have lexical scope, they are linked to the object they were defined within
  - if JS generates an error it throws an exception
  - error objects can help you find where your mistakes are and browsers have tools to help you read them (pg 459)
  - error objects cont (pg460-461)
  - debugging workflow:
    - where is the problem?
    - what exactly is the problem?
  - different browsers have different tools to inspect pg (464-469)
  - utilize console.log to target specific problem areas
  - use console.group() to group messages together
  - using the condition.assert() method you can test if a condition is met and write to the console only if the expression evaluates false
  - you can pause the execution of a script on any line using breakpoints
    - select sources, find number you want to stop on a click on it, when you run script it will stop at that line
  - can also set conditional breakpoints in the inspect window of your browswer (pg478)
  - if you know your code might fail use try, catch, and finally
  - can generate your own errors using the throw new Error('message');
  - debugging tips
    - another browser
    - add numbers
    - strip it back
    - explaining the code
    - search
    - code playgrounds
    - validation tools


[Table of Contents](https://jon-gitter.github.io/reading-notes/)