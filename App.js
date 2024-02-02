import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./src/components/Header";
import MovieCardContainer from "./src/components/MovieCardContainer";
import AppStack from "./src/stacks/AppStack";

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <AppStack />
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}

export default App;
