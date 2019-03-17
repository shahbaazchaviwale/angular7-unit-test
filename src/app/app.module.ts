
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathsComponent } from './maths/maths.component';
import { add } from './test-cases/functionalTest';
import { classTest } from './test-cases/classTest';

@NgModule({
  declarations: [AppComponent, MathsComponent, add, classTest],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
