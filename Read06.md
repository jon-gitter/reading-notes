JavaScript is logic, and is composed of actions. It's a lightweight programming language to add dynamics to your app and is most well known for it's use in websites.

We use functions to do something
<script> is used in HTML to put our JS file
    Ex: <script src ="javascript.js"> </script>
You can also put <script> inline in HTML
    EX: <script>
            alert("Hello!");
        <script>

dom or document represents entire webpage
    EX: document.getElementbyID("Zork").innerHTML = 'He glad';


put script either in head or down below right at the end of the body
    preferd to put at end of body

Two ways to declare a variable
    let
    const

dynamic styling is using CSS, HTML, and JS



//second word is a variable, variable = name, 
let name = prompt("What's your name?");
let age = prompt("How old are you?");
let petsName = prompt("What is your pet's name?");

alert('Hello' + name + 'You are ' + age + 'and your pets name is ' + petsName + '!');



//lets us write to our document using the variable between the <h3></h3>, this is the same variable as above. not just limited 
document.write('<h3>' + name + '</h3>');

//another variable is const, it is a constant variable
const

//Conditionals, based on something else, logic gates. Used with "if". Whatever is true.  
if (1 < 5) {
    alert('This is TRUE!')
}

//else false
else {
    alert('THIS IS A LIE!!!')
}

// === vs ==, === is direct compare (must be either a integer or string), == is shallow compare (can be string or integer) 

// tod=time of day
let tod = prompt:('What hour is it?');

//console keeps track of any variables that you want, good way of inspecting and getting the correct information. use '' for a description inside () of console.log
console.log()

//integers are numbers, strings are inside '' or "" they can be integers or letters.

if (tod > 18) {
    alert('good evening')
} else if (tod > 12) {
    alert('good afternoon')
}
else if (tod >= 0) {
    alert('Goodmorning')
}
//good practice to see something even if it doesn't match the variables
else {
    alert('Welcome')
}