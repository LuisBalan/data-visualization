import { Component, OnInit, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { PieChartData, SingleData } from '../../interfaces';
import autocolors from 'chartjs-plugin-autocolors';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [ ChartModule ],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
  export class PieChartComponent implements OnInit {
    
    
    @Input() dataToRender!: SingleData;
    responsive!: boolean;
    data: PieChartData = {
        labels: [],
        pluggins: [autocolors],
        datasets: [
            {
                data: [],
                  backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726"
                ],
                hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
                ]
            }
        ]
      };
      
      options: any;

      ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.assignValuesToPieChart();
      this.responsive = false;
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

    assignValuesToPieChart(){
      const labelsAmount = this.data.labels.length;
      const dataAmount = this.data.datasets[0].data.length

      if (labelsAmount === 0 && dataAmount === 0) {
        for (const [key, value] of Object.entries(this.dataToRender)) {
          this.data.labels.push(key);
          this.data.datasets[0].data.push(Number(value))
      }

    }
  }
}
