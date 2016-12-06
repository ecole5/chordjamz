import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Title]
})
export class AppComponent implements OnInit {
  privacy: boolean;
  dcma: boolean;

  public constructor(private titleService: Title) { }

  ngOnInit() {
    this.privacy = false;
    this.dcma = false;
    this.titleService.setTitle("ChordJamz");

  }

  showPrivacy() {
    if (this.privacy) {
      this.privacy = false;
    }
    else {
      this.privacy = true;
    }
  }

  showDCMA() {
    if (this.dcma) {
      this.dcma = false;
    }
    else {
      this.dcma = true;
    }
  }




}
