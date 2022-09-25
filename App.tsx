import React from "react";
import { View, Text } from "react-native";
import { AppRoutes } from "./src/routes/app.routes";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import theme from "./src/styles/theme";

const ApplicationContent = () => {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });
  return (
    <>
      {fontsLoaded && (
        <>
          <AppRoutes />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ApplicationContent />
      </ThemeProvider>
    </>
  );
};

export default App;
