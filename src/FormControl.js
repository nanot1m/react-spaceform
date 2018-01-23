// @flow
import * as React from "react";

type FormControlProps = {
  [key: string]: any
};

export const FormControl = ({ style = {}, ...rest }: FormControlProps) => (
  <span
    {...rest}
    style={{ display: "inline-block", verticalAlign: "baseline", ...style }}
  />
);
