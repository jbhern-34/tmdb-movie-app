import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Movies App",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Title",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
