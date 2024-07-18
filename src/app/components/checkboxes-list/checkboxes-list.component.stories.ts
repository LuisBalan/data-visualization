import { CheckboxesListComponent } from "./checkboxes-list.component";
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular";

export const Primary: StoryObj<CheckboxesListComponent> = {
    args: {}
};

const meta: Meta<CheckboxesListComponent> = {
    component: CheckboxesListComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div>${story}</div>`)
    ],
};

export default meta;