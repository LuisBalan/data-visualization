import { DoughnutChartComponent } from "./doughnut-chart.component";
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular/"
import { plugins } from 'chart.js';
import { ChartService } from '../../services/chart.service';


type Story = StoryObj<DoughnutChartComponent>;

export const Primary: Story = {
    args: {
        data: {
            labels: ['Estacionamiento', 'Inmuebles', 'Marketing', 'Radio', 'Ventas'],
            datasets: [
                {
                    data: [15, 30, 20, 10, 25],
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
                  scheme: 'brewer.Paired12'
                }
              }
            }
        }
        
    }
};

const meta: Meta<DoughnutChartComponent> = {
    component: DoughnutChartComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div style="height: 50%; width: 50%">${story}</div>`),
    ],
};
export default meta;


