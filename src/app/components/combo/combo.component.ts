import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-combo-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './combo.component.html',
  styleUrl: './combo.component.scss'
})
export class ComboComponent implements OnInit {

  data: any;
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: "#42A5F5",
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                data: [50, 25, 12, 48, 56, 76, 42]
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: "#66BB6A",
                data: [21, 84, 24, 75, 37, 65, 34],
                borderColor: 'white',
                borderWidth: 2
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: "#FFA726",
                data: [41, 52, 24, 74, 23, 21, 32]
            }
        ]
    };
    
    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}



}
