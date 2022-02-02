
var rockPaperScissors = (function () {

  var game = {};

  // data to save
  game.data = {
    pScore: 0,                // player score
    cScore: 0,                // opponent score
    pChoices: [],             // player choices
    cChoices: [],             // opponent choices
    myGameMode: "null",    // player is odds or evens
    totalTrials: 0,           // total trials
  };

  // temp data
  var cChoicesRock = jsPsych.randomization.repeat(["rock", "paper", "scissors"], 3);
  var cChoicesPaper = jsPsych.randomization.repeat(["rock", "paper", "scissors"], 3);
  var cChoicesScissors = jsPsych.randomization.repeat(["rock", "paper", "scissors"], 3);

  game.run = function (totalRounds) {
   
    // play match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");

      // display DOM elements
      document.getElementById("flex-container").style.visibility = "visible";
      document.getElementById("hands").style.visibility = "visible";
      document.getElementById("options").style.visibility = "visible";
      document.getElementById("player-names").style.visibility = "visible";

      // set animation to null in style sheet when animation ends
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
          if (game.data.totalTrials < totalRounds) {
            setTimeout(() => {
              document.getElementById("rock").disabled = false;                   // enable rock button
              document.getElementById("paper").disabled = false;                  // enable paper button
              document.getElementById("scissors").disabled = false;               // enable scissors button
            }, 1000);
          };
        });
      });    

      // play 1 or 2 and compare hands
      options.forEach(option => {
        option.addEventListener("click", function() {
          game.data.totalTrials++;                                              // increment total trials
          document.getElementById("rock").disabled = true;                      // disable rock button
          document.getElementById("paper").disabled = true;                     // disable paper button
          document.getElementById("scissors").disabled = true;                  // disable scissors button
          playerHand.src = `./assets/rockPurple.png`;                                 // set player hand to "rock"
          computerHand.src = `./assets/rockGrey.png`;                               // set computer hand to "rock"
          document.querySelector(".winner").style.visibility = "hidden";        // hide win/loss feedback
          document.querySelector(".winnerScore").style.visibility = "hidden";   // hide point feedback
          setTimeout(() => {

            // computer makes choice
            if (this.textContent === "rock") {
              if (cChoicesRock.length) {
                var computerChoice = cChoicesRock.pop();
              } else {
                cChoicesRock = jsPsych.randomization.repeat(["rock", "paper", "scissors"], 3);
                var computerChoice = cChoicesRock.pop();
              }
            } else if (this.textContent === "paper") {
              if (cChoicesPaper.length) {
                var computerChoice = cChoicesPaper.pop();
              } else {
                cChoicesPaper = jsPsych.randomization.repeat(["rock", "paper", "scissors"], 3);
                var computerChoice = cChoicesPaper.pop();
              }
            } else if (this.textContent === "scissors") {
              if (cChoicesScissors.length) {
                var computerChoice = cChoicesScissors.pop();
              } else {
                cChoicesScissors = jsPsych.randomization.repeat(["rock", "paper", "scissors"], 3);
                var computerChoice = cChoicesScissors.pop();
              }
            }

            // compare hands
            setTimeout(() => {
              compareHands(this.textContent, computerChoice);
            }, 1000)

            // update images
            playerHand.src = `./assets/${this.textContent}Purple.png`;      // set player hand to selected number
            computerHand.src = `./assets/${computerChoice}Grey.png`;      // set computer hand to computer choice
          }, 1500);

          // animation
          playerHand.style.animation = "shakePlayer 1.5s ease";
          computerHand.style.animation = "shakeComputer 1.5s ease";
        });
      });
    };

    // compare hands function
    const compareHands = (playerChoice, computerChoice) => {

      // save player and computer choices as numeric
      game.data.pChoices.push(playerChoice);
      game.data.cChoices.push(computerChoice);

      // get DOM elements for win/loss feedback and point feedback
      const winner = document.querySelector(".winner");
      const winnerScore = document.querySelector(".winnerScore");

      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "Draw";
        winnerScore.style.color = "#333";
        winnerScore.textContent = "0 cents";
        winner.style.visibility = "visible";
        winnerScore.style.visibility = "visible";
      } else {

        //Check for Rock
        if (playerChoice === "rock") {
          if (computerChoice === "scissors") {
            winner.textContent = "You won!";
            winner.style.visibility = "visible";
            winnerScore.style.color = "rgb(17, 140, 79)";
            winnerScore.textContent = "+3 cents";
            winnerScore.style.visibility = "visible";
            game.data.pScore++;
          } else {
            winner.textContent = "You lost";
            winnerScore.style.color = "rgb(206, 32, 41)";
            winnerScore.textContent = "-1 cent";
            winner.style.visibility = "visible";
            winnerScore.style.visibility = "visible";
            game.data.cScore++;
          }
        }

        //Check for Paper
        if (playerChoice === "paper") {
          if (computerChoice === "scissors") {
            winner.textContent = "You lost";
            winnerScore.style.color = "rgb(206, 32, 41)";
            winnerScore.textContent = "-1 cent";
            winner.style.visibility = "visible";
            winnerScore.style.visibility = "visible";
            game.data.cScore++;
          } else {
            winner.textContent = "You won!";
            winner.style.visibility = "visible";
            winnerScore.style.color = "rgb(17, 140, 79)";
            winnerScore.textContent = "+3 cents";
            winnerScore.style.visibility = "visible";
            game.data.pScore++;
          }
        }

        //Check for Scissors
        if (playerChoice === "scissors") {
          if (computerChoice === "rock") {
            winner.textContent = "You lost";
            winnerScore.style.color = "rgb(206, 32, 41)";
            winnerScore.textContent = "-1 cent";
            winner.style.visibility = "visible";
            winnerScore.style.visibility = "visible";
            game.data.cScore++;
          } else {
            winner.textContent = "You won!";
            winnerScore.style.color = "rgb(17, 140, 79)";
            winnerScore.textContent = "+3 cents";
            winner.style.visibility = "visible";
            winnerScore.style.visibility = "visible";
            game.data.pScore++;
          }
        }
      }
      console.log(game.data.pScore, game.data.cScore, game.data.pChoices, game.data.cChoices);
    };

    //Is call all the inner function
    playMatch();

  };

  return game;

}());
