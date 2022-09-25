import { StackNavigationProp } from "@react-navigation/stack";

export type propsNavigationStack = {
  Home: undefined;
  List: {
    params: string;
    title: string;
  };
};

export type propsStack = StackNavigationProp<propsNavigationStack>;
