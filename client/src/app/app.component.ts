import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  privacy: boolean;
  dcma: boolean;



    ngOnInit(){
  this.privacy = false;
   this.dcma = false;

}

showPrivacy(){
  if (this.privacy){
    this.privacy = false;
  }
  else{
    this.privacy = true;
  }
}

showDCMA(){
  if (this.dcma){
    this.dcma = false;
  }
  else{
    this.dcma = true;
  }
}
  



}
