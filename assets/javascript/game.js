var targetScore = $("#target-score");
var wins = $("#win-counter");
var loss = $("#loss-counter");
var yourScore = $("#your-score");
var crystalsImage = [];
var numOfCrystals = 4;
var winCounter, lossCounter, target, calculatedScore = 0;

function getNewTargetNumber() {
    // random number from 19 to 120
    var score = Math.floor(Math.random() * 101) + 19;
    return score;
}

function getNewCrystalNumber() {
    // random number from 1 to 12
    var score = Math.floor(Math.random() * 11) + 1;
    return score;
}

function reset() {
    // new target number and new number for each crystal ball and zero your score 
    target = getNewTargetNumber();
    calculatedScore = 0;
    for (var i = 0; i < numOfCrystals; i++) {
        crystalsImage[i].attr("data-crystalvalue", getNewCrystalNumber());
    } 
    display();   
}

function display() {
    targetScore.text(target);
    wins.text(winCounter);
    loss.text(lossCounter);
    yourScore.text(calculatedScore);
}

function init() {
    // the first time initialize the board and load crystal images
    winCounter = 0;
    lossCounter = 0;  
    calculatedScore = 0;
    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numOfCrystals; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", "./assets/images/" + i + "-crystal.jpg");

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
        crystalsImage.push(imageCrystal);
    }
    reset();    
}

init();

$(".crystal-image").on("click", function () {
    // listen to click event and calculate your score
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    calculatedScore += crystalValue;
    display();
    
    if (calculatedScore === target) {
        //Won and reset the board
        winCounter ++;
        setTimeout(function(){reset();}, 800);  
    }
    if (calculatedScore > target) {
        //Lost and reset the board
        lossCounter ++;
        setTimeout(function(){reset();}, 800);       
    }   
});
