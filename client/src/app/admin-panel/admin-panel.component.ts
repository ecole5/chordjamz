import { Component, OnInit } from '@angular/core';
import { DmcaService } from '../services/dmca.service';
import { Notice } from '../models/notice';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
   providers: [DmcaService]
})
export class AdminPanelComponent implements OnInit {


  notices: Notice[];

  constructor(private dmcaService: DmcaService) {} //will get injecte


  ngOnInit() {
     this.dmcaService.getNotice().subscribe(data => this.notices = data);
    
  }

  onSelect(){

  }

}
