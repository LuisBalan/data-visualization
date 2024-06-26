import { SingleBarChartComponent } from "./single-bar-chart.component";
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular";

type Story = StoryObj<SingleBarChartComponent>;

export const Primary: Story = {};

const meta: Meta<SingleBarChartComponent> = {
    component: SingleBarChartComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div style="width: 40%; height: 40%">${story}</div>`),
    ],
};

export default meta;