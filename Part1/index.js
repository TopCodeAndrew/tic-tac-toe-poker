


let board = [];




function play(clickedId){
    const playerSpan = document.getElementById('player');
    clickedElement = document.getElementById(clickedId)

    

    if (playerSpan.innerText === "X") {
        playerSpan.innerText = 'O';
        clickedElement.innerText = "X";
        board[clickedId] = "X"
    } else {        
        playerSpan.innerText = "X";
        clickedElement.innerText = "O";
        board[clickedId] = "O"
    }
    console.log(board);
    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];
    
    console.log(topLeft, middleCenter, bottomRight)
    
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`Team ${topLeft} wins!`);
      }
      if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
          alert(`Team ${topLeft} wins!`);
      }
      if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
          alert (`Team ${topLeft} wins`);
      }
      if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
          alert(`Team ${topCenter} wins!`);
      }
      if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(`Team ${topRight} wins!`);
    } 
        if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`Team ${middleLeft} wins!`);
    }
        if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
            alert(`Team ${bottomLeft} wins!`);
    }
        if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
            alert(`Team ${bottomLeft} wins!`);
    }
        else if (topLeft !== undefined && topCenter !== undefined && topRight !== undefined && 
            middleLeft !== undefined && middleCenter !== undefined && middleRight !== undefined && 
            bottomLeft !== undefined && bottomCenter !== undefined && bottomRight !== undefined) {
                alert(`Neither Team X or Team O win...it is a cat's game!`)
            }
};


