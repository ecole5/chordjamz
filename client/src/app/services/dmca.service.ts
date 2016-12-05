import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Notice} from '../models/notice';

@Injectable()
export class DmcaService {

  constructor(private http: Http) { }


createNotice(content, songName){
    var json = JSON.stringify({content: content});
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('api/notice/'+ songName, json,options).map(res => res.json())
}


}
