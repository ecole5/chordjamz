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



createChord(content, userName, songName, type, valid){
    var json = JSON.stringify({content: content, songName: songName, type: type, valid: valid});
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });


    return this.http.post('api/chord/'+userName, json,options).map(res => res.json())
}



}


