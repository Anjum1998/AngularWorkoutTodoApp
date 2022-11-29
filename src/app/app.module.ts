import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { HttpClientModule } from '@angular/common/http';
const myRoute:Routes=[
  {
    path:"",
    component:ViewTodoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
