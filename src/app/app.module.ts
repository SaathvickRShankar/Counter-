import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCounterComponent } from './add-counter/add-counter.component';
import { MinusCounterComponent } from './minus-counter/minus-counter.component';
import { ResetCounterComponent } from './reset-counter/reset-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCounterComponent,
    MinusCounterComponent,
    ResetCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
