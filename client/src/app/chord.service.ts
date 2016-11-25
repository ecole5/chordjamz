import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChordService {
private chordsUrl = 'api/chord';
constructor (private http: Http){}

getChords(){
    return this.http.get(this.chordsUrl).map(res=> res.json());

}



createChord(userName,content, version, songName, type){
    var json = JSON.stringify({content: content, userName: userName, version: version, songName: songName, type: type});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });




    return this.http.post('api/chord', json,options).map(res => res.json())
}










}
