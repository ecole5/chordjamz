import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [LoginService]
})
export class NewUserComponent {


  @Output() onCreated = new EventEmitter<boolean>(); //event that parents listens for
  feedback; //status messeage


  constructor(private loginService: LoginService) { }


  // Close component
  cancel() {
    this.onCreated.emit(true);
  }

  // Creates a new user
  newUser(userName) {

    // If nothing entered
    if (userName === '') {
      this.feedback = 'Please input a value';
    }

    else {
      //Check if the user already exsists, if not save user
      this.loginService.newUser(userName).
        subscribe(success => {
          if (success) { //on sucsses
            this.feedback = "You may login now.";
            setTimeout(() => { this.onCreated.emit(true); }, 1000); //=> is really important (will create even in 2 sec so that parent may remove)
          }
          else { this.feedback = "Username already exsists."; }
        },
        error => this.feedback = "Connection error."
        );
    }
  }



}
