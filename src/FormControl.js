// @flow
import * as React from "react";

type FormControlProps = {
  [key: string]: any
};

const FormControl = ({ style, ...rest }: FormControlProps) => (
  <span {...rest} style={getStyles(style)} />
);

const getStyles = (ownStyles = {}) => ({
  flex: 1,
  ...ownStyles
});

export default FormControl;
