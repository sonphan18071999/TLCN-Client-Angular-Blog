import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-admin-line-graph-chart-js',
  templateUrl: './admin-line-graph-chart-js.component.html',
  styleUrls: ['./admin-line-graph-chart-js.component.scss']
})
export class AdminLineGraphChartJSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Hiển thị đồ thị đường

  lineChartData: ChartDataSets[] = [
    { data: [85, 70, 78, 75, 77, 75], label: 'Line represent for user visit Blog' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,10,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  // Hiển thị đồ thị đường
}
