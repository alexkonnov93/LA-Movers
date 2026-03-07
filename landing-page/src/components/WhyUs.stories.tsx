import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WhyUs from "./WhyUs";

const meta: Meta<typeof WhyUs> = {
  title: "Components/WhyUs",
  component: WhyUs,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WhyUs>;

/** Default state — dark card with 6 reasons and truck image */
export const Default: Story = {};
