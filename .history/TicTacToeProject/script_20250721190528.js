let boxes=document.querySelectorAll('.box');
let playerTurn=document.querySelector('.player-turn');
let resetButton=document.querySelector('.reset');

let turnO= true;

const winPatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
    });
});

const checkWinner=()=>{
    for(pattern of winPatterns){
        const [a, b, c] = pattern;
        if(boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText){
            playerTurn.innerText = `Player ${boxes[a].innerText} wins!`;
            boxes.forEach(box => box.disabled = true);
            return;
        }
    }
}