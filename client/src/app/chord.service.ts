import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChordService {
private chordsUrl = 'api/chord';
constructor (private http: Http){}

getChords(){
    return this.http.get(this.chordsUrl).map(res=> res.json());

}










}
