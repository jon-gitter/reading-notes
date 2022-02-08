[Table of Contents](https://jon-gitter.github.io/reading-notes/)

CSS - stands for cascading style sheets. Styling language for HTML. Has its own architecture (language)

use <link href="/blahblahblah.css" rel="stylesheet">
    must have rel="stylesheet"
    use / after href "" to look inside the directory you're at

Everything is a box in CSS (<header>, <footer>, <body>, etc.)

After every declaration you need to have a ;

selector --> header {
properties --> background: red;
}


margin is space in between boxes, padding is inside the box

good practice to start from main with margins then dress off that

vw = view with used for sizing property value. BEST USE TO ADAPT, number = percentage of size

margin: 0 auto = take space and auto margin to make it center

use the boxes to see what is done w/ CSS

Best to understand the logic of what CSS does than just follow help guides

Use id to make unique identifiers to change individual parts in <main>, <body>, etc. 
    EX: <h3 id="intro"> Intorduction </h3>
            #intro {
                text-align: center;
            }

        using # adds specificity to rules on CSS and will go past just using h3 {} to add alignment, color, etc. to a specific element

in line style - used inside the HTML element tag
sty = none - will remove stuff
block level elements - take the entire block and changes it
coolers.com is a color palette website useful for designing your website

use https://developer.mozilla.org/en-US/docs/Web/CSS/Reference as a great resource for CSS refrences

[Table of Contents](https://jon-gitter.github.io/reading-notes/)