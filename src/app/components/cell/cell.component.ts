import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() color : string = '';
  @Input() rowLocation: number = 0;
  @Input() colLocation: number = 0;

}
