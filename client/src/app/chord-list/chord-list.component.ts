import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Chord } from '../chord';
import { ChordService } from '../chord.service';

@Component({
    selector: 'chord-list',
    templateUrl: './chord-list.component.html',
    styleUrls: ['./chord-list.component.css'],
    providers: [ChordService]
})

export class ChordListComponent implements OnInit {

    @Input() username:String; //if you want you can enter a username

    @Output() select = new EventEmitter<String>();

    chords: Chord[];

    constructor(private chordService: ChordService) {
        this.username = ""; //defaults to no username entered
     } //will get injected

    ngOnInit() {
        this.getChords(this.username);
 
    }

    onSelect(chord: Chord): void {
        this.select.emit(chord.songName);
    }


    getChords(username) {
        if (username == "") {
            this.chordService.getPublicNames().subscribe(data => this.chords = data); //subscribe to the stream of events (the observable)
             

        }
        else {
         
              
            this.chordService.getPrivateNames(username).subscribe(data => this.chords = data); //subscribe to the stream of events (the observable)
        }
    }

}