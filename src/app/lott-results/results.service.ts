import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import {Result} from './result'

@Injectable()
export class ResultsService {
  constructor(private http: Http) { }

  private resultsUrl = 'http://win08:8848/api/lottresults';//must have CORS
  // private resultsUrl = '/api/lottresults'; 

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
    let results: Result[] = res.json() || [];
    results.forEach(result => result.LogoUrl = '/public/images/' + result.Id + '.png');
    return results;
  }

  private handleError(error: any) {
    let errMsg = (error.msssage) ? error.message : error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}