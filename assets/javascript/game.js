
//VARIABLES
var words = ["arthur", "rugrats", "thesimpsons", "scoobydoo", "spongebob", "dannyphantom", "teentitans"]

//Empty variables to store values later
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;



// ALL FUNCTIONS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//__________________________________________________________
//GAME START FUNCTION
//__________________________________________________________
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

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "GUESS THIS WORD:     " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


//__________________________________________________________
//AUDIO FUNCTION
//__________________________________________________________

//variables for audio function
var a = document.getElementById("arthur");
var r = document.getElementById("rugrats");
var simpsons = document.getElementById("simpsons");
var scoobydoo = document.getElementById("scoobydoo");
var spongebob = document.getElementById("spongebob");
var danny = document.getElementById("danny");
var teent = document.getElementById("teent");


function aud() {
    //Arthur Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.play();
        document.getElementById("image").src = "https://yt3.ggpht.com/a-/ACSszfGqnF8nezfhGPz8bfUScK5EPj-AifAMVwzU5g=s900-mo-c-c0xffffffff-rj-k-no";
    }
    //Rugrats Audio & Image
    //---------------------------
    else if (randomWord === words[1]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        a.pause();
        r.play();
        document.getElementById("image").src = "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Series/103873/103873._SX360_QL80_TTD_.jpg";
    }
    //Simpsons Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        r.pause();
        a.pause();
        simpsons.play();
        document.getElementById("image").src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Simpsons_FamilyPicture.png/220px-Simpsons_FamilyPicture.png";
    }
    //Scooby-doo Audio & Image
    //---------------------------
    else if (randomWord === words[3]) {
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.play();
        document.getElementById("image").src = "https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/5a/69/b8/5a69b811-ffaf-b1f6-bcc0-ea72a9091ac8/AppIcon-1x_U007emarketing-85-220-5.png/246x0w.jpg";
    }
    //Spongebob Audio & Image
    //---------------------------
    else if (randomWord === words[4]) {
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        spongebob.play();
        document.getElementById("image").src = "https://pbs.twimg.com/profile_images/1002272769352978433/9S4QWSR0.jpg";
    }
    //Danny Audio & Image
    //---------------------------
    else if (randomWord === words[5]) {
        spongebob.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        danny.play();
        document.getElementById("image").src = "https://i.ytimg.com/vi/gfxsLHecG5E/maxresdefault.jpg";
    }
    //Teen Titans Audio & Image
    //---------------------------
    else if (randomWord === words[6]) {
        spongebob.pause();
        danny.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        teent.play();
        document.getElementById("image").src = "https://nerdist.com/wp-content/uploads/2018/06/Teen_Titans_Homemade_Wallpaper_1920x1080_2.jpg";
    }
};

//__________________________________________________________
//RESET FUNCTION
//__________________________________________________________
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//__________________________________________________________
//CHECK LETTERS/COMPARE FUNCTION
//__________________________________________________________

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

//__________________________________________________________
//FINAL COMPLETE FUNCTION
//__________________________________________________________

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        alert("YOU WON!")
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = "WINS:  " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        alert("YOU LOSE")
        reset()
        document.getElementById("losstracker").innerHTML = "LOSSES:  " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "GUESS THIS WORD:     " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = "GUESSES REMAINING:  " + guessesRemaining;
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//_____________________________________________________
// EXECUTE CODE 
//_____________________________________________________

//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "LETTERS YOU GUESSED:   " + wrongGuess.join(" ");
}

