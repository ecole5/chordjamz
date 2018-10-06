import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';




@Injectable()
   export class LoginService {
   constructor(private http:Http) { }



    newUser(userName):Observable<boolean> {
     var flag : boolean;      
     return (this.http.get('/api/user/create/' + userName).
       pipe(map(response => response.json())).
        pipe(map(data => {
          if (data.message == "ok"){
              return true;
          }
          else{
              return false;
          }
        })));
      }



    login(userName):Observable<boolean> {
     var flag : boolean;      
     return (this.http.get('/api/user/login/' + userName).pipe(
       map(response => response.json())).
        pipe(map(data => {
          if (data.message == "ok"){
              return true;
          }
          else{
              return false;
          }
        })));
      }



}