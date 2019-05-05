import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.sass']
})
export class MainContainerComponent implements OnInit {

  pageList = [
    { link : '/', name: 'Home'},
    { link : 'counter', name: 'Counter'},
    { link : 'date-fns', name: 'Date-Fns'},
    { link : 'common-list', name: 'Common List'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
