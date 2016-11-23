import { Component, OnInit
  } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit   {

  username: string;
  status:string;


  login(value: string){
    if (value != ''){
    this.username = value;
    this.status = 'User Logged In'
    }
  }



   logout(){
    this.username = '';
    this.status = 'Please Log In'
  }

    ngOnInit(){
      this.login("bob"); //***Must be changed to logout for production
    
  }

}
