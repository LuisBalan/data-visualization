import { Component } from '@angular/core';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { BasicChartComponent } from '../basic-chart/basic-chart.component';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';


@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [
    LineChartComponent,
    PieChartComponent,
    BasicChartComponent,
    DoughnutChartComponent
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {

}
