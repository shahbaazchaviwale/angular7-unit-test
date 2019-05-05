import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-fns',
  templateUrl: './date-fns.component.html',
  styleUrls: ['./date-fns.component.scss']
})
export class DateFnsComponent implements OnInit {

  dbDate: Date;
  formattedDateDe = '';
  formattedDateEn = '';
  constructor() { }

  ngOnInit() {

    this.dbDate = new Date("2019-04-17 14:17:01.660986+05:30");
    var options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hc: "h11"
    };

    this.formattedDateDe = this.dbDate.toLocaleDateString("de-De", options);
    this.formattedDateEn = this.dbDate.toLocaleDateString("de-De", options);

  }

}
 