
var exp = (function() {

    var p = {};

   /*
    *
    *  RANDOM ASSIGNMENT
    *
    */

    var order = Math.floor(Math.random()*2);

    p.data = {
        order: order,
        rpsOrder: order == 0 ? "first" : "second",
        oeOrder: order == 0 ? "second" : "first",
    }

   /*
    *
    *  INSTRUCTIONS
    *
    */
        
    p.inst = {}

    // instruction pages
    var welcomePage1 = `<div class='instructions'>

    <p><strong>Welcome!</strong></p>

    <p>Thank you for agreeing to complete our survey. For the next 10 to 15 minutes, you'll be helping us 
    answer the following question: "What makes some games more immersive and engaging than others?"</p>

    <p>Specifically, you'll play two games: <strong>Rock, Paper, Scissors</strong> and <strong>Odds vs. Evens</strong>. After
    each game, you'll provide feedback on your experience.</p>

    <p>By playing games and providing feedback, you'll help us understand how to design games 
    that are as immersive and engaging as possible.</p>

    </div>`; 

    var welcomePage2 = `<div class='instructions'>

    <p><strong>Bonus opportunity!</strong></p>

    <p>During each game, you'll be able to earn bonus money. Specifically, money will be added to a "bonus fund" when 
    you perform well. At the end of the survey, you'll recieve all of the money in your bonus fund in addition
    to the $1.50 guaranteed for your participation.</p>

    <p>When you're ready, proceed to learn about the first game that you'll be playing.</p>

    </div>`; 

    var welcomePage3 = `<div class='instructions' style='text-align: center'>

    <p>Thank you! Next, you will learn about the second game that you'll be playing.</p>

    </div>`; 

    var goodbye = `<div class='instructions' style='text-align: center'>

    <p>Thank you for playing! Please answer a few final questions to receive payment.</p>

    </div>`; 

    // rock paper scissors intro
    var rpsPage1 = `<div class='instructions'>

    <p>The ${p.data.rpsOrder} game you'll play is <strong>Rock, Paper, Scissors</strong>.</p>

    <p><strong>Rock, Paper, Scissors</strong> is a hand game  played between two people. 
    Each player simultaneously forms one of three shapes with an outstretched hand: "rock", "paper", or "scissors."</p></br>

        <div style='text-align: center'>
            <div style='display: inline-block'>
                <img src='assets/rockPurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Rock</p>
                <p>&nbsp;</p>
            </div>
            <div style='display: inline-block'>
                <img src='assets/paperPurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Paper</p>
                <p>&nbsp;</p>
            </div>
            <div style='display: inline-block'>
                <img src='assets/scissorsPurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Scissors</p>
                <p>&nbsp;</p>
            </div>
        </div>

    </div>`; 

    var rpsPage2 = `<div class='instructions' style='text-align: center'>

    <p>In <strong>Rock, Paper, Scissors</strong>, there are four main rules.</p>

    </div>`;

    var rpsPage3 = `<div class='instructions'>

    <p><strong>Rule 1: Rock beats scissors.</strong> Rock beats scissors because "rock crushes scissors." Accordingly:</p>
    <p>
        <li style='margin-left:25px'>You'll <span class='winText'>win</span> if you choose rock when your opponent chooses scissors.</li>
        <li style='margin-left:25px'>You'll <span class='loseText'>lose</span> if you choose scissors when your opponent chooses rock.</li><br>
    </p>
        <div style='text-align: center'>
            <div style='display: inline-block'>
                <img src='assets/rockPurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Rock</p>
                <p>&nbsp;</p>
            </div>
            <div style='display: inline-block'>
                <p style='margin:0; font-weight:bold'>>>>>><br>BEATS<br>>>>>></p>
                <div style='height:80px; display:inline-block'></div>
            </div>
            <div style='display: inline-block'>
                <img src='assets/scissorsGrey.png', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Scissors</p>
                <p>&nbsp;</p>
            </div>
        </div>

    </div>`; 

    var rpsPage4 = `<div class='instructions'>

    <p><strong>Rule 2: Scissors beats paper</strong>. Scissors beats paper because "scissors cuts paper." Accordingly:</p>
    <p>
        <li style='margin-left:25px'>You'll <span class='winText'>win</span> if you choose scissors when your opponent chooses paper.</li>
        <li style='margin-left:25px'>You'll <span class='loseText'>lose</span> if you choose paper when your opponent chooses scissors.</li><br>
    </p>
        <div style='text-align: center'>
            <div style='display: inline-block'>
                <img src='assets/scissorsPurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Scissors</p>
                <p>&nbsp;</p>
            </div>
            <div style='display: inline-block'>
                <p style='margin:0; font-weight:bold'>>>>>><br>BEATS<br>>>>>></p>
                <div style='height:80px; display:inline-block'></div>
            </div>
            <div style='display: inline-block'>
                <img src='assets/paperGrey.png', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Paper</p>
                <p>&nbsp;</p>
            </div>
        </div>

    </div>`; 

    var rpsPage5 = `<div class='instructions'>

    <p><strong>Rule 3: Paper beats rock</strong>. Paper beats rock because "paper covers rock." Accordingly:</p>
    <p>
        <li style='margin-left:25px'>You'll <span class='winText'>win</span> if you choose paper when your opponent chooses rock.</li>
        <li style='margin-left:25px'>You'll <span class='loseText'>lose</span> if you choose rock when your opponent chooses paper.</li><br>
    </p>
        <div style='text-align: center'>
            <div style='display: inline-block'>
                <img src='assets/paperPurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Paper</p>
                <p>&nbsp;</p>
            </div>
            <div style='display: inline-block'>
                <p style='margin:0; font-weight:bold'>>>>>><br>BEATS<br>>>>>></p>
                <div style='height:80px; display:inline-block'></div>
            </div>
            <div style='display: inline-block'>
                <img src='assets/rockGrey.png', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Rock</p>
                <p>&nbsp;</p>
            </div>
        </div>

    </div>`;

    var rpsPage6 = `<div class='instructions'>

    <p><strong>Rule 4: When both players choose the same shape, the result is a draw</strong>. 
    For instance, if both players choose rock, this would result in a <span class='drawText'>draw</span>. 
    The same is true if both players choose paper or scissors.</p><br>

        <div style='text-align: center'>
            <div style='display: inline-block'>
                <img src='assets/rockPurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Rock</p>
                <p>&nbsp;</p>
            </div>
            <div style='display: inline-block'>
                <p style='margin:0; font-weight:bold'>DRAW</p>
                <div style='height:100px; display:inline-block'></div>
            </div>
            <div style='display: inline-block'>
                <img src='assets/rockGrey.png', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>Rock</p>
                <p>&nbsp;</p>
            </div>
        </div>

    </div>`;

    var rpsPage7 = `<div class='instructions'>

    <p>During <strong>Rock, Paper, Scissors</strong>, you'll be able to add money to your bonus fund. Specifically:</p>
    <p>
        <li style='margin-left:25px'>For each round you <span class='winText'>win</span>, <span class='winText'>3 cents</span> will be added to your bonus fund.</li>
        <li style='margin-left:25px'>For each round you <span class='loseText'>lose</span>, <span class='loseText'>1 cent</span> will be subtracted from your bonus fund.</li>
        <li style='margin-left:25px'>For each round you <span class='drawText'>draw</span>, <span class='drawText'>0 cents</span> will be added to your bonus fund.</li>
    </p>
    <p>At the end of this survey, you'll receive all of the money in your bonus fund 
    in addition to the $1.50 guaranteed for your participation.</p>

    <p>Next, you'll answer a few questions about <strong>Rock, Paper, Scissors</strong>.
    When you're ready, please proceed.</p>
    
    </div>`; 

    var rpsPage8 = `<div class='instructions'>

    <p><strong>Get ready to play!</strong></p>

    <p>Next, you'll play 50 rounds of <strong>Rock, Paper, Scissors</strong>.</p>

    <p>REMEMBER: During the game, you'll be able to add money to your bonus fund. Specifically:</p>
    <p>
        <li style='margin-left:25px'>For each round you <span class='winText'>win</span>, <span class='winText'>3 cents</span> will be added to your bonus fund.</li>
        <li style='margin-left:25px'>For each round you <span class='loseText'>lose</span>, <span class='loseText'>1 cent</span> will be subtracted from your bonus fund.</li>
        <li style='margin-left:25px'>For each round you <span class='drawText'>draw</span>, <span class='drawText'>0 cents</span> will be added to your bonus fund.</li>
    </p>
    <p>At the end of this survey, you'll receive all of the money in your bonus fund 
    in addition to the $1.50 guaranteed for your participation.</p>

    <p>When you're ready to begin, please proceed.</p>
    
    </div>`; 

    // odds evens intro
    var oePage1 = `<div class='instructions'>

    <p>The ${p.data.oeOrder} game you'll play is <strong>Odds vs. Evens</strong>.</p>

    <p><strong>Odds vs. Evens</strong> is a hand game played between two people.
    At the beginning of the game, each player picks a side: odds or evens.</p>
    
    </div>`; 

    var oePage2 = `<div class='instructions'>

    <p>After picking sides, each player simultaneously displays the number 1 or 2 with an outstretched hand.</p>
    
    <p>If the sum of the numbers is odd, then the player representing "odds" wins.
    <br>If the sum of the numbers is even, then the player representing "evens" wins.</p><br>

        <div style='text-align: center'>
            <div style='display: inline-block'>
                <img src='assets/onePurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>1</p>
                <p>&nbsp;</p>
            </div>
            <div style='display: inline-block'>
                <img src='assets/twoPurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold'>2</p>
                <p>&nbsp;</p>
            </div>
        </div>

    </div>`; 

    var oePage3 = `<div class='instructions'>

    <p>For example, if you choose "1" and your opponent chooses "2", the total would be 3.
    Since 3 is an odd number, the player representing "odds" would win.</p><br>

        <div style='text-align: center'>
            <div style='display: inline-block'>
                <img src='assets/onePurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold; color:#2E157F'>You</p>
                <p>&nbsp;</p>
            </div>
            <div style='display: inline-block'>
                <p style='margin:0; font-weight:bold'>ODDS<br>WINS</p>
                <div style='height:100px; display:inline-block'></div>
            </div>
            <div style='display: inline-block'>
                <img src='assets/twoGrey.png', style='width: 200px'>
                <p style='margin:0; font-weight:bold; color:#4D4D4D'>Opponent</p>
                <p>&nbsp;</p>
            </div>
        </div>

    </div>`; 

    var oePage4 = `<div class='instructions'>

    <p>Alternatively, if you and your opponent both choose "1", the total would be 2.
    Since 2 is an even number, the player representing "evens" would win.</p><br>

        <div style='text-align: center'>
            <div style='display: inline-block'>
                <img src='assets/onePurple.png', class='player-hand', style='width: 200px'>
                <p style='margin:0; font-weight:bold; color:#2E157F'>You</p>
                <p>&nbsp;</p>
            </div>
            <div style='display: inline-block'>
                <p style='margin:0; font-weight:bold'>EVENS<br>WINS</p>
                <div style='height:100px; display:inline-block'></div>
            </div>
            <div style='display: inline-block'>
                <img src='assets/oneGrey.png', style='width: 200px'>
                <p style='margin:0; font-weight:bold; color:#4D4D4D'>Opponent</p>
                <p>&nbsp;</p>
            </div>
        </div>

    </div>`; 

    var oePage5 = `<div class='instructions'>

    <p>During <strong>Odds vs. Evens</strong>, you'll be able to add money to your bonus fund. Specifically:</p>
    <p>
        <li style='margin-left:25px'>For each round you <span class='winText'>win</span>, <span class='winText'>3 cents</span> will be added to your bonus fund.</li>
        <li style='margin-left:25px'>For each round you <span class='loseText'>lose</span>, <span class='loseText'>1 cent</span> will be subtracted from your bonus fund.</li>
    </p>
    <p>At the end of this survey, you'll receive all of the money in your bonus fund 
    in addition to the $1.50 you are guaranteed for your participation.</p>

    <p>Next, you'll answer a few questions about <strong>Odds vs. Evens</strong>.
    When you're ready, please proceed.</p>
    
    </div>`; 

    var oePage6 = `<div class='instructions'>

    <p><strong>Get ready to play!</strong></p>

    <p>Next, you'll play 50 rounds of <strong>Odds vs. Evens</strong>.</p>

    <p>REMEMBER: During the game, you'll be able to add money to your bonus fund. Specifically:</p>
    <p>
        <li style='margin-left:25px'>For each round you <span class='winText'>win</span>, <span class='winText'>3 cents</span> will be added to your bonus fund.</li>
        <li style='margin-left:25px'>For each round you <span class='loseText'>lose</span>, <span class='loseText'>1 cent</span> will be subtracted from your bonus fund.</li>
    </p>
    <p>At the end of this survey, you'll receive all of the money in your bonus fund 
    in addition to the $1.50 guaranteed for your participation.</p>

    <p>When you're ready to begin, please proceed to choose which side you'll represent: odds or evens.</p>
    
    </div>`; 

    // combine pages into blocks
    p.inst.welcome1 = {
        type: "instructions",
        pages: [welcomePage1, welcomePage2],
        show_clickable_nav: true,
    };

    p.inst.welcome2 = {
        type: "instructions",
        pages: [welcomePage3],
        show_clickable_nav: true,
    };

    p.inst.rpsIntro = {
        type: "instructions",
        pages: [rpsPage1, rpsPage2, rpsPage3, rpsPage4, rpsPage5, rpsPage6, rpsPage7],
        show_clickable_nav: true,
    };

    p.inst.rpsGetReady = {
        type: "instructions",
        pages: [rpsPage8],
        show_clickable_nav: true,
    };

    p.inst.oeIntro = {
        type: "instructions",
        pages: [oePage1, oePage2, oePage3, oePage4, oePage5],
        show_clickable_nav: true,
    };

    p.inst.oeGetReady = {
        type: "instructions",
        pages: [oePage6],
        show_clickable_nav: true,
    };

    p.inst.goodbye = {
        type: "instructions",
        pages: [goodbye],
        show_clickable_nav: true,
    };

   /*
    *
    *  TASKS
    *
    */

    p.tasks = {};

    // parameterize odds-evens
    p.tasks.oddsEvens = {
        type: 'odds-evens',
        stimulus: oddsEvens.run,
        total_rounds: 50,
    };

    // parameterize rock-paper-scissors
    p.tasks.rockPaperScissors = {
        type: 'rock-paper-scissors',
        stimulus: rockPaperScissors.run,
        total_rounds: 50,
    };

   /*
    *
    *  QUESTIONS
    *
    */

    p.Qs = {};

    // scales
    var zeroToExtremely = ['0<br>Not<br>at all', '1', '2', '3', '4', '5', '6', '7', '8<br>Extremely'];
    var zeroToALot = ['0<br>Not<br>at all', '1', '2', '3', '4', '5', '6', '7', '8<br>A lot'];

    // constructor functions
    var flowQs = function(shortName, fullName) {
        this.type = 'survey-likert';
        this.preamble = `<div class='qInfo'>

        <p><strong>Thank you for playing ` + fullName + `!</strong></p>

        <p>In your opinion, how immersive and engaging was ` + fullName + `? 
        Report the degree to which ` + fullName + ` was immersive and engaging by answering the following questions.</p></div>`;
        this.questions = [
            {prompt: 'During ' + fullName + ', to what extent did you feel immersed in what you were doing?',
            name: 'F_immersed_' + shortName,
            labels: zeroToExtremely},
            {prompt: 'During ' + fullName + ', to what extent did you feel engaged in what you were doing?',
            name: 'F_engaged_' + shortName,
            labels: zeroToExtremely},
            {prompt: 'During ' + fullName + ', to what extent did you feel absorbed in what you were doing?',
            name: 'F_absorbed_' + shortName,
            labels: zeroToExtremely},
            {prompt: 'During ' + fullName + ', to what extent did you feel engrossed in what you were doing?',
            name: 'F_engrossed_' + shortName,
            labels: zeroToExtremely},
        ];
        this.randomize_question_order = false;
        this.scale_width = 500;
    };

    var enjoyQs = function(shortName, fullName) {
        this.type = 'survey-likert';
        this.preamble = `<div class='qInfo'>

        <p>Below are a few more questions about ` + fullName + `. Instead of asking about immersion and engagement, 
        these questions ask about <strong>enjoyment</strong>. Report the degree to which ` + fullName + ` was enjoyable by answering the following questions.</p></div>`;
        this.questions = [
            {prompt: 'How much did you enjoy playing ' + fullName + '?',
            name: 'E_enjoyable_' + shortName,
            labels: zeroToALot},
            {prompt: 'How much did you like playing ' + fullName + '?',
            name: 'E_like_' + shortName,
            labels: zeroToALot},
            {prompt: 'How much did you dislike playing ' + fullName + '?',
            name: 'E_dislike_' + shortName,
            labels: zeroToALot},
            {prompt: 'How much fun did you have playing ' + fullName + '?',
            name: 'E_fun_' + shortName,
            labels: zeroToALot},
            {prompt: 'How entertaining was ' + fullName + '?',
            name: 'E_entertaining_' + shortName,
            labels: zeroToExtremely},
        ];
        this.randomize_question_order = false;
        this.scale_width = 500;
    };

    p.Qs.rpsComp1 = {
        type: 'survey-multi-choice',
        // preamble: `<div class='instructions'>

        // <p style='margin:0'>To ensure that you understand the rules of <strong>Rock, Paper, Scissors</strong> please answer the following question:</p>`,
        questions: [
            {prompt: "If <strong>you choose rock</strong> and your <strong>opponent chooses scissors</strong>, what will happen?", name: 'attnChk_rps_1', required: true, options: [
            "I will <span class='winText'>win</span>, and <span class='winText'>3 cents</span> will be added to my bonus fund.", 
            "I will <span class='loseText'>lose</span>, and <span class='loseText'>1 cent</span> will be subtracted from my bonus fund.", 
            "We will <span class='drawText'>draw</span>, and <span class='drawText'>0 cents</span> will be added to my bonus fund."]},   
        ],
    };

    p.Qs.rpsComp2 = {
        type: 'survey-multi-choice',
        // preamble: `<div class='instructions'>

        // <p style='margin:0'>To ensure that you understand the rules of <strong>Rock, Paper, Scissors</strong> please answer the following question:</p>`,
        questions: [
            {prompt: "If <strong>you choose paper</strong> and your <strong>opponent chooses scissors</strong>, what will happen?", name: 'attnChk_rps_2', required: true, options: [
            "I will <span class='winText'>win</span>, and <span class='winText'>3 cents</span> will be added to my bonus fund.", 
            "I will <span class='loseText'>lose</span>, and <span class='loseText'>1 cent</span> will be subtracted from my bonus fund.", 
            "We will <span class='drawText'>draw</span>, and <span class='drawText'>0 cents</span> will be added to my bonus fund."]}, 
        ],
    };

    p.Qs.rpsComp3 = {
        type: 'survey-multi-choice',
        // preamble: `<div class='instructions'>

        // <p style='margin:0'>To ensure that you understand the rules of <strong>Rock, Paper, Scissors</strong> please answer the following question:</p>`,
        questions: [
            {prompt: "If <strong>you choose paper</strong> and your <strong>opponent chooses paper</strong>, what will happen?", name: 'attnChk_rps_3', required: true, options: [
            "I will <span class='winText'>win</span>, and <span class='winText'>3 cents</span> will be added to my bonus fund.", 
            "I will <span class='loseText'>lose</span>, and <span class='loseText'>1 cent</span> will be subtracted from my bonus fund.", 
            "We will <span class='drawText'>draw</span>, and <span class='drawText'>0 cents</span> will be added to my bonus fund."]},   
        ],
    };

    p.Qs.oeComp1 = {
        type: 'survey-multi-choice',
        // preamble: `<div class='instructions'>

        // <p style='margin:0'>To ensure that you understand the rules of <strong>Odds vs. Evens</strong> please answer the following question:</p>`,
        questions: [
            {prompt: "If you represent <strong>odds</strong>, what happens if <strong>you choose 2</strong> and your <strong>opponent chooses 1</strong>?", name: 'attnChk_oe_1', required: true, options: [
            "I will <span class='winText'>win</span>, and <span class='winText'>3 cents</span> will be added to my bonus fund.", 
            "I will <span class='loseText'>lose</span>, and <span class='loseText'>1 cent</span> will be subtracted from my bonus fund."]},   
        ],
    };

    p.Qs.oeComp2 = {
        type: 'survey-multi-choice',
        // preamble: `<div class='instructions'>

        // <p style='margin:0'>To ensure that you understand the rules of <strong>Odds vs. Evens</strong> please answer the following question:</p>`,
        questions: [
            {prompt: "If you represent <strong>odds</strong>, what happens if <strong>you choose 2</strong> and your <strong>opponent chooses 2</strong>?", name: 'attnChk_oe_2', required: true, options: [
            "I will <span class='winText'>win</span>, and <span class='winText'>3 cents</span> will be added to my bonus fund.", 
            "I will <span class='loseText'>lose</span>, and <span class='loseText'>1 cent</span> will be subtracted from my bonus fund."]}, 
        ],
    };

    p.Qs.oeComp3 = {
        type: 'survey-multi-choice',
        // preamble: `<div class='instructions'>

        // <p style='margin:0'>To ensure that you understand the rules of <strong>Odds vs. Evens</strong> please answer the following question:</p>`,
        questions: [
            {prompt: "If you represent <strong>evens</strong>, what happens if <strong>you choose 2</strong> and your <strong>opponent chooses 2</strong>?", name: 'attnChk_oe_3', required: true, options: [
            "I will <span class='winText'>win</span>, and <span class='winText'>3 cents</span> will be added to my bonus fund.", 
            "I will <span class='loseText'>lose</span>, and <span class='loseText'>1 cent</span> will be subtracted from my bonus fund."]},   
        ],
    };

    p.Qs.rps = {
        timeline: [new flowQs('rps', 'Rock, Paper, Scissors'), new enjoyQs('rps', 'Rock, Paper, Scissors')]
    };

    p.Qs.oe = {
        timeline: [new flowQs('oe', 'Odds vs. Evens'), new enjoyQs('oe', 'Odds vs. Evens')]
    };

    p.Qs.demographics = (function() {
        var oeFamiliar = {
            type: 'html-button-response',
            stimulus: '<p>Have you ever played Odds vs. Evens in real life?</p>',
            choices: ['Yes', 'No'],
        };  
        var rpsFamiliar = {
            type: 'html-button-response',
            stimulus: '<p>Have you ever played Rock, Paper, Scissors in real life?</p>',
            choices: ['Yes', 'No'],
        };  
        var gender = {
            type: 'html-button-response',
            stimulus: '<p>Gender:</p>',
            choices: ['Male', 'Female', 'Other', 'Prefer not to answer'],
        };
        var age = {
            type: 'survey-text',
            questions: [{prompt: "Age:", name: "age"}],
        }; 
        var ethnicity = {
            type: 'html-button-response',
            stimulus: '<p>Ethnicity:</p>',
            choices: ['White / Caucasian', 'Black / African American','Asian / Pacific Islander', 'Hispanic', 'Native American', 'Other', 'Prefer not to answer'],
        };
        var english = {
            type: 'html-button-response',
            stimulus: '<p>Is English your native language?</p>',
            choices: ['Yes', 'No'],
        };  
        var finalWord = {
            type: 'survey-text',
            questions: [{prompt: "Questions? Comments? Complains? Provide your feedback here!", rows: 10, columns: 100, name: "finalWord"}],
        };
        var email = {
            type: 'survey-text',
            questions: [{prompt: "", placeholder: "Prolific ID", name: "PID", columns: 50, required: true}],
            button_label: ['CLICK HERE TO FINISH'], 
            preamble: function() {
                var rpsTotalCents = (rockPaperScissors.data.pScore*3) - rockPaperScissors.data.cScore;
                var oeTotalCents = (oddsEvens.data.pScore*3) - oddsEvens.data.cScore;
                var totalCents = rpsTotalCents + oeTotalCents;
                var totalDollars = totalCents/100;
                console.log(totalCents, totalDollars);
                return `<p>Thank you for participating!</p><p>In total, you won <b>$${totalDollars}</b> in bonus money!
                <br>Within one week, you will receive your bonus money. Your $1.50 for participating will be delivered immediately.</p>
                <p>To receive payment, enter your Prolific ID in the space below.</p>`
            },
        };
        var demos = {
            timeline: [oeFamiliar, rpsFamiliar, gender, age, ethnicity, english, finalWord, email]
        };

        return demos;
    }());

    return p;
}());


