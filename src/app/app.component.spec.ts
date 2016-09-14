import {  addProviders, inject, async} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App: Lott-result', () => {
  beforeEach(() => {
    addProviders([
      AppComponent
    ]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have a title "latest lottries results & dividends"',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('latest lottries results & dividends');
    }));

});