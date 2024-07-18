import { FileUploadComponent } from "./file-upload.component";
import { componentWrapperDecorator, type Meta, type StoryObj } from "@storybook/angular";

export const Primary: StoryObj<FileUploadComponent> = {};

const meta: Meta<FileUploadComponent> = {
    component: FileUploadComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div>${story}</div>`)
    ],
};

export default meta;