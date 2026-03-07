import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Faq from "./Faq";

const meta: Meta<typeof Faq> = {
  title: "Components/Faq",
  component: Faq,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Faq>;

export const Default: Story = {};
