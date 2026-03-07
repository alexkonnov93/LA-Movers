import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WhatWeDo from "./WhatWeDo";

const meta: Meta<typeof WhatWeDo> = {
  title: "Components/WhatWeDo",
  component: WhatWeDo,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WhatWeDo>;

export const Default: Story = {};
