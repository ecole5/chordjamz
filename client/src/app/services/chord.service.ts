import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Chord} from '../models/chord';

@Injectable()
export class ChordService {
constructor (private http: Http){}

getPublicNames(){
    return this.http.get('api/chord/public').map(res=> res.json());
}

getPrivateNames(username){
    return this.http.get('api/chord/private/' + username).map(res=> res.json());
}


createChord(content, userName, songName, type, valid){
    var json = JSON.stringify({content: content, userName: userName, type: type, valid: valid});
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });


    return this.http.post('api/chord/'+songName, json,options).map(res => res.json())
}


updateChord(content, originalName, songName, type, valid){
    var json = JSON.stringify({content: content, songName: songName, type: type, valid: valid});
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });


    return this.http.put('api/chord/'+originalName, json,options).map(res => res.json())
}


getChord(songName){
    return this.http.get('api/chord/'+songName).map(res => res.json())
}




deleteChord(songName){
    return this.http.delete('api/chord/'+songName).map(res => res.json())
}




}

