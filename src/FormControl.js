// @flow
import * as React from "react";

import Gapped from "./Gapped";
import { Consumer } from "./FormContext";

type FormControlProps = {
  inline?: boolean,
  [key: string]: any
};

const FormControl = ({ inline, ...props }: FormControlProps) => (
  <Consumer>
    {({ spacing }) => (
      <Gapped spacing={spacing} vertical={!inline} {...props} />
    )}
  </Consumer>
);

export default FormControl;
