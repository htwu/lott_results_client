import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Result } from './result';

@Component({
  selector: 'result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css'],
})
export class ResultDetailComponent implements OnInit, OnDestroy {
  @Input()
  result: Result;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){
  }
}