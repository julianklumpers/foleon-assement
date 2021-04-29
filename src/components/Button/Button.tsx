import * as React from "react";

import { StyledButton } from "./styled";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
}

export const Button: React.FC<IButton> = ({
  children,
  type = "button",
  ...rest
}) => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};
