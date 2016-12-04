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
  new: boolean;
  constructor() { }

  
  ngOnInit() {
    this.selectedChord = "";
    this.edit = false;
    this.new = false;
  }


  chordSelected(name){
    this.selectedChord = name;
   
  }

  createNew(){
    this.new = true;
    this.selectedChord = "x";
  }

  navigation(command){
    if (command == "back"){
      this.selectedChord = "";
    }
    else if (command == "editback"){
      this.edit = false;
      this.new = false;
      this.selectedChord = "";
    }
    else{
      this.edit = true;
    }
  }

}
