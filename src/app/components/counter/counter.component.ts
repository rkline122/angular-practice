import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count: number = 0


  addToCount(){
    if(this.count < 10)
      this.count++
    else
      alert("Cannot go higher")
  }

  removeFromCount(){
    if(this.count > -10)
      this.count--
    else
      alert("Cannot go lower")
  }
}
