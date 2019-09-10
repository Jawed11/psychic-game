let Wins = 0;
let Losses = 0;
let GuessesLeft = 10;
let YourGuessesSoFar = 0;

let computerChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//let userGuess = event.key;
let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//const event = (1-10);
console.log("BELOW IS THE COMPUTER GUESS")
console.log(computerGuess)

let WinsText = document.getElementById("Wins");
let LossesText = document.getElementById("Losses");
let Guesses = document.getElementById("Guesses-Left");


for (i = 0; i <=10; i++){
   
}



document.onkeyup = function(event) {
    userText = event.key;
    if (userText==computerGuess){
        Wins++
        alert("YOU WON")
    }else{
        if (GuessesLeft==0){
        alert("YOU LOSE")
        Losses++
      }

      
    
      
    
}

        

};

//VARIABLES AT THE VERY TOP
//ALL YOURE FUNCTIONS
//CALLING FUNCITONS
    