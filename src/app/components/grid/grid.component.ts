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
  @Input() cellColor : string = "";
  @Input() rows : number[] = [0,1,2,3,4,5]
  @Input() cols : number[] = [0,1,2,3,4,5,6]
  @Input() cells: cell[][] = []
  @Output() btnClick = new EventEmitter();

 

  onClick(columnNumber : number) {
    this.btnClick.emit(columnNumber);
  }
}
