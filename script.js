"use strict";
const blocks = document.querySelectorAll(".block");
const x = `
    <div class="x_div">
        <div class="line_1 x_writing1"></div>
        <div class="line_2 x_writing2"></div>
    </div>`;

const o = `
    <div class="circle circle_writing "></div>
    `;

let clickCount = 0;

let board = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
]

// start game varibles 
let startGameBtn = document.querySelector(".start_btn");
let resetGameBtn = document.querySelector(".reset_btn");
let starterText = document.querySelector(".starter_text");

startGameBtn.addEventListener("click", () =>{
    blocks.forEach((element) => {
        element.classList.add("start_game");

    })
    starterText.classList.add("text_disappear");
})

let rows = 0;
let columns = 0;
let storePoints = (element,index)  => {
    rows = Math.floor(index / 3);
    columns = index % 3;
    // console.log( "rows" + rows, "columns" + columns);
    board[rows][columns].push(element);

}

let winner = false;

//check winner logic, it should be improved!!
let checkWinner = (element) =>{
    for(let i in board){
        // check horizontal
        if(board[i][0][0] === 1 && board[i][1][0] === 1 && board[i][2][0] === 1){
            console.log(" X is winner");
            winner = true;

            return;
        }
        else if(board[i][0][0] === 0 && board[i][1][0] === 0 && board[i][2][0] === 0){
            console.log(" O is winner");
            winner = true;
            return;
        }
        
        //check vertical
        else if(board[0][i][0] === 1 && board[1][i][0] === 1 && board[2][i][0] === 1){
            console.log(" X is winner");
            winner = true;

        }
        else if(board[0][i][0] === 0 && board[1][i][0] === 0 && board[2][i][0] === 0){
            console.log("O is winner")
            winner = true;

        }
        // check diagonal \
        else if(board[0][0][0] === 1 && board[1][1][0] === 1 && board[2][2][0] === 1){
            console.log(" X is winner");
            winner = true;

        }
        else if(board[0][0][0] === 0 && board[1][1][0] === 0 && board[2][2][0] === 0){
            console.log(" O is winner");
            winner = true;

        }
        // check diagonal /
        else if(board[0][2][0] === 1 && board[1][1][0] === 1 && board[2][0][0] === 1){
            console.log(" X is winner");
            winner = true;

        }
        else if(board[0][2][0] === 0 && board[1][1][0] === 0 && board[2][0][0] === 0){
            console.log(" O is winner");
            winner = true;

        }
        else{
            winner = false;
        }
        
    }
}



blocks.forEach((element,index) => {

   
    element.addEventListener("click", () => {

        if(winner || element.innerHTML.trim() !== ""){
            return;
        }
        else{
            console.log(clickCount)
            if(clickCount === 8){
                console.log("Tie");
            }
        }
        clickCount++;
        if(element.innerHTML.trim() === ""){

            if(clickCount % 2 === 1){
                element.innerHTML = x;
                storePoints(1,index);
            }
            else if(clickCount % 2 === 0){
                element.innerHTML = o;
                storePoints(0,index);
            }
        }

       checkWinner(element);
     
        // console.log(board[0][0],board[0][1],board[0][2]);
    })

});
resetGameBtn.addEventListener("click", () => {
    clickCount = 0;
    blocks.forEach((element) => {
        element.innerHTML = "";
    })
    board = [
        [[],[],[]],
        [[],[],[]],
        [[],[],[]],
    ]
})


