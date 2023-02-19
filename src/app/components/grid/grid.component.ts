import { Component, Output, EventEmitter } from '@angular/core';


interface NumberArray{
  [index: number]: number;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Output() btnClick = new EventEmitter();
  row : number = 7
  col : number = 6

  onClick(columnNumber : number) {
    this.btnClick.emit(columnNumber);
  }
}
