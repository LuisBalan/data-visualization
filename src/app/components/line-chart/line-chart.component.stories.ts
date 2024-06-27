import { LineChartComponent } from "./line-chart.component";
import { ChartModule } from 'primeng/chart';
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular";

type Story = StoryObj<LineChartComponent>;

export const Primary: Story = {
    args: {
        dataForLineChart: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
            datasets: [
                {
                    label: 'Radio',
                    data: [65, 59, 80, 81, 56, 55, 40, 53],
                    fill: false,
                    // borderColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: '#c39772',
                    tension: 0.12
                },
                {
                    label: 'Estacionamiento',
                    data: [28, 48, 40, 19, 86, 27, 90, 18],
                    fill: false,
                    // borderColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: '#9cb3bc',
                    tension: 0.05
                },
                {
                  label: 'Inmuebles',
                  data: [33, 53, 45, 24, 91, 32, 95, 23],
                  fill: false,
                //   borderColor: documentStyle.getPropertyValue('--red-500'),
                borderColor: '#633a35',
                  tension: 0.05
              },
              {
                label: 'Publicidad',
                data: [35, 55, 47, 45, 93, 97, 95, 25],
                fill: false,
                // borderColor: documentStyle.getPropertyValue('--blue-500'),
                borderColor: '#432f3f',
                tension: 0.05
            },
            ],
        },
    }
};

const meta: Meta<LineChartComponent> = {
    component: LineChartComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div style="width:90%; height:80%">${story}</div>`)
    ],
};

export default meta;