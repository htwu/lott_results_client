import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { tick, fakeAsync } from '@angular/core/testing/fake_async';
import { inject, TestBed } from '@angular/core/testing/test_bed';

import { ResultsService } from './results.service';

describe('ResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:Http, useFactory: (backend:ConnectionBackend, defaultOptions:BaseRequestOptions)=>{
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]},
        {provide:MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass:BaseRequestOptions},
        {provide: ResultsService, useClass: ResultsService}
      ]
    })
  });

  // it('should retrive all lotts results',
  //   inject([ResultsService, MockBackend], fakeAsync((resultsService: ResultsService, mockBackend: MockBackend) => {
  //     let res: Response;
  //     mockBackend.connections.subscribe(c=>{
  //       expect()
  //     })
  //     expect(app).toBeTruthy();
  //   }));

  

});