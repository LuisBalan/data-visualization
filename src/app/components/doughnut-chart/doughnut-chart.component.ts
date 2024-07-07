import { Component, OnInit } from '@angular/core';
import { plugins } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
// import 'chartjs-plugin-colorschemes';
// import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
// import { Aspect6 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.office';


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
  _labels!: any;
  _data!: any;

  constructor(private dataService: DataService){
    // this.getDataToRender();
  };

  ngOnInit(): void {
    console.log('labels: ', this._labels)
    console.log('_data ', this._data)

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      // labels: ['Estacionamiento', 'Inmuebles', 'Marketing', 'Radio', 'Ventas'],
      labels: this._labels,
      datasets: [
          {
              // data: [15, 30, 20, 10, 25],
              data: this._data,
              // backgroundColor: [
              //   // documentStyle.getPropertyValue('--blue-500'),
              //   // documentStyle.getPropertyValue('--yellow-500'),
              //   // documentStyle.getPropertyValue('--green-500')
              //   "#FF6384",
              //   "#36A2EB",
              //   "#FFCE56"
              // ],
              // hoverBackgroundColor: [
              //   // documentStyle.getPropertyValue('--blue-400'),
              //   // documentStyle.getPropertyValue('--yellow-400'),
              //   // documentStyle.getPropertyValue('--green-400')
              //   "#FF6384",
              //   "#36A2EB",
              //   "#FFCE56"
              // ]
          }
      ],
      options: {
        plugins: {
          colorschemes: {
            scheme: 'brewer.SetOne8'
          }
        }
      }
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

  getDataToRender() {
    this.dataService.getDataToRender().subscribe(data => {
      this._labels = data.map((record: any) => record.categoria);
      this._data = data.map((record: any) => record.valor);
    });
  };

};
