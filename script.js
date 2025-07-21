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

//board[row][column]
//columns = index % 3;
//rows = Math.floor(index / 3);


/*
Win Cases:
1.
[
    [[1/0],[],[]],
    [[],[1/0],[]],
    [[],[],[1/0]],
]
2.
    [
       [1/0],[1/0],[1/0]],
       [[],[],[]],
       [[],[],[]],
    ]

3.
    [[],[],[]],
    [[1/0],[1/0],[1/0]],
    [[],[],[]],

4.
    [[],[],[]],
    [[],[],[]],
    [[1/0],[1/0],[1/0]],

5.

[
    [[],[],[1/0]],
    [[],[1/0],[]],
    [[1/0],[],[]],
]
6.

[
    [[1/0],[],[]],
    [[1/0],[],[]],
    [[1/0],[],[]],
]
7.
[
    [[],[1/0],[]],
    [[],[1/0],[]],
    [[],[1/0],[]],
]
8.
[
    [[],[],[1/0]],
    [[],[],[1/0]],
    [[],[],[1/0]],
]
*/

let rows = 0;
let columns = 0;
let storePoints = (element,index)  => {
    rows = Math.floor(index / 3);
    columns = index % 3;
    // console.log( "rows" + rows, "columns" + columns);
    board[rows][columns].push(element);

}

let checkWinner = () =>{
    for(let i in board){
        // check horizontal
        if(board[i][0][0] === 1 && board[i][1][0] === 1 && board[i][2][0] === 1){
            console.log(" X is winner");
            return;
        }
        else if(board[i][0][0] === 0 && board[i][1][0] === 0 && board[i][2][0] === 0){
            console.log(" O is winner");
            return;
        }
        
        //check vertical
        else if(board[0][i][0] === 1 && board[1][i][0] === 1 && board[2][i][0] === 1){
            console.log(" X is winner");
        }
        else if(board[0][i][0] === 0 && board[1][i][0] === 0 && board[2][i][0] === 0){
            console.log("O is winner")
        }
        // check diagonal \
        else if(board[0][0][0] === 1 && board[1][1][0] === 1 && board[2][2][0] === 1){
            console.log(" X is winner");
        }
        else if(board[0][0][0] === 0 && board[1][1][0] === 0 && board[2][2][0] === 0){
            console.log(" O is winner");
        }
        // check diagonal /
        else if(board[0][2][0] === 1 && board[1][1][0] === 1 && board[2][0][0] === 1){
            console.log(" X is winner");
        }
        else if(board[0][2][0] === 0 && board[1][1][0] === 0 && board[2][0][0] === 0){
            console.log(" O is winner");
        }
        
    }
}



blocks.forEach((element,index) => {

    element.addEventListener("click", () => {
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

       checkWinner();
        // console.log(board[0][0],board[0][1],board[0][2]);
    })

});


