// @flow
import createReactContext from "create-react-context";

type FormContextType = {
  labelWidth?: string | number,
  labelAlign: "top" | "left" | "right",
  spacing: number
};

export const { Consumer, Provider } = createReactContext(
  ({ labelAlign: "top", spacing: 4 }: FormContextType)
);
