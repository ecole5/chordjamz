import { Component, OnInit } from '@angular/core';
import { Tab } from '../tab';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pubchord',
  templateUrl: './pubchord.component.html',
  styleUrls: ['./pubchord.component.css'],
  providers: [AppService]
})
export class PubchordComponent implements OnInit {

tabs: Tab[];
   mode = 'Observable';
  constructor(private appService: AppService){}
  
  ngOnInit() { this.getTabs(); }
  getTabs() {
    this.appService.getTabs()
                     .subscribe(
                       tabs => this.tabs = tabs);
                    
  }
  
}
