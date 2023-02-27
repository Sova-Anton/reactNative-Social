import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./ScreensStyles";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
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
      keyboardVerticalOffset={-20}
    >
      <View style={styles.form}>
        <Text style={{ ...styles.title }}>Login</Text>
        <TextInput
          style={[
            { ...styles.input, marginTop: 0 },
            focusedInput === "email" && styles.ifFocused,
          ]}
          value={state.email}
          placeholder="Email address"
          placeholderTextColor={"#BDBDBD"}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
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
            placeholder="Password"
            placeholderTextColor={"#BDBDBD"}
            secureTextEntry={passwordHide}
            onFocus={() => handleFocus("password")}
            onBlur={handleBlur}
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
          <Text style={styles.btnTitle}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
