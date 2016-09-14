import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import {Result} from './result'

@Injectable()
export class ResultsService {
  constructor(private http: Http) { }

  // private resultsUrl = 'http://192.168.11.15:8848/api/lottresults';
  private resultsUrl = '/api/lottresults';

  getResults(): Promise<Result[]> {
    let headers = new Headers({
      'Accept': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.resultsUrl, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || [];
  }

  private handleError(error: any) {
    let errMsg = (error.msssage) ? error.message : error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}