let computerguess;
let userguess = [];
let userguessupdate = document.getElementById('textoutput');
let userNumberUpdate = document.getElementById('inputbox');
let audio = new Audio("./Audio/mario.mp3")

const init = () =>{
    computerguess = Math.floor(Math.random() * 100);
    document.getElementById("newgamebutton").style.display="none";
    document.getElementById("gamearea").style.display="none";
};

const startgame = () =>{
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gamearea").style.display="block";
}

// Start new game
const startNewGame = () => {
    document.getElementById("newgamebutton").style.display="inline";
    userNumberUpdate.setAttribute('disabled', true);
};

// Reload the page
const newGameBegin = () => {
    audio.play();
    window.location.reload();
};

//main logic 
const compareguess = () =>{
    audio.play();
    const userNumber = document.getElementById('inputbox').value;
    console.log(userNumber);
    userguess = [...userguess, userNumber];
    document.getElementById('Guesses').innerHTML= userguess;

    // Check the value low or high
    if (userguess.length < maxGuess){if (userNumber > computerguess){
        userguessupdate.innerHTML= "Your Guess is Heigh"
        userNumberUpdate.value = "";
        
    } else if (userNumber < computerguess){
        userguessupdate.innerHTML= "Your Guess is Low"
        userNumberUpdate.value = "";
        
    } else{
        userguessupdate.innerHTML = "It's Correct !Hurry"
        userNumberUpdate.value = "";
        startNewGame ();
    }}else{
        if (userNumber > computerguess){
            userguessupdate.innerHTML= `You Loss !! Correct Number Was ${computerguess}`;
            userNumberUpdate.value = "";
            startNewGame ();
            
        } else if (userNumber < computerguess){
            userguessupdate.innerHTML= `You Loss !! Correct Number Was ${computerguess}`;
            userNumberUpdate.value = "";
            startNewGame ();
            
        } else{
            userguessupdate.innerHTML = "It's Correct !Hurry"
            userNumberUpdate.value = "";
            startNewGame ();
            
        }
    }

    document.getElementById('attempts').innerHTML = userguess.length;
};

const easymode = () =>{
    audio.play();
    maxGuess = 10;
    startgame();
}

const hardmode = () =>{
    audio.play();
    maxGuess = 5;
    startgame();
}

