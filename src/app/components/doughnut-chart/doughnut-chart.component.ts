import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [ ChartModule ],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent implements OnInit {
  data: any;
  options: any;

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Estacionamiento', 'Inmuebles', 'Marketing', 'Radio', 'Ventas'],
      datasets: [
          {
              data: [15, 30, 20, 10, 25],
              backgroundColor: [
                // documentStyle.getPropertyValue('--blue-500'),
                // documentStyle.getPropertyValue('--yellow-500'),
                // documentStyle.getPropertyValue('--green-500')
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
              ],
              hoverBackgroundColor: [
                // documentStyle.getPropertyValue('--blue-400'),
                // documentStyle.getPropertyValue('--yellow-400'),
                // documentStyle.getPropertyValue('--green-400')
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
              ]
          }
      ]
  };


  this.options = {
    cutout: '60%',
    plugins: {
        legend: {
            labels: {
                color: textColor
            }
        }
    }
};
    
  }

}
