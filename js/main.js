/*----- constants -----*/
const words = ['donkey', 'monkey', 'picnic', 'hungry', 'covers', 'friend'];



/*----- app's state (variables) -----*/
let winner, keyboard, movesLeft ;



/*----- cached element references -----*/

const msgEl = document.getElementById('msg');
const replayBtn = document.querySelector('button');
const usedLetters = [...document.querySelectorAll('#keyboard > div')];
const guessDisplay = document.querySelector('.display');
const turnsLeft = document.querySelector('h3');



/*----- event listeners -----*/
document.querySelector('.keyboard')
    .addEventListener('click', handle);
    
    
replayBtn.addEventListener('click', init);



/*----- functions -----*/
init();
function handle(evt){
    
}
function init(){
    winner = null;
    movesLeft = 10;
    keyboard = [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g' ,
        'h', 'i', 'j', 'k', 'l', 'm', 'n' ,
        'o', 'p', 'q', 'r', 's', 't', 'u' ,
        'v', 'w', 'x', 'y', 'z']
    ];
    render();

}
function render(){
    //rendering the board
    
    

    })

    }

