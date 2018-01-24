// @flow
import * as React from "react";

import { Consumer } from "./FormContext";

type FormLabelProps = {
  [key: string]: any
};

const FormLabel = ({ style, ...rest }: FormLabelProps) => (
  <Consumer>
    {({ labelWidth, labelAlign, spacing }) => (
      <label
        {...rest}
        style={createStyles(labelWidth, labelAlign, spacing, style)}
      />
    )}
  </Consumer>
);

const createStyles = (labelWidth, labelAlign, spacing, onwStyles = {}) => ({
  width: labelWidth,
  ...getAlignStyles(labelAlign, spacing),
  ...onwStyles
});

const getAlignStyles = (labelAlign, spacing) => {
  if (labelAlign === "top") {
    return {
      flexBasis: "100%",
      marginBottom: spacing
    };
  }
  return {
    marginRight: spacing * 2,
    textAlign: labelAlign
  };
};

export default FormLabel;
