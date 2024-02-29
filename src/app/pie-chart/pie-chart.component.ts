import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';


@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [ ChartModule ],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
  export class PieChartComponent implements OnInit {
      data: any;
      options: any;

      ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [540, 325, 702],
                    backgroundColor: [
                  //   documentStyle.getPropertyValue('--blue-500'),
                  //   documentStyle.getPropertyValue('--yellow-500'),
                  //   documentStyle.getPropertyValue('--green-500')
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
                  ],
                  hoverBackgroundColor: [
                    // documentStyle.getPropertyValue('--blue-400'),
                    // documentStyle.getPropertyValue('--yellow-400'),
                    // documentStyle.getPropertyValue('--green-400')
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D"
                  ]
              }
          ]
        };

        this.options = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor
                  }
              }
          }
      };
    }
}
