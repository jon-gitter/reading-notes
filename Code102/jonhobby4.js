alert("Hello! Welcome to my page.");

function huntingQuestion() {
    let question = prompt("Do you like to hunt?").toLowerCase();
    if (question === "yes") {
        alert("Great! Enjoy the picture and videos!");
        document.write("<h2>Welcome fellow hunter!</h2>");
    } else if (question === "no") {
        alert('Bummer :(');
        document.write("<h2> Sorry you don't enjoy hunting partner. Maybe I changed your mind!</h2>");
    } else if (question != "yes", "no") {
        alert('Error! Please type in a valid response.')
        prompt("Do you like to hunt?").toLowerCase();
    }

}
huntingQuestion()







