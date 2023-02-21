import { Component, Output, EventEmitter } from '@angular/core';
import { player } from 'src/app/player';
import { cell } from 'src/app/cell';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  player1 = new player(1, 'red');
  player2 = new player(2, 'yellow');
  currentPlayer = this.player1
  winner : number = 0
  message = ""
  gameOver = false

  rows : number[] = [0,1,2,3,4,5]
  cols : number[] = [0,1,2,3,4,5,6]
  cellColor : string = "lightgrey"
  cells = this.createGrid(this.rows.length, this.cols.length, this.cellColor)


  fourInARow(tokens : string[], tokenColor : string) : boolean{
    // console.log(tokens)
    let count = 0

    for(let i=0; i < tokens.length; i++){
      if(tokens[i] == tokenColor){
        count++
      }else{
        count = 0
      }

      if(count == 4){
        return true
      }
    }
    return false
  }

  checkForWin(row : number, col : number, tokenColor : string){
    let tokensInRow = this.getTokensAtRow(row)
    let tokensInCol = this.getTokensAtCol(col)
    let tokensInAscendingDiag = this.getAscendingDiagAt(row, col)
    let tokensInDescendingDiag = this.getDescendingDiagAt(row, col)

    let tokenArrays = [tokensInRow, tokensInCol, tokensInAscendingDiag, tokensInDescendingDiag]

    console.log("Check for win:", tokenArrays[2])
    console.log(row, col)
    for(let i = 0; i < tokenArrays.length; i++){
    
      if(this.fourInARow(tokenArrays[i], tokenColor) == true){
        this.winner = this.currentPlayer.getPlayerNumber()
        this.endGame()
        
      }
    }
  }

  getTokensAtRow(rowNum : number) : string[]{
    let tokens : string[] = []

    for(let i = 0; i < this.cols.length; i++){
      tokens.push(this.cells[rowNum][i].getColor())
    }

    return tokens
  }

  getTokensAtCol(colNum : number) : string[]{
    let tokens : string[] = []

    for(let i = 0; i < this.rows.length; i++){
      tokens.push(this.cells[i][colNum].getColor())
    }

    return tokens
  }

  getAscendingDiagAt(rowNum : number, colNum : number){

        let tokens : string[] = [];
        let start_row = rowNum + colNum;
        let start_col = 0;

        if(start_row > (this.rows.length -1)){
            let diff = start_row - (this.rows.length -1);
            start_row -= diff;
            start_col += diff;
        }

        let next_row = start_row;
        let next_col = start_col;

        while(next_row > -1 && next_col < this.cols.length){
            tokens.push(this.cells[next_row][next_col].getColor());
            next_row--;
            next_col++;
        }
        return tokens; 

  }

  getDescendingDiagAt(rowNum : number, colNum : number) :string[]{
    let tokens :string[] = [];
    let start_row = rowNum - colNum;
    let start_col = 0;

    if(start_row < 0){
        let diff = 0 - start_row;
        start_row += diff;
        start_col += diff;
    }

    let next_row = start_row;
    let next_col = start_col;

    while(next_row < this.rows.length && next_col < this.cols.length){
        tokens.push(this.cells[next_row][next_col].getColor());
        next_row++;
        next_col++;
    }
    return tokens;
    
}

  dropToken(columnNumber : number){
    let topCell = this.cells[0][columnNumber]

    if(topCell.isEmpty){
        let i = this.rows.length -1
        let currentCell = this.cells[i][columnNumber]

        while(currentCell.isEmpty == false){
          i--
          currentCell = this.cells[i][columnNumber]
          
        }
        currentCell.setColor(this.currentPlayer.getTokenColor())
        currentCell.isEmpty = false

        this.checkForWin(i,columnNumber, this.currentPlayer.getTokenColor())
        this.endTurn()

        if(!this.gameOver){
          this.message = ""
        }
        
    }else{
      this.message = `Column ${columnNumber} is full. Try again.`
    }
  }

  endTurn(){
    if(this.currentPlayer.getPlayerNumber() == 1){
      this.currentPlayer = this.player2
    }else{
      this.currentPlayer = this.player1
    }
  }

  createGrid(r: number, c: number, initialCellColor:string): cell[][]{
    const grid = [];

    for(let i = 0; i<r; i++){
      const row = []
      for(let j = 0; j<c; j++){
        row.push(new cell(r, c, initialCellColor))
      }

      grid.push(row)
    }
    return grid
  }

  endGame(){
    this.gameOver = true
    this.message = `Player ${this.winner} Won!`
  }


}
