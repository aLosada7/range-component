import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercisesModule } from './exercises/exercises.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptorMock } from './exercises/interceptors/httpInterceptorMock.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ExercisesModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptorMock, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
