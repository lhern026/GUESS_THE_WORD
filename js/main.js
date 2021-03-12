/*----- constants -----*/
//make six possible words to enter 
const words = ['donkey', 'monkey', 'fought', 'hungry', 'covers', 'friend'];
//image to display at the end


/*----- app's state (variables) -----*///

//I want to check whether I have or winner or not
let winner, chosenLetters, movesLeft, word, rightGuesses;

//array of letters guessed wrong and one of right
//disable buttons in render when they get it wrong

/*----- cached element references -----*/

const msgEl = document.getElementById('msg');
const replayBtn = document.querySelector('.replay');

const keyboard = document.querySelectorAll('.keyboard > button')
const display = document.querySelectorAll('.display > div')


/*----- event listeners -----*/
document.querySelector('.keyboard')
    .addEventListener('click', handle);
    
    
replayBtn.addEventListener('click', init);
    


/*----- functions -----*/
init();

function handle(evt){
    // A marker has been clicked, update all
  // impacted state, call render
    if (!movesLeft) return;
      //if winner return
    if (winner)return;

    

    const letter = (evt.target.innerText);

    //if chosen letters is already a letter dont do anything
    //add to chosen letters array

    getChosenLetter();

    function getChosenLetter(){
        if (chosenLetters.includes(letter)){
            return;
            
        }else{
            chosenLetters.push(letter)
        };
        };
    //decrease the number of guesses only if it is wrong
    //get moves left
    getMovesLeft();
    function getMovesLeft(){
        if (!word.includes(letter)){ 
            (movesLeft--);
            
        };
        };
    getGuessesRight();
    function getGuessesRight() { 
        if (word.includes(letter)){
            (rightGuesses++);
            console.log(rightGuesses)
        }
    };
    
    
    
    
    render(); 
}


function init(){
    
    winner = null;
    movesLeft = 6;
    chosenLetters = [];
    rightGuesses = 0;
        
    word =words[Math.floor(Math.random()*6)];
    //randomize after same word is working
    render();

}
// isThereWinner();

function render(){
    //rendering the board
        //reset the color of all the buttons to whites
   
    keyboard.forEach(btn => btn.style.background = 'white')
    //empty correct letters 
    display.forEach(displayEl => displayEl.innerText = '')
    //display initial message again
    msgEl.innerHTML = "🙃Lets play a game🙃";

    //reset to initial picture
    //use this if winner is true
    // document.getElementById('5').style.visibility = '';
    


    //display if they win
    if (winner == true){
        document.getElementById('msg').textContent = 'You win🥵';
    }
    
    //if chosen letters carries all of the strings in word declare winner
    //array iterator every -convert word into array
    // are chosen letters in word
    
    // word.every();
   //you'll want to render your A - Z elements based upon whether they've been used or not.  It's also a nice touch to render the correctly used ones in one color and the wrongly used ones in a different color.
        //if letter chosen is in words[0] display key color red if wrong  color is black 
        chosenLetters.forEach(function(letter){
            // check if letter = letter in string word
            
            if (word.includes(letter)){
                document.getElementById(letter).style.background = 'red';

             }else{
                document.getElementById(letter).style.background = 'black';
            }
            
        });

        // make header  say you lose if you are out of moves
        


        //if letter is in word i can show the letter
        word.split('').forEach((letter,idx) => {
            if (chosenLetters.includes(letter)){
                document.getElementById(`l${idx}`).innerText = letter;
            }
        });
        document.getElementById('movesLeft').innerText= `${movesLeft} moves left`;
        
        
        
        // make header  say you lose if you are out of moves
        if(movesLeft ==0){
            document.getElementById('msg').innerHTML = 'you lose pal🥵';
        }


        //hide images in relation to gueses left 
        
        document.getElementById(`${movesLeft}`).style.visibility = 'hidden';
        
    };
    // getWinner();
    // function getWinner () {
    //     if (rightGuesses == 6){
    //         winner = true;
    //     };
    // };