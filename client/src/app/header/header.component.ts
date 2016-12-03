import { Component, OnInit} from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
    providers: [LoginService]
})
export class HeaderComponent implements OnInit   {

  username: string;
  status:string;
  newUserOpen: boolean;

  constructor(private loginService: LoginService) {
  }


 createNewUser(value: string){
   this.newUserOpen = true;
  }


  closeNewUser(){
  this.newUserOpen = false;
  
  }


  login(value: string){
    if (value != ''){

    this.loginService.login(value).
      subscribe(success => {
        if (success) {
          this.status = "User Logged In";
          this.username = value;
        }
        else { this.status = "Cannot find user"; }
      },
      error => this.status = "Connection error."
      );
    
   
    }
    else{
      this.status = 'Please input a value';
    }
  }



   logout(){
    this.username = '';
    this.status = 'Please Log In'
  }

    ngOnInit(){
      this.login("Bob"); //***Must be changed to logout for production
      this.newUserOpen = false;
  
  }

}
