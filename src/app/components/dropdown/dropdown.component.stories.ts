import { componentWrapperDecorator, type StoryObj, type Meta } from "@storybook/angular";
import { DropdownComponent } from "./dropdown.component";
import { Dropdown } from "primeng/dropdown";

export const Primary: StoryObj<DropdownComponent> = {
    args: {}
};

const meta: Meta<DropdownComponent> = {
    component: DropdownComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div>${story}</div>`)
    ]
};

export default meta;

