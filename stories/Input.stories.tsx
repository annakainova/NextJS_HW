import { Input } from "../components/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Email: Story = {
  args: {
    variant: "standart",
    type: "email",
    name: "Email",
    id: "email",
    required: true
  },
};

export const Password: Story = {
  args: {
    variant: "standart",
    type: "password",
    id: "password",
    name: "Password",
    required: true
  },
};
export const Email_filled: Story = {
  args: {
    variant: "filled",
    type: "email",
    name: "Email",
    required: true,
  },
};

export const Password_filled: Story = {
  args: {
    variant: "filled",
    type: "password",
    name: "Password",
    required: true,
  },
};

export const Email_outlined: Story = {
  args: {
    variant: "outlined",
    type: "email",
    name: "Email",
    required: true,
  },
};

export const Password_outlined: Story = {
  args: {
    variant: "outlined",
    type: "password",
    name: "Password",
    required: true,
  },
};
