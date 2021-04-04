import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { fromEventPattern } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
