var targetScore = $("#target-score");
var wins = $("#win-counter");
var loss = $("#loss-counter");
var yourScore = $("#your-score");
var crystalImages = [
    $("<img src=./assets/images/0-crystal.jpg>"),
    $("<img src=./assets/images/1-crystal.jpg>"),
    $("<img src=./assets/images/2-crystal.jpg>"),
    $("<img src=./assets/images/3-crystal.jpg>")
];
var winCounter, lossCounter, target, calculatedScore = 0;

function getNewTargetNumber() {
    // random number from 19 to 120, Math.floor(Math.random() * (max - min + 1)) + min
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

function getNewCrystalNumber() {
    // random number from 1 to 12, Math.floor(Math.random() * (max - min + 1)) + min
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

function display() {
    targetScore.text(target);
    wins.text(winCounter);
    loss.text(lossCounter);
    yourScore.text(calculatedScore);
}

function reset() {
    // reset your score, new target number and new number for each crystal  
    calculatedScore = 0;
    target = getNewTargetNumber();
    for (var i = 0; i < crystalImages.length; i++) {
        crystalImages[i].attr("data-crystalvalue", getNewCrystalNumber());
    }
    display();
}

function init() {
    // the first time initialize the board and load crystal images
    winCounter = 0;
    lossCounter = 0;
    calculatedScore = 0;
    for (var i = 0; i < crystalImages.length; i++) {
        crystalImages[i].addClass("crystal-image");
        $("#crystals").append(crystalImages[i]);
    }
}

init();
reset();

$(".crystal-image").on("click", function () {
    // listen to click event and calculate your score
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    calculatedScore += crystalValue;

    display();

    if (calculatedScore === target) {
        //Won and reset the board
        winCounter++;
        setTimeout(function () { reset(); }, 200);
    }
    if (calculatedScore > target) {
        //Lost and reset the board
        lossCounter++;
        setTimeout(function () { reset(); }, 200);
    }
});
