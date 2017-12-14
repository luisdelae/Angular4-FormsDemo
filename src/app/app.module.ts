import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Formposter } from './services/form-poster.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', component: HomeComponent }
      ]
    ),
    FormsModule,
    HttpModule
  ],
  providers: [Formposter],
  bootstrap: [AppComponent]
})
export class AppModule { }
