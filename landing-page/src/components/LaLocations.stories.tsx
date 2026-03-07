import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import LaLocations from "./LaLocations";

const meta: Meta<typeof LaLocations> = {
  title: "Components/LaLocations",
  component: LaLocations,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LaLocations>;

export const Default: Story = {};
