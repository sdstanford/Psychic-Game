//Set initial variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerPick = letters[Math.floor(Math.random() * letters.length)];

//Create functions to update score and guesses left
window.onload = function setScore() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#guessesleft").text("Guesses Remaining: " + guessesLeft);
};


//START GAME
//=================================================================

//Console log computer guess for debugging
console.log("Computer Pick: " + computerPick);

//Create keyup event
document.onkeyup = function(event) {

      // Convert user guess to lower case, log to console
      var userGuess = String.fromCharCode(event.which).toLowerCase();
      console.log("Your Pick: " + userGuess);
      
      //Print user guesses to screen
      $("#sofar").append(userGuess);

      //Remove one guess from Guesses Left
      $("#guessesleft").text("Guesses Remaining: " + guessesLeft--);
    
    //Check if user wins
    if (userGuess===computerPick){
    $("#wins").text("Wins: " + wins++); 
    }

    //Update losses aftr 10 tries
    if (guessesLeft <= 0){
    $("#losses").text("Losses: " + losses++);

    }
  };

