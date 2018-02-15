

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var wordList = ["astrophysics", "astronomy", "atom", "beaker", "biochemistry", "biology", "botany", "cell", "chemical", "chemistry", "climate", "climatologist", "control", "cuvette", "data", "datum", "electricity", "electrochemist", "element", "energy", "entomology", "evolution", "experiment", "fact", "flask", "fossil", "funnel", "genetics", "geology", "geophysics", "glassware", "gravity", "herpetology", "hypothesis", "ichthyology", "immunology", "lab", "laboratory", "laws", "lepidoptery", "magnetism", "mass", "matter", "measure", "meteorologist", "meteorology", "microbiologist", "microbiology", "microscope", "mineral", "mineralogy", "molecule", "motion", "observe", "observatory", "organism", "ornithology", "paleontology", "particle", "phase", "physics", "pipette", "radiology", "research", "retort", "scale", "science", "scientist", "seismology", "telescope", "temperature", "theory", "thermometer", "tissue", "variable", "virologist", "volcanology", "volume", "weather", "weigh", "zoology"];
var wordSelection = wordList[Math.floor(Math.random()*wordList.length)];
var wordLetters = Array.from(wordSelection);
var tempArray = Array(wordSelection.length);
var missedLetters = Array(0);
var numberOfMissed = 0;
function missedOne() {
    numberOfMissed++
}

console.log(missedLetters);


    
console.log(wordSelection);        
console.log(wordLetters);

/* inserts # of _s into tempArray equal to the word length */
for(i = 0; i < wordSelection.length; i++) {
    tempArray[i] = "_ ";
}


document.onkeyup = function() { 
    /* pulls the keypress */
    var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
    
    /* logs the keypress in console */
    console.log(keyPress);


    /* if keypress is in alphabet array, console print ALPHABET, if not do nothing */
    if (alphabet.indexOf(keyPress) != -1) { 
        
        /* if keypress is in wordLetters Array, execute subsequent IF, if not execute ELSE */
        if (wordLetters.indexOf(keyPress) != -1 ) {
            
            console.log("CORRECT GUESS");
    
            /* runs through the entire wordLetters array */
            for (i = 0; i < wordLetters.length; i++) {

                /* if the keyPress matches any letters, replace that number _ with the keypress */
                if (wordLetters[i] === keyPress) {
                    tempArray[i] = keyPress;
                    /* create a string to display comprised of the tempArray holding _s and correct guesses  */
                    var guessProgress = tempArray.join(" ");
                    console.log(guessProgress);
                    /* displays the above string on the page */
                    document.querySelector(".display").innerHTML = guessProgress;
                    console.log(tempArray.indexOf("_ "));
                    /* if there are _s left in the array console print KEEP GOING, if not game ends, alert YOU WIN */
                    if (tempArray.indexOf("_ ") != -1) {
                        console.log("KEEP GOING")
                    }
                    else {
                        document.querySelector(".display").innerHTML = guessProgress;
                        setTimeout(alert("YOU WIN"), 1000);
                    }
                }
            }
        }
        else {
            /* if the keypress has already been pushed to the missedLetters array, console print you already guessed that */
            console.log("WRONG");
            if (missedLetters.indexOf(keyPress) != -1) {
            console.log("you already guessed that idiot")
            }
            else {
                missedLetters.push(keyPress);
                numberOfMissed++;
                var numberOfMissed2 = numberOfMissed;
                console.log(numberOfMissed2);
                if (numberOfMissed < 10) {}
                else {alert("YOU LOSE")};
            };
            var missedDisplay = missedLetters.join(", ");
            document.querySelector(".missed").innerHTML = missedDisplay; 


        }
    }
    else {}
}



