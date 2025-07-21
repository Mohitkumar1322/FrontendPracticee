let boxes=document.querySelectorAll('.box');
let playerTurn=document.querySelector('.player-turn');
let resetButton=document.querySelector('.reset');

let turnO= true;

const winPatterns=[
    [0, 1, 2],
    [3, 4, 5],
]