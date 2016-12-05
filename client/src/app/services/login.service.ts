import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'



@Injectable()
   export class LoginService {
   constructor(private http:Http) { }



    newUser(userName):Observable<boolean> {
     var flag : boolean;      
     return (this.http.get('/api/user/create/' + userName).
       map(response => response.json())).
        map(data => {
          if (data.message == "ok"){
              return true;
          }
          else{
              return false;
          }
        });
      }



    login(userName):Observable<boolean> {
     var flag : boolean;      
     return (this.http.get('/api/user/login/' + userName).
       map(response => response.json())).
        map(data => {
          if (data.message == "ok"){
              return true;
          }
          else{
              return false;
          }
        });
      }



}