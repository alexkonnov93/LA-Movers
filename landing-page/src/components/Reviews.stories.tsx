import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Reviews from "./Reviews";

const meta: Meta<typeof Reviews> = {
  title: "Components/Reviews",
  component: Reviews,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Reviews>;

export const Default: Story = {};
