

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var wordList = ["astrophysics", "astronomy", "atom", "beaker", "biochemistry", "biology", "botany", "cell", "chemical", "chemistry", "climate", "climatologist", "control", "cuvette", "data", "datum", "electricity", "electrochemist", "element", "energy", "entomology", "evolution", "experiment", "fact", "flask", "fossil", "funnel", "genetics", "geology", "geophysics", "glassware", "gravity", "herpetology", "hypothesis", "ichthyology", "immunology", "lab", "laboratory", "laws", "lepidoptery", "magnetism", "mass", "matter", "measure", "meteorologist", "meteorology", "microbiologist", "microbiology", "microscope", "mineral", "mineralogy", "molecule", "motion", "observe", "observatory", "organism", "ornithology", "paleontology", "particle", "phase", "physics", "pipette", "radiology", "research", "retort", "scale", "science", "scientist", "seismology", "telescope", "temperature", "theory", "thermometer", "tissue", "variable", "virologist", "volcanology", "volume", "weather", "weigh", "zoology"];
var wordSelection = wordList[Math.floor(Math.random()*wordList.length)];
var wordLetters = Array.from(wordSelection);
var tempArray = Array(wordSelection.length);
var missedLetters = Array(0);
var numberOfMissed = 0;
var numberOfLosses = 0;
var numberOfWins = 0;


/* inserts # of _s into tempArray equal to the word length */
for(i = 0; i < wordSelection.length; i++) {
    tempArray[i] = "_ ";
}
var beginGuessProgress = tempArray.join("");

/* I don't understand why the following code isn't displaying when the page is loaded. */
/* console.log(beginGuessProgress);
document.querySelector(".display").innerHTML = beginGuessProgress; */

document.onkeyup = function() { 
    /* pulls the keypress */
    var keyPress = String.fromCharCode(event.keyCode).toLowerCase();

    /* if keypress is in alphabet array, console print ALPHABET, if not do nothing */
    if (alphabet.indexOf(keyPress) != -1) { 
        
        /* if keypress is in wordLetters Array, execute subsequent IF, if not execute ELSE */
        if (wordLetters.indexOf(keyPress) != -1 ) {
    
            /* runs through the entire wordLetters array */
            for (i = 0; i < wordLetters.length; i++) {

                /* if the keyPress matches any letters, replace that number _ with the keypress */
                if (wordLetters[i] === keyPress) {
                    tempArray[i] = keyPress;

                    /* create a string to display comprised of the tempArray holding _s and correct guesses  */
                    var guessProgress = tempArray.join(" ");

                    /* displays the above string on the page */
                    document.querySelector(".display").innerHTML = guessProgress;

                    /* if there are _s left in the array do nothing, if not game ends, alert YOU WIN */
                    if (tempArray.indexOf("_ ") != -1) {                    }
                    else {
                        document.querySelector(".display").innerHTML = guessProgress;
                        numberOfWins++;
                        document.querySelector(".numberOfWins").innerHTML = numberOfWins;
                        setTimeout(alert("YOU WIN"), 1000);
                        
                    }
                }
            }
        }
        else {
            /* if the keypress has already been pushed to the missedLetters array, do nothing */

            if (missedLetters.indexOf(keyPress) != -1) {}
            
            /* push the missed letter to the array and increase number of misses */
            else {
                missedLetters.push(keyPress);
                numberOfMissed++;
                document.querySelector(".numberOfMissed").innerHTML = numberOfMissed;
              
                /* if number of missed guesses is less than 11, do nothing */
                if (numberOfMissed < 11) {}

                /* if they lose the game, alert "you lose" and increment the loss counter */
                else {
                    alert("YOU LOSE");
                    numberOfLosses++;
                    document.querySelector(".numberOfLosses").innerHTML = numberOfLosses;
                };
            };

            var missedDisplay = missedLetters.join(", ");
            document.querySelector(".missed").innerHTML = missedDisplay; 


        }
    }
    else {}
}

/* I missed the parts where it loops back and provides another word as well as the "press any key to begin" at the beginning. I suspect 
it's something along the lines of a do/while but I'm not sure */

