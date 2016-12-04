import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'public-control',
  templateUrl: './public-control.component.html',
  styleUrls: ['./public-control.component.css']
})
export class PublicControlComponent implements OnInit {


  selectedChord;
  constructor() { }

  ngOnInit() {
    this.selectedChord = "" 
  }


  chordSelected(name){
    this.selectedChord = name;
   
  }

  goBack(){
    this.selectedChord = "";
  }

  goReport(){
    console.log("start report");
  }


}
