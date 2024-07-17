import { TableComponent } from "./table.component";
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular";

type Story = StoryObj<TableComponent>;

export const Primary: Story = {
    args: {}
};

const meta: Meta<TableComponent> = {
    component: TableComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div>${story}</div>`)
    ]
};

export default meta;