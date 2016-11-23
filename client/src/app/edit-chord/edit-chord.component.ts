import { Component } from '@angular/core';

@Component({
  selector: 'edit-chord',
  templateUrl: './edit-chord.component.html',
  styleUrls: ['./edit-chord.component.css']
})
export class EditChordComponent{

  clearSelected = '';
  clear(){
    if (this.clearSelected == ''){
      this.clearSelected = 'xxx';
    }
    else{
      this.clearSelected = '';
    }
       
  }
}
