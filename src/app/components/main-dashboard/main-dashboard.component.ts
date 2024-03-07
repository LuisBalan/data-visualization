import { Component } from '@angular/core';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { BasicChartComponent } from '../basic-chart/basic-chart.component';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { LineChartData, SingleData } from '../../interfaces';
import { DataService } from '../../services/data.service';

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
  
  private dataFromServer!: any;
  private basicChartLabels!: any;
  dataForBasicChart!: LineChartData;
  dataForPieChart!: SingleData;

  constructor(private _dataService: DataService) {}
  
  
  ngOnInit() { 
    const documentStyle = getComputedStyle(document.documentElement);
    
    this.dataFromServer = this.renderData();
    // this.basicChartLabels = this.dataFromServer.map((decade: any) => decade.Year);

    this.dataForBasicChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
          {
              label: 'Radio',
              data: [65, 59, 80, 81, 56, 55, 40, 53],
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              tension: 0.05
          },
          {
              label: 'Estacionamiento',
              data: [28, 48, 40, 19, 86, 27, 90, 18],
              fill: false,
              borderColor: documentStyle.getPropertyValue('--pink-500'),
              tension: 0.05
          },
          {
            label: 'Inmuebles',
            data: [33, 53, 45, 24, 91, 32, 95, 23],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--red-500'),
            tension: 0.05
        },
        {
          label: 'Publicidad',
          data: [35, 55, 47, 45, 93, 97, 95, 25],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.05
      }
      ]
  };

    this.dataForPieChart = {
      'Ventas': 40,
      'Renta': 32,
      'Estacionamiento': 7,
      'Radio': 21
    };

    
  }
  
  generateDataForBasicChart() {
    const labels = this.dataFromServer.map((decade: any) => decade.Year)
    console.log('labels: ', labels)
    return labels
  }

  renderData() {
    this._dataService.getWorldPopulationByDecade('10').subscribe(data => console.log('data from on init: ', data))
  };

}

