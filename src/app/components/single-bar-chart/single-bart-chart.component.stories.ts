import { SingleBarChartComponent } from "./single-bar-chart.component";
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular";

type Story = StoryObj<SingleBarChartComponent>;

export const Primary: Story = {
    args: {
        basicData: {
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
        }
    }
};

const meta: Meta<SingleBarChartComponent> = {
    component: SingleBarChartComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div>${story}</div>`),
    ],
};

export default meta;