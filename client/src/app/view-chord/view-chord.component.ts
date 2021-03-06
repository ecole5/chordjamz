import { Component, OnInit, Input } from '@angular/core';
import { ChordService } from '../services/chord.service';
import { Chord } from '../models/chord';


@Component({
  selector: 'view-chord',
  templateUrl: './view-chord.component.html',
  styleUrls: ['./view-chord.component.css'],
  providers: [ChordService]
})
export class ViewChordComponent implements OnInit {

  @Input() chordName: String;
  //chordpro = require("chordprojs");
  content; //the inner html of the div of the display
  chord: Chord[];
  author;
  version;
  modified;
  type;
  copyright;

  constructor(private chordService: ChordService) { }

  ngOnInit() {
    this.chordService.getChord(this.chordName).subscribe(data => this.chord = data, error => this.content = "<p>File download fail</p>", () => this.display());
  }

  display() {
/*
    if (this.chord[0].valid) {

      this.content = this.chordpro.format(this.chord[0].content).html; //parse chordpro to html using chordpro format
      this.author = this.chord[0].userName;
      this.version = this.chord[0].version;
      var temp: Date = new Date(String(this.chord[0].updatedAt)); //convert string back to date
      this.modified = temp.toLocaleDateString() + " " + temp.toLocaleTimeString();
      if (this.chord[0].copyright) {
        this.copyright = "All Good";
      }
      else {
        this.copyright = "Takedown Request Recived"
      }

      if (this.chord[0].type) {
        this.type = "Public";
      }
      else {

        this.type = "Private";
      }

    }
    else { //warning
      this.content = "<p>This chord file contained a warning, so it was not displayed</p>";
    }
  }
*/
this.author = "cool";
this.content = "cool";
this.type = "Public";
}

}