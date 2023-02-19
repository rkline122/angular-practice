import { Component, Output, EventEmitter } from '@angular/core';
import { player } from 'src/app/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  player1 = new player(1, 'red');
  player2 = new player(2, 'blue');
  currentPlayer = this.player1


  dropToken(columnNumber : number){
    if(this.currentPlayer.getPlayerNumber() == 1){
      this.currentPlayer = this.player2
    }else{
      this.currentPlayer = this.player1
    }
    console.log(columnNumber)
  }
}
