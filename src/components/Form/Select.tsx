import * as React from "react";
import { Path, UseFormRegister } from "react-hook-form";

import { StyledSelect } from "./styled";

interface ISelect {
  name: string;
  register: UseFormRegister<any>;
}

export const Select: React.FC<ISelect> = ({
  name,
  register,
  children,
  ...props
}) => {
  const { name: _name, ...rest } = register(name);
  return (
    <StyledSelect name={name} id={name} {...rest} {...props}>
      {children}
    </StyledSelect>
  );
};
