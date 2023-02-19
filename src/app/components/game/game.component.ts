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
  player2 = new player(2, 'blue');
  currentPlayer = this.player1

  rows : number[] = [0,1,2,3,4,5]
  cols : number[] = [0,1,2,3,4,5,6]
  cellColor : string = "lightgrey"
  cells = this.createGrid(this.rows.length, this.cols.length, this.cellColor)


  dropToken(columnNumber : number){
    if(this.currentPlayer.getPlayerNumber() == 1){
      this.currentPlayer = this.player2
    }else{
      this.currentPlayer = this.player1
    }
    console.log(columnNumber)
    console.log(this.cells[0])
    this.cells[0][0].setColor("black")
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

}
