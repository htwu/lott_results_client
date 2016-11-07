import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Result, ResultDesc, ResultDetail} from './result';
import { TattsResult, Dividend } from './tatts-result';

@Injectable()
export class TattsResultsService {
  private static resultId = 0;
  private static resultDetailId = 0;
  constructor(private http: Http) { }

  private resultsUrl = 'https://api.tatts.com/sales/vmax/web/data/lotto/latestresults';

  getResults(): Promise<Result[]> {
    TattsResultsService.resultId = 0;
    TattsResultsService.resultDetailId = 0;
    let productsFilters = '{"CompanyId":"SALotteries","MaxDrawCountPerProduct":1,"OptionalProductFilter":["Super66","TattsLotto","MonWedLotto","Powerball","OzLotto","Keno","SetForLife","Pools"]}';
    let headers = new Headers({
      'Accept': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.resultsUrl, productsFilters, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    if(body['Success']){
      let tattsResults:TattsResult[] = body['DrawResults'];
      let results: Result[] = tattsResults.map(tattsResult => {
        return TattsResultsService.getResultFromTattsResult(tattsResult);
      })
      return results;
    }else{
      return [];
    }
  }

  private handleError(error: any) {
    let errMsg = (error.msssage) ? error.message : error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private static getResultFromTattsResult(tattsResult: TattsResult):Result{
    let result = new Result();
    result.Name = tattsResult.ProductId;
    result.CurrentDrawDate = tattsResult.DrawDate;
    result.CurrentDrawNumber = tattsResult.DrawNumber;
    result.Id = ++this.resultId;
    result.LogoUrl = tattsResult.DrawLogoUrl;
    result.WinningNumbersName = "Winning Numbers";
    result.WinningNumbers = tattsResult.PrimaryNumbers.join(',');
    result.SupplementariesName = "Supplementaries";
    result.Supplementaries = tattsResult.SecondaryNumbers.join(',');
    result.LottResultDesc = {
      "Id": 1,
      "ShowType": "row",
      "IsCombinations": true,
      "AvailableCol": tattsResult.Dividends.length,
      "ColName0": "",
      "ColName1": "Division Prize",
      "ColName2": "Division Prize Pool",
      "ColName3": "Winners",
      "ColName4": "Win",
      "ColName5": "+ Supp",
      "ColName6": null,
      "ColName7": null,
      "ColName8": null,
      "ColName9": null
    };
    result.LottResultDetails = tattsResult.Dividends.map(dividend => {
      return {
        "Id": 15,
        "LottResultId": this.resultId,
        "ColValue0": "Division " + dividend.Division,
        "ColValue1": dividend.BlocDividend.toFixed(2) + '',
        "ColValue2": (dividend.BlocDividend * dividend.BlocNumberOfWinners).toFixed(2) + '',
        "ColValue3": dividend.BlocNumberOfWinners + " winners",
        "ColValue4": "6",
        "ColValue5": "",
        "ColValue6": null,
        "ColValue7": null,
        "ColValue8": null,
        "ColValue9": null
      }
    })

    return result;
  }
}