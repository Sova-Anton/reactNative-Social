import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

import { useFonts } from "expo-font";
import { useRoute } from "./src/routes/router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const routing = useRoute({});

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>
    </>
  );
}
