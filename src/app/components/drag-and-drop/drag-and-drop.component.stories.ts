import { DragAndDropComponent } from "./drag-and-drop.component";
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular";

export const Primary: StoryObj<DragAndDropComponent> = {
    args: {}
};

const meta: Meta<DragAndDropComponent> = {
    component: DragAndDropComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div>${story}</div>`),
    ],
};

export default meta;