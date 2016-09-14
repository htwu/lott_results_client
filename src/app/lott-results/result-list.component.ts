import { Component, OnInit, OnDestroy, trigger, state, style, transition, animate, group, keyframes } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Result } from './result';
import { ResultsService } from './results.service';

class ResultTitle {
  Id: number;
  Name: string;
}

@Component({
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [ResultsService],
  animations: [
    trigger('multiflyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => void', [
        animate(500, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ]),
  ]
})
export class ResultListComponent implements OnInit, OnDestroy {
  private selectedId: number;
  private sub: Subscription;
  errorMessage: string;
  allResults: Result[];
  dispResults: Result[];

  allResultTitles: ResultTitle[];
  constructor(
    private resutlsService: ResultsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onChange(selectedId: number) {
    if (selectedId == 0) {
      this.dispResults = this.allResults;

    } else {
      this.dispResults = this.allResults.filter(r => {
        return r.Id == selectedId;
      });
    }
    console.log(selectedId, this.dispResults);
  }

  ngOnInit() {
    this.resutlsService.getResults()
      .then(
      results => {
        this.allResults = results;
        this.allResults.forEach(r => {
          r.ColNames = [];
          r.ColValues = [];
          let names = r.LottResultDesc;
          for (let i = 0; i < names.AvailableCol; i++) {
            r.ColNames.push(names["ColName" + i]);
          }
          r.LottResultDetails.forEach(d => {
            let colValues: string[] = [];
            for (let i = 0; i < names.AvailableCol; i++) {
              colValues.push(d["ColValue" + i]);
            }
            r.ColValues.push(colValues);
          });
        })
        this.dispResults = this.allResults;

        this.allResultTitles = [{ Id: 0, Name: 'All' }, ...results.map(r => { return { Id: r.Id, Name: r.Name } })];
      },
      error => this.errorMessage = <any>error
      );

    this.sub = this.route.params.subscribe(params => {
      this.selectedId = +params['id'];
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(result: Result) {
  }
}