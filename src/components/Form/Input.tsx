import * as React from "react";
import { Path, UseFormRegister } from "react-hook-form";

import { StyledInput } from "./styled";

interface IInput {
  name: string;
  type?: string;
  register: UseFormRegister<any>;
}

export const Input: React.FC<IInput> = ({
  name,
  type = "text",
  register,
  ...props
}) => {
  const { name: _name, ...rest } = register(name);
  return <StyledInput name={name} type={type} id={name} {...rest} {...props} />;
};
