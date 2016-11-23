import { Component} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent   {

  username = '';
  status = 'Please Log In';


  login(value: string){
    this.username = value;
    this.status = 'User: ' + value + ' logged in.'
  }
   logout(){
    this.username = '';
    this.status = 'Please Log In'
  }

}
