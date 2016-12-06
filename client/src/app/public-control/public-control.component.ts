import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'public-control',
  templateUrl: './public-control.component.html',
  styleUrls: ['./public-control.component.css']
})
export class PublicControlComponent implements OnInit {


  selectedChord;
  report: boolean;
  refresh: boolean;

  constructor() { }

  ngOnInit() {
    this.selectedChord = "";
    this.refresh = true;
  }

  reset() {

    this.refresh = false;

    setTimeout(() => { this.refresh = true; }, 30);


  }

  chordSelected(name) {
    this.selectedChord = name;

  }

  goBack() {
    this.selectedChord = "";
  }

  openReport() {
    this.report = true;
  }
  closeReport() {
    this.report = false;
  }



}
