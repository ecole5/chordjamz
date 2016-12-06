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
  emailNotice: string;
  help: boolean;

  constructor(private dmcaService: DmcaService, private chordService: ChordService) { } //will get injecte


  ngOnInit() {
    this.dmcaService.getNotice().subscribe(data => this.notices = data);
    this.help = false;
  }


  toggleHelp(){
    if (this.help){
      this.help = false;
    }
    else{
      this.help = true;
    }
  }
  toggle(songName) {
    this.dmcaService.toggleNotice(songName).subscribe();
    this.chordService.toggleVisibility(songName).subscribe();
    for (let notice of this.notices) {
      if (notice.songName == songName) {
        if (notice.copyright == "Visable") {
          notice.copyright = "Hidden";
        }
        else {
          notice.copyright = "Visable";
        }
        break;
      }
    }
  }

  createEmailNotice(songName) {
    this.emailNotice = "A notice has been recived by the right holders to " + songName + " that you are infringing upon their copyright. You may file a counterclaim by emailing copyright@chordjamz.com."


  }

  closeEmailNotice(songName) {
    this.emailNotice = "";

  }

}
