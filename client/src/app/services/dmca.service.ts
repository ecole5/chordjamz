import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Notice } from '../models/notice';

@Injectable()
export class DmcaService {

  constructor(private http: Http) { }


  createNotice(content, songName) {
    var json = JSON.stringify({ content: content });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('api/notice/' + songName, json, options).pipe(map(res => res.json()))
  }

  getNotice() {
    return this.http.get('api/notice/').pipe(map(res => res.json()));
  }
  toggleNotice(songName){
    var json = JSON.stringify({});
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });


    return this.http.put('api/notice/'+songName, json,options).pipe(map(res => res.json()))
}

  updateName(originalSongName,songName){
    var json = JSON.stringify({songName: songName});
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });


    return this.http.put('api/notice/update/'+originalSongName, json,options).pipe(map(res => res.json()))
}





}
