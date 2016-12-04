import { Component, OnInit, Input } from '@angular/core';
import { ChordService } from '../chord.service';
import { Chord } from '../chord';

@Component({
  selector: 'view-chord',
  templateUrl: './view-chord.component.html',
  styleUrls: ['./view-chord.component.css'],
  providers: [ChordService]
})
export class ViewChordComponent implements OnInit {

  @Input() chordName: String;
  chordpro = require("chordprojs");
  content; //the inner html of the div of the display
  chord: Chord[];
  problem;


  constructor(private chordService: ChordService) {}
     

ngOnInit() {



    this.chordService.getChord(this.chordName).subscribe(data => this.chord = data, error => this.content = "<p>File download fail</p>",()=> this.display());

    
    
}

display(){

    if (this.chord[0].valid) { 
  
      this.content = this.chordpro.format(this.chord[0].content).html; //parse chordpro to html using chordpro format
    }
    else { //warning
      this.content = "<p>This chord file contained a warning, so it was not displayed</p>";

    }
}


}








