import {Component, OnInit} from '@angular/core';
import {Chord} from '../chord'; 
import {ChordService} from '../chord.service';


@Component({
  selector: 'chord-list',
  templateUrl: './chord-list.component.html',
  styleUrls: ['./chord-list.component.css'],
  providers: [ChordService]
  
})
export class ChordListComponent implements OnInit{


  chords: Chord[];
  selectedChord;

  constructor(private chordService: ChordService,) { 
  } //will get injected
  

  
  ngOnInit(){
    this.getChords();
 
  }

  onSelect (chord: Chord): void{
      this.selectedChord = chord;
}
  

  getChords(){
    this.chordService.getChords().subscribe(data => this.chords = data); //subscribe to the stream of events (the observable)
  }


}
