import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Tab }           from './tab';
import { Observable }     from 'rxjs/Observable';
@Injectable()

export class AppService {
  private tabUrl = 'myapi';  // URL to web API
  constructor (private http: Http) {}
  getTabs (): Observable<Tab[]> {
    return this.http.get(this.tabUrl)
                    .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }


}