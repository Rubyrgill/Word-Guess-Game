
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
