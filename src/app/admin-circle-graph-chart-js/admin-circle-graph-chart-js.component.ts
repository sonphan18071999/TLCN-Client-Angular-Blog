import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-admin-circle-graph-chart-js',
  templateUrl: './admin-circle-graph-chart-js.component.html',
  styleUrls: ['./admin-circle-graph-chart-js.component.scss']
})
export class AdminCircleGraphChartJsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  doughnutChartLabels: Label[] = ['Apple', 'Samsung', 'Technique'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
}
