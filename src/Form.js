// @flow
import * as React from "react";

import { Provider } from "./FormContext";

type FormProps = {
  width?: number | string,
  labelWidth?: number | string,
  labelAlign?: "top" | "left" | "right",
  [key: string]: any
};

export const Form = ({
  width,
  labelAlign = "top",
  labelWidth,
  style = {},
  ...rest
}: FormProps) => (
  <Provider value={{ labelAlign, labelWidth }}>
    <form {...rest} style={{ ...style, width: width || style.width }} />
  </Provider>
);
