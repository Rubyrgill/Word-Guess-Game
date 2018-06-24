
//VARIABLES

var words = ["arthur", "rugrats", "thesimpsons", "scoobydoo", "spongebob", "dannyphantom", "teentitans"]

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

//AUDIO 
//-----------------------------------

//variables for audio 
var a = document.getElementById("arthur");
var r = document.getElementById("rugrats");
var simpsons = document.getElementById("simpsons");
var scoobydoo = document.getElementById("scoobydoo");
var spongebob = document.getElementById("spongebob");
var danny = document.getElementById("danny");
var teent = document.getElementById("teent");

// function for audio 
function aud() {
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
        aud()
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

