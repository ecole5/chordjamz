import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-chord',
  templateUrl: './view-chord.component.html',
  styleUrls: ['./view-chord.component.css']
})
export class ViewChordComponent implements OnInit {


  constructor() { }

  @Input() chordname;



  ngOnInit() {
    
  }



}
