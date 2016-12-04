import { Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit  {
  @Input() myUsername;

  selectedChord:string;
  edit: boolean;
  constructor() { }

  
  ngOnInit() {
    this.selectedChord = "";
    this.edit = false;
  }


  chordSelected(name){
    this.selectedChord = name;
   
  }

  navigation(command){
    
  }
   

}
