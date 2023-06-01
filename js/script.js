
 


var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var playerName = "Player";
var opponentName = "computer"


var choices = ["rock", "paper", "scissors"];

window.onload = function () {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
};


function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    yourScore ==3;
    opponentScore ==3;
  } else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore += 1;
      } else if (opponent == "paper") {
        opponentScore += 1;
      }
    } else if (you == "scissors") {
      if (opponent == "paper") {
        yourScore += 1;
      } else if (opponent == "rock") {
        opponentScore += 1;
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourScore += 1;
      } else if (opponent == "scissors") {
        opponentScore += 1;
      }
    }
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("winner").innerText = "Winner: " + winnerName;


  checkGameEnd();  
}


function checkGameEnd() {
  if (yourScore === 3 || opponentScore === 3) {

    if (yourScore === 3) {
  
      
      winnerName+= `Grattis, ${playerName}! Du vann!`;
      document.getElementById("your-score").innerText = yourScore;
    } else {
   
     
      winnerName += `Tyvärr, ${opponentName} Vann Spelet!`;
      document.getElementById("opponent-score").innerText = opponentScore;
    }


    yourScore = 0;
    opponentScore = 0;
    document.getElementById("your-choice").src = "";
    document.getElementById("opponent-choice").src = "";

    
  }
 
}

function setPlayerName() {
    playerName = document.getElementById("name-input").value;
    var playerNameDisplay = document.getElementById("player-name-display");
    playerNameDisplay.innerText = "Player: " + playerName;
    playerNameDisplay.addEventListener("click", function() {
    
    });

   
}



var winnerName = "";
if (yourScore === 3) {
    winnerName = playerName;
} else if (opponentScore === 3) {
    winnerName = "Opponent";
}

