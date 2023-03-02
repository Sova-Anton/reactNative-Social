import { StyleSheet, View, TouchableOpacity } from "react-native";
//Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//icons
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
//Components
import PostsScreen from "../PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen";
import ProfileScreen from "../ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <MainTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "Roboto-Medium" },
        headerStyle: { borderBottomWidth: 1 },
        tabBarStyle: { height: 83, borderTopWidth: 1 },
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Posts",

          headerRight: () => (
            <TouchableOpacity activeOpacity={0.7} style={{ paddingRight: 16 }}>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.navigate("Login")}
              />
            </TouchableOpacity>
          ),

          tabBarIconStyle: { marginLeft: 60 },

          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="grid-outline"
              size={24}
              color={focused ? color : "#212121"}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Create a post",
          tabBarStyle: { display: "none" },
          headerLeft: () => (
            <TouchableOpacity activeOpacity={0.7} style={{ paddingLeft: 16 }}>
              <Feather
                name="arrow-left"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              style={styles.buttonCreatePost}
              name="add"
              size={24}
              color="#FFFFFF"
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.7} style={{ paddingRight: 16 }}>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.navigate("Login")}
              />
            </TouchableOpacity>
          ),
          tabBarIconStyle: { marginRight: 60 },
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? color : "#212121"}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  buttonCreatePost: {
    backgroundColor: "#FF6C00",
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 30,
  },
});
