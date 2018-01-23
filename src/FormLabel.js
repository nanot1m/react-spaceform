// @flow
import * as React from "react";

import { Consumer } from "./FormContext";

type FormLabelProps = {
  [key: string]: any
};

export const FormLabel = ({ style, ...rest }: FormLabelProps) => (
  <Consumer>
    {({ labelWidth, labelAlign }) => (
      <label {...rest} style={createStyles(labelWidth, labelAlign, style)} />
    )}
  </Consumer>
);

const createStyles = (labelWidth, labelAlign, style = {}) => ({
  width: labelWidth,
  ...getAlignStyles(labelAlign),
  ...style
});

const getAlignStyles = labelAlign => {
  if (labelAlign === "top") {
    return {
      display: "block",
      marginBottom: 4
    };
  }
  return {
    display: "inline-block",
    marginRight: 10,
    textAlign: labelAlign
  };
};
