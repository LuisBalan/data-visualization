import { PieChartComponent } from "./pie-chart.component";
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular";

export const Primary: StoryObj<PieChartComponent> = {
    args: {
        data: {
            labels: ['Ventas', 'Renta', 'Estacionamiento', 'Radio'],
            pluggins: [],
            datasets: [
                {
                    data: [40, 32, 7, 21],
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
          }
    }
};

const meta: Meta<PieChartComponent> = {
    component: PieChartComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div>${story}</div>`),
    ],
};

export default meta;