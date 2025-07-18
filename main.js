const easy = [
  "Apple", "ball", "Cat", "dog", "egg", "Fish", "goat", "Hat", "ice", "Jam",
  "kite", "Lamp", "man", "Net", "owl", "Pen", "queen", "Rat", "Sun", "Toy",
  "Umbrella", "van", "Water", "xray", "Yak", "Zebra", "air", "bed", "Cup", "desk",
  "Ear", "fan", "Game", "hand", "ink", "Jar", "King", "leaf", "Milk", "nose",
  "Open", "Pig", "Quiz", "Red", "star", "Tree", "Under", "vase", "Wall", "xylophone",
  "yarn", "Zoo", "arch", "Blue", "cheese", "drum", "Enter", "fast", "gift", "high",
  "iron", "Joke", "key", "line", "Moon", "nine", "orange", "plate", "Quick", "run",
  "snow", "top", "use", "voice", "win", "xmas", "yummy", "zero", "angel", "block",
  "chair", "dream", "east", "flag", "gold", "hill", "icecream", "jump", "kind", "lake",
  "mouse", "nail", "Open", "park", "quiet", "rain", "stone", "Tent", "unit", "vote"
];
const medium = [
  "Beacon", "bottle", "Canvas", "Danger", "Effort", "frozen", "Gadget", "Handle", "Island", "Journey",
  "Kernel", "laptop", "Mission", "Notion", "Option", "Puzzle", "Quarter", "Rocket", "Signal", "Tunnel",
  "Unique", "Vision", "Wonder", "Xenon", "Yield", "Zipper", "Aspect", "border", "Cancel", "Design",
  "Engine", "forest", "Glider", "Helmet", "impact", "Jungle", "Knight", "Ladder", "Mirror", "notice",
  "Output", "Planet", "Quest", "Radius", "Sketch", "Target", "Update", "Volume", "Whisper", "Xtreme",
  "Yogurt", "Zealot", "Access", "Backup", "Circle", "Divide", "Energy", "Fancy", "Giant", "Hostel",
  "ignore", "Justice", "Kettle", "Launch", "Manage", "Normal", "Option", "Pilot", "Quote", "Reboot",
  "Stable", "Theory", "Upload", "Visual", "Widget", "Xpress", "Yielded", "Zealous", "Airport", "Budget",
  "Cactus", "Driver", "Effort", "Fusion", "Graph", "Hurdle", "Identity", "Jumper", "Keeper", "Lesson",
  "Motion", "Notice", "Object", "Portal", "Query", "Random", "Stripe", "Thread", "Urgent", "Victory"
];

const hard = [
  "Abyss", "Blizzard", "Cryptic", "Drought", "Eclipse", "Friction", "Galaxy", "Hazard", "Inertia", "Junction",
  "Kryptic", "Labyrinth", "Magnitude", "Nebula", "Oblivion", "Paradox", "Quantum", "Resonance", "Schematic", "Turbulent",
  "Uncharted", "Vortex", "Wavelength", "Xylotomy", "Yielding", "Zeppelin", "Alchemy", "Bandwidth", "Conundrum", "Derivative",
  "Empirical", "Fractal", "Gyroscope", "Hyperlink", "Inference", "Jurisdiction", "Keystone", "Longitude", "Momentum", "Nomenclature",
  "Oscillate", "Phenomenon", "Quarantine", "Retrograde", "Symbiotic", "Topography", "Ubiquity", "Vigilante", "Wanderlust", "Xenolith",
  "Yearning", "Zygote", "Algorithm", "Binary", "Calibration", "Dissonance", "Equinox", "Flux", "Granular", "Heuristic",
  "Interpolation", "Juxtapose", "Kaleidoscope", "Logarithmic", "Mythology", "Nonlinear", "Optimization", "Polarize", "Quotient", "Relativity",
  "Singularity", "Transcend", "Ultrasound", "Vectorial", "Whimsical", "Xenogenesis", "Yonder", "Zealotry", "Abstract", "Breakpoint",
  "Cognition", "Degenerate", "Ethereal", "Fathomless", "Graviton", "Hologram", "Intuition", "Jetstream", "Knighthood", "Lexicon",
  "Manifold", "Neutrino", "Obsidian", "Prophecy", "Recursion", "Semantics", "Topology", "Unison", "Variance", "Wavelength"
];


let words = [];


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

//Get Setting Icon//
// let setting = document.getElementById('setting');

//MAking Input Field Disable
document.getElementById('input').disabled = true;

let start = document.getElementById('start-Btn');

let difficulty ="";



document.addEventListener('DOMContentLoaded', (() => {

// //setting icon to hide  and appear difficulty 
// setting.addEventListener('click', () => {
//   document.querySelectorAll('.difficulty-btns').forEach(btnGroup => {
//     btnGroup.classList.toggle('hidden');
//   });
// });

//Difficulty Level//

document.querySelectorAll('.difficulty-btn').forEach((btn) => {
  btn.addEventListener("click", getDifficulty);
})

function getDifficulty(e) {
  
  //Removing class Selected from all buttons if exist
document.querySelectorAll('.difficulty-btn').forEach((btn) => {
    btn.classList.remove('selected');

    //removing Please difficlty text
  document.getElementById('select-difficulty').textContent = '';

})

e.target.classList.add('selected')

   difficulty = e.target.dataset.difficulty;
  // console.log (difficulty);
}

    start.addEventListener('click', (() => {

 if (!difficulty) {
 
  document.getElementById('select-difficulty').textContent = 'Please Select Difficulty';
return;
 }

 else {
    
  //removing difficulty buttons//
  document.querySelector('.diffculty-btns').style.display = 'none' ;
  
  //removing Please difficlty text
  document.getElementById('select-difficulty').textContent = '';




        document.getElementById('input').disabled = false;
        document.getElementById('start-div').innerHTML = "";
        document.getElementById('score').textContent = 0;
        newScore = 0;

         //Autofocus on input Field after restarting
         input.focus();
    




//Starting Game
        startTimer();
        arrayWord();
 }
  }))

})) ;










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

             //Appearing difficulty buttons//
             document.querySelector('.diffculty-btns').style.display = 'block' ;
   

            document.getElementById('btn-div').innerHTML = `<button id="restart"  class="btn yellow-btn">Restart</button>`

            //Getting Restart
            let restart = document.getElementById('restart'); // restart button id

            restart.addEventListener('click', restartEvent)

        }

    }, 1000)

    //Checking difficulty Everytime//

  if (difficulty == "easy") { words = easy };
  if (difficulty == "medium") { words = medium };
  if (difficulty == "hard") { words = hard };

}

//restart Function
function restartEvent() {

  //removing difficulty buttons//
  document.querySelector('.diffculty-btns').style.display = 'none' ;

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
    //Autofocus on input Field after restarting
    input.focus();

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



