// @flow
import createReactContext from "create-react-context";

type FormContextType = {
  labelWidth?: string | number,
  labelAlign: "top" | "left" | "right"
};

export const { Consumer, Provider } = createReactContext(
  ({ labelAlign: "top" }: FormContextType)
);
