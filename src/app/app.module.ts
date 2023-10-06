import { FormStyle } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

3
 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MailOutlookComponent } from './mail-outlook/mail-outlook.component';
import { Mail2Component } from './mail2/mail2.component';


@NgModule({
  declarations: [
    AppComponent,
    MailOutlookComponent,
    Mail2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
