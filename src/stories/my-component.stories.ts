import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "../index";

const meta: Meta<typeof MyComponent> = {
  title: "Example/My Component",
  component: MyComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {};
