import { Component, OnInit } from '@angular/core';
import { DmcaService } from '../services/dmca.service';
import { ChordService } from '../services/chord.service';
import { Notice } from '../models/notice';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
   providers: [DmcaService, ChordService]
})
export class AdminPanelComponent implements OnInit {


  notices: Notice[];

  constructor(private dmcaService: DmcaService, private chordService: ChordService) {} //will get injecte


  ngOnInit() {
     this.dmcaService.getNotice().subscribe(data => this.notices = data);
  }

  toggle(songName){
    this.dmcaService.toggleNotice(songName).subscribe();
    this.chordService.toggleVisibility(songName).subscribe();
    for (let notice of this.notices){
      if (notice.songName == songName){
        if (notice.copyright == "Visable"){
          notice.copyright = "Hidden";
        }
        else{
          notice.copyright = "Visable";
        }
        break;
      }
    }
  }

}
