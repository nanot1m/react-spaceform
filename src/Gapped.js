// @flow
import * as React from "react";
import injectSheet from "react-jss";

type Props = {
  tag: string | React.ComponentType<*>,
  spacing: number,
  classes: { [key: string]: string },
  vertical?: boolean,
  [key: string]: any
};

const Gapped = ({ tag, spacing, classes, vertical, ...rest }) =>
  React.createElement(tag, {
    className: vertical ? classes.vertical : classes.horizontal,
    ...rest
  });

Gapped.defaultProps = {
  tag: "div",
  spacing: 4
};

const styles = {
  vertical: {
    display: "flex",
    flexDirection: "column",
    "& > *:not(:last-child)": {
      marginBottom: props => props.spacing
    }
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    "& > *:not(:last-child)": {
      marginRight: props => props.spacing
    }
  }
};

export default injectSheet(styles)(Gapped);
