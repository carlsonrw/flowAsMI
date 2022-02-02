/**
 * jspsych-canvas-keyboard-response
 * Chris Jungerius (modified from Josh de Leeuw)
 *
 * a jsPsych plugin for displaying a canvas stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/


jsPsych.plugins["rock-paper-scissors"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'rock-paper-scissors',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.FUNCTION,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The drawing function to apply to the canvas. Should take the canvas object as argument.'
      },
      total_rounds: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Number of shots',
        default: null,
        description: 'Number of shots before the game ends.'
      },
    }
  }

  plugin.trial = function (display_element, trial) {

    // html
    var newHTML = `
      <section class="game">
        <div id="flex-container" class="flex-container">
          <div class="options-box">
            <div id="options" class="options">
              <button id="rock" class="rock">rock</button>
              <button id="paper" class="paper">paper</button>
              <button id="scissors" class="scissors">scissors</button>
            </div>
          </div>
          <div class="match">
            <h2 id="heading" class="winner">Choose an option</h2>
            <h2 id="sub-heading" class="winnerScore">&nbsp;</h2>
            <div id="hands" class="hands">
              <img class="player-hand" src="./assets/rockPurple.png" alt="" />
              <img class="computer-hand" src="./assets/rockGrey.png" alt="" />
            </div>
            <div id="player-names" class="player-names">
              <h2 style='color:#2E157F; font-weight:bold'>You</h2>
              <h2 style='color:#4D4D4D; font-weight:bold'>Opponent</h2>
            </div>
          </div>
        </div>
      </section>
    `
    // add game html
    document.body.classList.remove("jspsych-display-element");
    display_element.innerHTML = newHTML;

    // run game
    trial.stimulus(trial.total_rounds);

    // function to end trial when it is time
    var end_trial = function () {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // stop listening for last trial
      clearInterval(listenForLastTrial);

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // clear the display
      setTimeout(function () {
      // gather the data to store for the trial
        var trial_data = {
          "pScore": rockPaperScissors.data.pScore,
          "cScore": rockPaperScissors.data.cScore,
          "pChoices": rockPaperScissors.data.pChoices,
          "cChoices": rockPaperScissors.data.cChoices,
          "myGameMode": rockPaperScissors.data.myGameMode,
        };
        display_element.innerHTML = '';
        document.body.classList.add("jspsych-display-element");
        console.log(document.body.classList);

        // move on to the next trial
        jsPsych.finishTrial(trial_data); 
      }, 3500)

    };

    // listen for last trial of slingshot game
    var listenForLastTrial = setInterval(function () { 
      if (rockPaperScissors.data.totalTrials == trial.total_rounds) end_trial(); 
    }, 200)

  };

  return plugin;

})();
