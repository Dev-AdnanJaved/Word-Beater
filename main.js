//MAking Input Field Disable
document.getElementById('input').disabled = true;

let start = document.getElementById('start-Btn');




document.addEventListener('DOMContentLoaded', (() => {

    start.addEventListener('click', (() => {
        document.getElementById('input').disabled = false;
        document.getElementById('start-div').innerHTML = "";
        document.getElementById('score').textContent = 0;
        newScore = 0;
        startTimer();
        arrayWord();
    }))

}));



let randomIndex;
let newScore = 0;
let timer = 5;
let interval;

//Getting Input
let input = document.getElementById('input');
input.addEventListener('keydown', checkWord);

//Getting Score
let score = document.getElementById('score');

//Geting Time
let time = document.getElementById('time');

//Getting Wrong_Word
let wrong_Word = document.getElementById('wrong');

//Getting Over
let over = document.getElementById('over');


const words = [
  "basketball", "brainstorm", "complicated", "background",
  "wavelengths", "lighthouse", "houseplant", "playground",
  "blindsided", "refreshment", "volleyball", "chalkboard",
  "timekeeper", "dishwasher", "middlemost", "journalism",
  "goalscorer", "agriculture", "noticeable", "frameworks",
  "schoolmate", "earthquake", "speedlight", "bookmarked",
  "subheading", "undertaker", "fingerpick", "daydreamer",
  "brainpower", "livelihood", "librarians", "everything",
  "background", "battlezone", "multiplayer", "strawberry",
  "narratives", "stationary", "controllers", "motorcycle",
  "spaceships", "storefront", "skateboard", "projectors",
  "crossroads", "aftershock", "fundraiser", "underrated",
  "sweetheart", "rattlesnake"
];



//Generate a random index for Array
function arrayWord() {

    randomIndex = Math.floor((Math.random()) * words.length);

    document.getElementById('word').textContent = words[randomIndex];

}


//Timer Managing
function startTimer() {

    clearInterval(interval);

    timer = 5;
    time.textContent = timer;

    interval = setInterval(() => {

        timer--;
        time.textContent = timer

        if (timer == 0) {
            clearInterval(interval);
            over.textContent = "Game Over"
            input.disabled = true;

            document.getElementById('btn-div').innerHTML = `<button id="restart"  class="btn yellow-btn">Restart</button>`

            //Getting Restart
            let restart = document.getElementById('restart'); // restart button id

            restart.addEventListener('click', restartEvent)

        }

    }, 1000)

}

//restart Function
function restartEvent() {
    over.innerHTML = "";
    wrong_Word.textContent = "";
    input.disabled = false;
    input.value = "";
    //MAke the Score 0
    newScore = 0;
    //Make the score 0 in UI
    score.textContent = 0;
    //Remove Start Button
    document.getElementById('btn-div').innerHTML = "";

    startTimer();
    arrayWord();
}
//Check number is correct or wrong
function checkWord(e) {


    if (e.key === 'Enter') {

        if (input.value.trim() === words[randomIndex]) {

            //To Disappear Wrong Word after entering Correc WOrd   
            wrong_Word.innerHTML = "";
            input.value = "";

            //Score Plus 5 Every Time 
            newScore += 5;
            score.textContent = newScore

            //Timer reset and New word appear

            arrayWord();
            startTimer();


        }

        else {

            input.value = "";
            wrong_Word.textContent = "Wrong Word";
        }

    }

}



