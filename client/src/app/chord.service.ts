import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'; //why do we import this here yet use it in the service

@Injectable()
export class ChordService {
private chordsUrl = 'api/chord';
constructor (private http: Http){}
getChords(){
    return this.http.get(this.chordsUrl).map(res=> res.json());

}



}
