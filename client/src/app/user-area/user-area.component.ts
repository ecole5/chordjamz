import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent  {

  @Input()
  myUsername:String; 





}
