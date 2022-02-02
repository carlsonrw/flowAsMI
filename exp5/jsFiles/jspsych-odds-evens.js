/**
 * jspsych-canvas-keyboard-response
 * Chris Jungerius (modified from Josh de Leeuw)
 *
 * a jsPsych plugin for displaying a canvas stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/


jsPsych.plugins["odds-evens"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'odds-evens',
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
              <button id="one" class="one">1</button>
              <button id="two" class="two">2</button>
            </div>
          </div>
          <div class="match">
            <h2 id="heading" class="winner">Choose odds or evens</h2>
            <h2 id="sub-heading" class="winnerScore">&nbsp;</h2>
            <div id="odds-or-evens" class="odds-or-evens">
              <button class=IAmOdd id=IAmOdd onclick="gametime()">Odds</button>
              <button class=IAmEven id=IAmEven onclick="gametime()">Evens</button>
            </div> 
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

      setTimeout(function () {
        // gather the data to store for the trial
        var trial_data = {
          "pScore": oddsEvens.data.pScore,
          "cScore": oddsEvens.data.cScore,
          "pChoices": oddsEvens.data.pChoices,
          "cChoices": oddsEvens.data.cChoices,
          "myGameMode": oddsEvens.data.myGameMode,
        };
        display_element.innerHTML = '';
        document.body.classList.add("jspsych-display-element");

        // move on to the next trial
        jsPsych.finishTrial(trial_data); 
      }, 3500)

    };

    // listen for last trial of slingshot game
    var listenForLastTrial = setInterval(function () { 
      if (oddsEvens.data.totalTrials == trial.total_rounds) end_trial();
    }, 200);

  };

  return plugin;

})();
