alert("Hello! Welcome to my page.");

function huntingQuestion() {
    let question = prompt("Do you like to hunt?").toLowerCase();
    if (question === "yes") {
        alert("Great! Enjoy the picture and videos!");
        document.write("<h2>Welcome fellow hunter!</h2>");
    } else if (question === "no") {
        alert('Bummer :(');
        document.write("<h2> Sorry you don't enjoy hunting partner. Maybe I changed your mind!</h2>");
        //use else to help with errors
    } else (question != "yes" || "no") {
        alert('Error! Please type in a valid response.')
        prompt("Do you like to hunt?");
    }

}
huntingQuestion();

function tuckerImageCountPrompter(whichPrompt) {
    if (!whichPrompt) {
        whichPrompt = 'How many puppy pics of Tucker do you want to see?';
    }
    let tuckerCount = prompt(whichPrompt);
    if (tuckerCount === '') {
        let message = 'How many puppy pics of Tucker do you want to see?';
        let error = ' Please enter a number between 1 and 3';
        tuckerImageCountPrompter(message + error);
    } // || = or operator either can be true, && is both have to be true 
    if (tuckerCount == 1 || tuckerCount == 2) {
        for (let i = 0; i < 1; i++) {
            document.write('<img src="puptuckday.jpg">')
        }
    }
    if (tuckerCount == 2) {
        for (let i = 0; i < 2; i++) {
            document.write('<img src="puptucknight.jpg">')
        }
    }
    if (tuckerCount == 3) {
        for (let i = 0; i < 3; i++) {
            document.write('<img src="puptuck.JPG">')
        }
    }
    if (tuckerCount >= 4) {
        let message = 'Sorry your computer can\'t handle that much cuteness.';
        tuckerImageCountPrompter(message);
    }
}

tuckerImageCountPrompter();