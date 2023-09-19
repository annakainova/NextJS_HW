"use client";

import "../styles/input.css";

type Props = {
  variant?: "outlined" | "filled" | "standart";
  type: "email" | "password";
  id: string;
  name: string;
  required: boolean;
};

const Input = ({ variant, type, id, name, required }: Props) => {
  let mode = "storybook-input--standard";
  if (variant === "outlined") {
    mode = "storybook-input--outlined";
  } else if (variant === "filled") {
    mode = "storybook-input--filled";
  }
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        required={required}
        className={mode}
      />
    </div>
  );
};

export { Input };
