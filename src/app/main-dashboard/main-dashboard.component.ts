import { Component } from '@angular/core';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [LineChartComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {

}
