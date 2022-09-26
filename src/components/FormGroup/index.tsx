import { ReactNode } from "react";
import { ViewProps } from "react-native";
import { FormGroupContainer, FormGroupLabel } from "./styles";

type FormGroupProps = ViewProps & {
  label: string
  children: ReactNode
}

export function FormGroup({ label, children, ...rest }: FormGroupProps) {
  return (
    <FormGroupContainer {...rest}>
      <FormGroupLabel>{label}</FormGroupLabel>
      {children}
    </FormGroupContainer>
  );
}