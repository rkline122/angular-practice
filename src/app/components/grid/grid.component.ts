import { Component, Input, Output, EventEmitter } from '@angular/core';
import { cell } from 'src/app/cell';


interface NumberArray{
  [index: number]: number;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() gameOver : boolean = true;
  @Input() cellColor : string = "";
  @Input() rows : number[] = [0,1,2,3,4,5]
  @Input() cols : number[] = [0,1,2,3,4,5,6]
  @Input() cells: cell[][] = []
  @Output() columnNumberEmitter = new EventEmitter();
  @Output() resetEmitter = new EventEmitter();

  
  columnNumber(columnNumber : number) {
    this.columnNumberEmitter.emit(columnNumber);
  }

  reset(){
    this.resetEmitter.emit(true)
  }
}
