import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ResultListComponent } from './result-list.component';
import { ResultDetailComponent } from './result-detail.component';

import { ResultsService } from './results.service';

import { routings } from './results.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routings
  ],
  declarations: [
    ResultListComponent,
    ResultDetailComponent
  ],
  providers: [
    ResultsService
  ]
})
export class ResultsModule { }
