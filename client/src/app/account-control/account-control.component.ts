import { Component, OnInit} from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'account-control',
  templateUrl: './account-control.component.html',
  styleUrls: ['./account-control.component.css'],
    providers: [LoginService]
})
export class AccountControlComponent implements OnInit   {

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
      this.newUserOpen = false;
      this.login("Bob"); ///remove at production
    
  
  }

}
