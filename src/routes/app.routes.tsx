import React from "react";
import Home from "../modules/screens/Home/Home";

import { propsNavigationStack } from "./Models";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import ListBooks from "../modules/screens/ListBooks/ListBook";

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="List" component={ListBooks} />
      </Navigator>
    </NavigationContainer>
  );
};

export { AppRoutes };
