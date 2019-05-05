
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathsComponent } from './maths/maths.component';

import { classTest } from './test-cases/classTest';
import { CounterComponent } from './counter/counter.component';
import { DateFnsComponent } from './date-fns/date-fns.component';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent},
  {path :'date-fns', component: DateFnsComponent}
];
@NgModule({
  declarations: [AppComponent, MathsComponent, CounterComponent, DateFnsComponent, MainContainerComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
