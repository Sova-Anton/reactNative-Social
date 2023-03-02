import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./ScreensStyled";

import { Ionicons } from "@expo/vector-icons";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [focusedInput, setFocusedInput] = useState(null);
  const [passwordHide, setPasswordHide] = useState(true);

  const handleFocus = (value) => {
    setFocusedInput(value);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const togglePasswordView = () => {
    setPasswordHide(!passwordHide);
  };

  const handleSubmit = () => {
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/images/bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-110}
          >
            <View style={{ ...styles.form, paddingTop: 92, paddingBottom: 78 }}>
              <View style={styles.avatarContainer}>
                <TouchableOpacity
                  style={styles.btnAddAvatar}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={30}
                    color="#FF6C00"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Registration</Text>
              <TextInput
                style={[
                  { ...styles.input, marginTop: 0 },
                  focusedInput === "login" && styles.ifFocused,
                ]}
                value={state.login}
                onFocus={() => handleFocus("login")}
                onBlur={handleBlur}
                placeholder="Login"
                placeholderTextColor={"#BDBDBD"}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                style={[
                  styles.input,
                  focusedInput === "email" && styles.ifFocused,
                ]}
                value={state.email}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                placeholder="Email address"
                placeholderTextColor={"#BDBDBD"}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={[
                    { ...styles.input, marginTop: 0 },
                    focusedInput === "password" && styles.ifFocused,
                  ]}
                  value={state.password}
                  onFocus={() => handleFocus("password")}
                  onBlur={handleBlur}
                  placeholder="Password"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={passwordHide}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  style={styles.btnPassword}
                  activeOpacity={0.7}
                  onPress={togglePasswordView}
                >
                  <Text style={{ ...styles.btnTitle, color: "#1B4371" }}>
                    {passwordHide ? "Show" : "Hide"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={handleSubmit}
              >
                <Text style={styles.btnTitle}>Register</Text>
              </TouchableOpacity>

              <View style={styles.navigationContainer}>
                <Text style={styles.navigateText}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.redirectText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
