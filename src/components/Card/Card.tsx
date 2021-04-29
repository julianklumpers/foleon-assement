import React from "react";
import { StyledCard } from "./Styled";

export const Card: React.FC = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};
