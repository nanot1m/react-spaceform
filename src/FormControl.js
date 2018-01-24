// @flow
import * as React from "react";

type FormControlProps = {
  [key: string]: any
};

const FormControl = ({ style = {}, ...rest }: FormControlProps) => (
  <span {...rest} style={{ ...style }} />
);

export default FormControl;
