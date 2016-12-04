import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'user-control-bar',
  templateUrl: './user-control-bar.component.html',
  styleUrls: ['./user-control-bar.component.css']
})
export class UserControlBarComponent {
  @Output() change = new EventEmitter<string>();
  clickBack() {
       this.change.emit("back");
       
    }
      clickEdit() {
       this.change.emit("edit");
       
    }
 

}
