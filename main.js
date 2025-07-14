

document.addEventListener('DOMContentLoaded', (()=>{

    startTimer();
    arrayWord();
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
  "Planet", "Rocket", "Puzzle", "Guitar", "Spirit",
  "Bright", "Travel", "Jumper", "Circle", "Monkey",
  "Orange", "Button", "Castle", "Spring", "Target",
  "Breeze", "Window", "School", "Laptop", "Bridge",
  "Tunnel", "Friend", "Forest", "Silver", "Drawer",
  "Doctor", "Wizard", "Battle", "Candle", "Remote",
  "Golden", "Flight", "Bounty", "Strong", "Danger",
  "Motion", "Simple", "Action", "Holder", "Desert",
  "Hunter", "Trophy", "Garden", "Device", "Report",
  "Bucket", "Secret", "Couple", "Bottle", "Runner"
];


//Generate a random index for Array
function arrayWord() {

randomIndex = Math.floor((Math.random()) * words.length);    

 document.getElementById('word').textContent = words[randomIndex];

}


//Timer Managing
function startTimer (){

    clearInterval(interval);
 
    timer = 5;

    interval = setInterval(()=> {

    timer--;
    time.textContent = timer

    if ( timer == 0 ) {
        clearInterval(interval);
        over.textContent = "Game Over"
        input.disabled = true;

    document.getElementById('btn-div').innerHTML = `<button id="btn-yellow"  class="btn yellow-btn">Restart</button>`
    
    //Getting Restart
    let restart = document.getElementById('restart');

    restart.addEventListener('click', restartEvent) 

 }
 
    }, 1000)
    
}

//Check number is correct or wrong

function checkWord(e){


    if (e.key === 'Enter'){

        if (input.value.trim() === words[randomIndex] ) {
        
            console.log("correct");
            input.value ="";
        
        //Score Plus 5 Every Time 
            newScore += 5;
            score.textContent = newScore

        //Timer reset and New word appear

        arrayWord();
        startTimer();
       

        }

        else {
            wrong_Word.textContent = "Wrong Word";
        }
       
    } 




}


    
