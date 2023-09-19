"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{ $disabled?: boolean }>`
  &:hover {
    background: black;
    color: white;
  }

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }

  ${(props) => {
    switch (props.color) {
      case "primary":
        return css`
          color: blue;
          background-color: white;
        `;
      case "secondary":
        return css`
          color: violet;
          background-color: white;
        `;
      case "error":
        return css`
          color: red;
          background-color: white;
        `;
      case "success":
        return css`
          color: white;
          background-color: green;
        `;
    }
  }}
`;

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <StyledButton
      color="error"
      disabled={false}
      onClick={() => signIn("google", { callbackUrl })}
    >
      Sign in with Google
    </StyledButton>
  );
};

export { GoogleButton };
