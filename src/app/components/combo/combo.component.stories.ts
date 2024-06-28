import { ComboComponent } from "./combo.component";
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular";

export const Primary: StoryObj<ComboComponent> = {
    args: {
        data: {
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
        }
    }
};


const meta: Meta<ComboComponent> = {
    component: ComboComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div>${story}</div>`)
    ]
};

export default meta;
