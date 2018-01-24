// @flow
import * as React from "react";

type FormRowProps = {
  [key: string]: any
};

const FormRow = ({ style = {}, ...rest }: FormRowProps) => (
  <div {...rest} style={{ marginBottom: 10, ...style }} />
);

export default FormRow;
