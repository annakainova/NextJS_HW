import React from "react";
import "../styles/button.css";

interface ButtonProps {
  variant?: string;
  size?: "small" | "medium" | "large";
  type: "button" | "submit";
  onClick?: () => void;
  children: any;
}

export const Button = ({
  variant = "outlined",
  size = "large",
  type = "button",
  children,
}: ButtonProps) => {
  let mode = "storybook-button--primary";
  if (variant === "outlined") {
    mode = "storybook-button--outlined";
  } else if (variant === "contained") {
    mode = "storybook-button--contained";
  }

  return (
    <button
      type={type}
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
    >
      {children}
    </button>
  );
};
