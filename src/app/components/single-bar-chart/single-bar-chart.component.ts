import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'single-bar-chart',
  standalone: true,
  imports: [ ChartModule ],
  templateUrl: './single-bar-chart.component.html',
  styleUrl: './single-bar-chart.component.scss'
})
export class SingleBarChartComponent implements OnInit {
  basicData: any;
  basicOptions: any;
//   _dataService: DataService;

//   constructor( private dataService: DataService ) {
//     this._dataService = dataService;

//   }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
        labels: ['1er Trim', '2do Trim', '3er Trim', '4to Trim'],
        datasets: [
            {
                label: 'Ventas',
                data: [540, 325, 702, 620],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };

  }

}
