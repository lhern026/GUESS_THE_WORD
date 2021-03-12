/*----- constants -----*/
const words = ['donkey', 'monkey', 'fought', 'hungry', 'covers', 'friend'];






/*----- app's state (variables) -----*/
let winner, chosenLetters, movesLeft, word ;

//array of letters guessed wrong and one of right
//disable buttons in render when they get it wrong



/*----- cached element references -----*/

const msgEl = document.getElementById('msg');
const replayBtn = document.querySelector('.replay');
const turnsLeft =document.getElementById('turnsLeft');
const keyboard = document.querySelectorAll('.keyboard > button')







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
    if (chosenLetters.includes(letter)){
        return;
        
    }else{
        chosenLetters.push(letter)
    };
    
    //decrease the number of guesses only if it is wrong
    if (!word.includes(letter)){ 
        (movesLeft--);
        
    };
    
    
    //if chosen letters carries all of the strings in word declare winner
    //array iterator every -convert word into array
    getWinner();
    

    
    
   
    //if all chosen letters within word have been chosen winner=true
    
    
    render(); 
}

function getWinner(){
    let wordSplit = word
    //if my chosen letters are inside my chosen word declare winner
    if (chosenLetters.includes(wordSplit)){
        console.log('yo')
    }
    console.log(wordSplit.includes(chosenLetters))
    console.log(wordSplit)
}
function init(){
    
    winner = null;
    movesLeft = 6;
    chosenLetters = [];
        
    word = Math.floor(Math.random() *words[0]);
    //randomize after same wor dis working
    render();

}
function render(){
    //rendering the board
        //reset the color of all the buttons to whites
        keyboard.forEach(btn => btn.style.background = 'white')
        //split up pseudo
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
        //if letter is in word i can show the letter
        word.split('').forEach((letter,idx) => {
            if (chosenLetters.includes(letter)){
                document.getElementById(`l${idx}`).innerText = letter;
            }
        });
        document.getElementById('movesLeft').innerText= `${movesLeft} moves left`;
        
        
        //if winner show message 
        if (winner == true){
            document.getElementById('msg').textContent = 'You win🥵';
        }

        

        
        //hide images in relation to gueses left 
        
        document.getElementById(`${movesLeft}`).style.visibility = 'hidden';
        
        
        
        
        
        

        
        
        
        
    }
