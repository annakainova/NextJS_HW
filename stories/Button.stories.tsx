import { Button } from "../components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    children: "Delete",
    variant: "primary",
    size: "small",
    type: "button",
  },
};

export const Medium: Story = {
  args: {
    children: "Delete",
    variant: "primary",
    size: "medium",
    type: "button",
  },
};

export const Large: Story = {
  args: {
    children: "Delete",
    variant: "primary",
    size: "medium",
    type: "button",
  },
};

export const Small_Outlined: Story = {
  args: {
    children: "Delete",
    variant: "outlined",
    size: "small",
    type: "button",
  },
};

export const Medium_Outlined: Story = {
  args: {
    children: "Delete",
    variant: "outlined",
    size: "medium",
    type: "button",
  },
};

export const Large_Outlined: Story = {
  args: {
    children: "Delete",
    variant: "outlined",
    size: "large",
    type: "button",
  },
};

export const Small_Contained: Story = {
  args: {
    children: "Delete",
    variant: "contained",
    size: "small",
    type: "button",
  },
};

export const Medium_Contained: Story = {
  args: {
    children: "Delete",
    variant: "contained",
    size: "medium",
    type: "button",
  },
};

export const Large_Contained: Story = {
  args: {
    children: "Delete",
    variant: "contained",
    size: "medium",
    type: "button",
  },
};
