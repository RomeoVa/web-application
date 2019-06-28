import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {

  public pieChartLabels = ['Exitosas','Pendientes','Canceladas'];
  public pieChartData = ['424','120','50'];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
