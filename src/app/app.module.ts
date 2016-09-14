import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { ResultsModule } from './lott-results/results.module';

import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ResultsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }