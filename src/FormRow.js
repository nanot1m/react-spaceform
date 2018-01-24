// @flow
import * as React from "react";

import { Consumer } from "./FormContext";

type FormRowProps = {
  [key: string]: any
};

const FormRow = ({ style, ...rest }: FormRowProps) => (
  <Consumer>
    {({ spacing }) => <div {...rest} style={getStyles(spacing, style)} />}
  </Consumer>
);

export default FormRow;

const getStyles = (spacing, ownStyles = {}) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  marginBottom: spacing * 2,
  ...ownStyles
});
