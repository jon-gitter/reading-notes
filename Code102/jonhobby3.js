alert('Hello! Welcome to my page.');

let question = prompt("Do you like to hunt? Please enter yes or no.");

if (question == "yes") {
    alert('Great! Enjoy the picture and videos!');
    document.write("<h2> Welcome fellow hunter! </h2>");
}

if (question == "no") {
    alert('Bummer :(');
    document.write("<h2> Sorry you don't enjoy hunting partner. Maybe I changed your mind!</h2>");
}

