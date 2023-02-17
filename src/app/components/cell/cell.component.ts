import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() color : string = '';
  active : boolean = false;


  toggle(){
    if(this.active){
      this.color = 'lightgrey';
      this.active = false;
    }else{
      this.color = 'blue';
      this.active = true;      
    }

  }
}
