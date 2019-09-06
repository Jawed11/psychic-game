for(i = 0; i <=10; i++){
    console.log(i);
}


document.onkeyup = function(event) {
}
var Wins = 0;
var Losses = 0;
var Guesses Left = 0;
var Your Guesses So Far = 0;

var computerChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var userGuess = event.key;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

