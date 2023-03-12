import { TouchableOpacity } from "react-native";
//Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
//Components
import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import Home from "../screens/homeScreen/Home/Home";
import CommentsScreen from "../screens/homeScreen/CommentsScreen/CommentsScreen";
import MapScreen from "../screens/homeScreen/MapScreen/MapScreen";
//icons
import { Feather } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "Roboto-Medium" },
        headerStyle: { borderBottomWidth: 1 },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity activeOpacity={0.7} style={{ paddingLeft: 16 }}>
                <Feather
                  name="arrow-left"
                  size={24}
                  color="#BDBDBD"
                  onPress={() => navigation.goBack()}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity activeOpacity={0.7} style={{ paddingLeft: 16 }}>
                <Feather
                  name="arrow-left"
                  size={24}
                  color="#BDBDBD"
                  onPress={() => navigation.goBack()}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};
