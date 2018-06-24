
//VARIABLES

var words = ["arthur", "rugrats", "thesimpsons", "scoobydoo", "recess", "spongebob", "cyberchase", "franklin"]

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

//FUNCTIONS



function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];
    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");
    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //HTML
    document.getElementById("currentword").innerHTML = "GUESS THIS WORD:     " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }

    console.log(blanksAndCorrect);



}


function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //check to see win 
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        alert("YOU WON!")
        reset()

        document.getElementById("winstracker").innerHTML = "WINS:  " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        alert("YOU LOSE")
        reset()
        document.getElementById("losstracker").innerHTML = "LOSSES:  " + losses;
    }
    //check to see if lost
    document.getElementById("currentword").innerHTML = "GUESS THIS WORD:     " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = "GUESSES REMAINING:  " + guessesRemaining;

}

// PROCESS


Game()
// //
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "LETTERS YOU GUESSED:   " + wrongGuess.join(" ");
}

