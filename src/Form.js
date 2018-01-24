// @flow
import * as React from "react";

import { Provider } from "./FormContext";

type FormProps = {
  width?: number | string,
  labelWidth?: number | string,
  labelAlign?: "top" | "left" | "right",
  spacing?: number,
  [key: string]: any
};

const Form = ({
  width,
  labelAlign = "top",
  labelWidth,
  style = {},
  spacing = 4,
  ...rest
}: FormProps) => (
  <Provider value={{ labelAlign, labelWidth, spacing }}>
    <form {...rest} style={{ ...style, width: width || style.width }} />
  </Provider>
);

export default Form;
