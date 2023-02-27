import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { styles } from "./ScreensStyles";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-110}
    >
      <View style={{ ...styles.form, paddingTop: 92, paddingBottom: 78 }}>
        <View style={styles.avtarContainer}>
          <TouchableOpacity style={styles.btnAddAvatar} activeOpacity={0.7}>
            <ImageBackground
              style={styles.imgBtnAdd}
              source={require("../assets/images/add.png")}
            ></ImageBackground>
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
          style={[styles.input, focusedInput === "email" && styles.ifFocused]}
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
        <Text style={styles.link}>Already have an account? Login</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