// save condition, date, and time

jsPsych.data.addProperties({
    condition: exp.data.order,
    date: new Date(),
    PROLIFIC_PID: jsPsych.data.getURLVariable('subject'),
});

// create timeline
if (exp.data.order == 0) {
    var timeline = [
    exp.inst.welcome1,
    exp.inst.rpsIntro,
    exp.Qs.rpsComp1,
    exp.Qs.rpsComp2,
    exp.Qs.rpsComp3,
    exp.inst.rpsGetReady,
    exp.tasks.rockPaperScissors,
    exp.Qs.rps,
    exp.inst.welcome2,
    exp.inst.oeIntro,
    exp.Qs.oeComp1,
    exp.Qs.oeComp2,
    exp.Qs.oeComp3,
    exp.inst.oeGetReady,
    exp.tasks.oddsEvens,
    exp.Qs.oe,
    exp.inst.goodbye,
    exp.Qs.demographics,
    ];
} else if (exp.data.order == 1) {
    var timeline = [
    exp.inst.welcome1,
    exp.inst.oeIntro,
    exp.Qs.oeComp1,
    exp.Qs.oeComp2,
    exp.Qs.oeComp3,
    exp.inst.oeGetReady,
    exp.tasks.oddsEvens,
    exp.Qs.oe,
    exp.inst.welcome2,
    exp.inst.rpsIntro,
    exp.Qs.rpsComp1,
    exp.Qs.rpsComp2,
    exp.Qs.rpsComp3,
    exp.inst.rpsGetReady,
    exp.tasks.rockPaperScissors,
    exp.Qs.rps,
    exp.inst.goodbye,
    exp.Qs.demographics,
    ];
}

// initiate timeline
jsPsych.init({
   timeline: timeline,
   on_finish: function() {
       firebase.database().ref(firebase.auth().currentUser.uid).set({
           data: jsPsych.data.get().values()
        });
        document.body.innerHTML = '<p><p><p align="center">Thank you for participating in the study!<p align="center"><b>You will be automatically re-directed to Prolific in a few moments.</b></p>';
        setTimeout(function () { location.href = "https://app.prolific.co/submissions/complete?cc=865BE374" }, 5000);
   }
});
