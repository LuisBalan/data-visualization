import { Component, OnInit, Input} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DataService } from '../../services/data.service';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [ ChartModule ],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent implements OnInit {
  @Input() data: any;
  options: any;
  res!: any;
  _labels!: any;
  _data!: any;

  constructor(private dataService: DataService, private chartService: ChartService){
  };

  ngOnInit(): void {

    this.chartService.getDoughnutData().subscribe ( (res: any) => {

      console.log('labels: ', this._labels)
      console.log('_data ', this._data)

      // JSON.parse(res);
      this.data = res;
      this._labels = this.data.map((record: any) => record.categoria);
      this._data = this.data.map((record: any) => Number(record.valor));

      console.log('-- res in on init ---', this.data)
      console.log('--- _labels in on init ---', this._labels)
      console.log('--- _data in on init --- ', this._data)
  
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
  
      this.data = {
        labels: this._labels,
        datasets: [
            {
                data: this._data,
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

    });
  }

  // getDataToRender() {
  //   this.dataService.getDataToRender().subscribe(data => {
  //     this._labels = data.map((record: any) => record.categoria);
  //     this._data = data.map((record: any) => record.valor);
  //   });
  // };

};
