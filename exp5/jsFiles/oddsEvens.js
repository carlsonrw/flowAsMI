function gametime(mode){
  document.getElementById("odds-or-evens").remove();
  document.getElementById("flex-container").style.visibility = "visible";
  document.getElementById("hands").style.visibility = "visible";
  document.getElementById("options").style.visibility = "visible";
  document.getElementById("player-names").style.visibility = "visible";
};

var oddsEvens = (function () {

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
  var cChoicesOne = jsPsych.randomization.repeat(["one", "two"], 3);
  var cChoicesTwo = jsPsych.randomization.repeat(["one", "two"], 3);

  game.run = function (totalRounds) {
   
    // play match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const oddsOrEvens = document.querySelectorAll(".odds-or-evens button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");

      // set animation to null in style sheet when animation ends
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
          if (game.data.totalTrials < totalRounds) {
            setTimeout(() => {
              document.getElementById("one").disabled = false;                     // enable one button
              document.getElementById("two").disabled = false;                     // enable two button
            }, 1000);
          };
        });
      });    

      // save and display game mode (odds vs. evens)
      oddsOrEvens.forEach(option => {
        option.addEventListener("click", function() {
            game.data.myGameMode = this.textContent;
            document.getElementById("heading").textContent = `You're ${this.textContent}!`;
            document.getElementById("sub-heading").style.color = "#333";
            document.getElementById("sub-heading").textContent = `Now pick a number`;
          });
      });

      // play 1 or 2 and compare hands
      options.forEach(option => {
        option.addEventListener("click", function() {
          game.data.totalTrials++;                                              // increment total trials
          document.getElementById("one").disabled = true;                       // disable one button
          document.getElementById("two").disabled = true;                       // disable two button
          playerHand.src = `./assets/rockPurple.png`;                                 // set player hand to "rock"
          computerHand.src = `./assets/rockGrey.png`;                               // set computer hand to "rock"
          document.querySelector(".winner").style.visibility = "hidden";        // hide win/loss feedback
          document.querySelector(".winnerScore").style.visibility = "hidden";   // hide point feedback
          setTimeout(() => {

            // computer makes choice
            if (this.textContent == 1) {
              if (cChoicesOne.length) {
                var computerChoice = cChoicesOne.pop();
              } else {
                cChoicesOne = jsPsych.randomization.repeat(["one", "two"], 3);
                var computerChoice = cChoicesOne.pop();
              }
            } else if (this.textContent == 2) {
              if (cChoicesTwo.length) {
                var computerChoice = cChoicesTwo.pop();
              } else {
                cChoicesTwo = jsPsych.randomization.repeat(["one", "two"], 3);
                var computerChoice = cChoicesTwo.pop();
              }
            }

            // compare hands
            setTimeout(() => {
              compareHands(this.textContent, computerChoice);
            }, 1000)

            // update images
            const dig = {1: "one", 2: "two"};                         // array of image names
            playerHand.src = `./assets/${dig[this.textContent]}Purple.png`; // set player hand to selected number
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
      let parsePlayer = 2;
      let parseComputer = 2;
      if (playerChoice == 1) parsePlayer = 1;
      if (computerChoice == "one") parseComputer = 1;
      game.data.pChoices.push(parsePlayer);
      game.data.cChoices.push(parseComputer);

      // get DOM elements for win/loss feedback and point feedback
      const winner = document.querySelector(".winner");
      const winnerScore = document.querySelector(".winnerScore");

      // increment player score and computer score
      if ((parsePlayer+parseComputer) % 2 > 0) {
        if (game.data.myGameMode == "Odds") {
          winner.textContent = "You won!";
          winnerScore.style.color = "rgb(17, 140, 79)";
          winnerScore.textContent = "+3 cents";
          winner.style.visibility = "visible";
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
      } else {
         if (game.data.myGameMode == "Evens") {
          winner.textContent = "You won!";
          winnerScore.style.color = "rgb(17, 140, 79)";
          winnerScore.textContent = "+3 cents";
          winner.style.visibility = "visible";
          winnerScore.style.visibility = "visible";
          game.data.pScore++;
        } else {
          winner.textContent = "You lost";
          winnerScore.style.color = "rgb(206, 32, 41)";
          winnerScore.textContent = "-1 cent";
          winner.style.visibility = "visible";
          winnerScore.style.visibility = "visible";
          game.data.cScore++
        }
      };
      console.log(game.data.pScore, game.data.cScore, game.data.pChoices, game.data.cChoices);
    };

    //Is call all the inner function
    playMatch();

  };

  return game;

}());
