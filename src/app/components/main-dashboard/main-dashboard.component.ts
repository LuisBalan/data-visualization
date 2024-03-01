import { Component } from '@angular/core';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { BasicChartComponent } from '../basic-chart/basic-chart.component';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';



@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [
    LineChartComponent,
    PieChartComponent,
    BasicChartComponent,
    DoughnutChartComponent,
    DividerModule,
    CardModule
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {

  data: any

  ngOnInit() { 
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              tension: 0.4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: documentStyle.getPropertyValue('--pink-500'),
              tension: 0.4
          },
          {
            label: 'Third Dataset',
            data: [33, 53, 45, 24, 91, 32, 95],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--red-500'),
            tension: 0.4
        }
      ]
  };
}


}
