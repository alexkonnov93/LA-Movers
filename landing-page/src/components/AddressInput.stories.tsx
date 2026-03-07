import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { userEvent, within, expect } from "storybook/test";
import AddressInput from "./AddressInput";

const meta: Meta<typeof AddressInput> = {
  title: "Components/AddressInput",
  component: AddressInput,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          minHeight: 400,
          paddingTop: 300,
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
          background: "rgba(0,0,0,0.85)",
        }}
      >
        <div
          style={{
            width: 400,
            height: 81,
            borderRight: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    label: "Moving From",
    placeholder: "Current Zip / City",
    className: "h-full py-[12px] pl-[20px] pr-[24px]",
  },
};

export default meta;
type Story = StoryObj<typeof AddressInput>;

/** Default empty state */
export const Empty: Story = {};

/** Input is focused — shows bg-white/10 */
export const Focused: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Current Zip / City");
    await userEvent.click(input);
  },
};

/** User is typing — dropdown appears above */
export const Typing: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Current Zip / City");
    await userEvent.click(input);
    await userEvent.type(input, "Los", { delay: 80 });
  },
};

/** User selects an address from the dropdown */
export const WithSelection: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Current Zip / City");
    await userEvent.click(input);
    await userEvent.type(input, "Los", { delay: 80 });
    // Wait for dropdown to appear, then click the first item
    const items = await canvas.findAllByRole("listitem");
    await userEvent.click(items[0]);
  },
};

/** Filled state — shows truncated text + close icon */
export const Filled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Current Zip / City");
    await userEvent.click(input);
    await userEvent.type(input, "Los", { delay: 80 });
    const items = await canvas.findAllByRole("listitem");
    await userEvent.click(items[0]);
    // Blur to show filled state
    await userEvent.tab();
  },
};
