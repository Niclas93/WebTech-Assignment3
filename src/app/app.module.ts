import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {freeapiService} from "./services/freeapi.service";
import {MyOrderByPipe} from "./sort/sort.pipe";

@NgModule({
  declarations: [
    AppComponent,
    MyOrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    freeapiService,
    MyOrderByPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
