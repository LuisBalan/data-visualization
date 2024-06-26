import { DoughnutChartComponent } from "./doughnut-chart.component";
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular/"

type Story = StoryObj<DoughnutChartComponent>;

export const Primary: Story = {
    args: {
        
    }
};

const meta: Meta<DoughnutChartComponent> = {
    component: DoughnutChartComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div style="width: 40%; height: 40%">${story}</div>`),
    ],
};
export default meta;


