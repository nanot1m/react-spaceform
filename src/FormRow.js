// @flow
import * as React from "react";
import injectSheet from "react-jss";
import { Consumer } from "./FormContext";

type FormRowProps = {
  [key: string]: any
};

const styles = {
  row: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    marginBottom: props => props.spacing * 2,
    "&:last-child": {
      marginBottom: 0
    }
  }
};

const StyledRow = injectSheet(styles)(({ classes, ...rest }) => (
  <div className={classes.row} {...rest} />
));

const FormRow = (props: FormRowProps) => (
  <Consumer>
    {({ spacing }) => <StyledRow spacing={spacing} {...props} />}
  </Consumer>
);

export default FormRow;
