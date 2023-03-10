import { useState, useEffect } from "react";

import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./CreatePostsScreenStyled";
import { TextInput } from "react-native-gesture-handler";

export default function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     await Camera.requestCameraPermissionsAsync();
  //     await Location.requestForegroundPermissionsAsync();
  //   })();
  // }, []);

  const takePhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access camera was denied");
      return;
    }
    const { uri } = await camera.takePictureAsync();

    setPhoto(uri);
  };

  const clearPost = () => {
    setPhoto("");
    setTitle("");
    setPlace("");
  };

  const sendPost = async () => {
    if (!photo) {
      return;
    }
    const data = await Location.getCurrentPositionAsync();
    const location = {
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
    };
    navigation.navigate("Posts", { photo, title, place, location });
    clearPost();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.cameraContainer}>
            <Camera style={styles.camera} ref={setCamera}>
              {photo && (
                <View style={styles.photoContainer}>
                  <Image source={{ uri: photo }} style={styles.photo} />
                </View>
              )}

              <TouchableOpacity onPress={takePhoto} activeOpacity={0.7}>
                <View
                  style={{
                    ...styles.containerSnap,
                    backgroundColor: !photo
                      ? "#FFFFFF"
                      : "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <Ionicons
                    name="ios-camera"
                    size={24}
                    color={!photo ? "#BDBDBD" : "#FFFFFF"}
                  />
                </View>
              </TouchableOpacity>
            </Camera>
          </View>
          <Text style={styles.photoText}>
            {!photo ? "Upload a photo" : "Edit photo"}
          </Text>

          <View>
            <TextInput
              style={{
                ...styles.inputTitle,
                fontFamily: !title ? "Roboto-Regular" : "Roboto-Medium",
              }}
              value={title}
              placeholder="Title..."
              placeholderTextColor={"#BDBDBD"}
              onChangeText={(value) => setTitle(value)}
            />
            <View>
              <Feather
                style={styles.placeSvg}
                name="map-pin"
                size={22}
                color="#BDBDBD"
              />
              <TextInput
                style={styles.inputPlace}
                value={place}
                placeholder="Location..."
                placeholderTextColor={"#BDBDBD"}
                onChangeText={(value) => setPlace(value)}
              />
            </View>

            <TouchableOpacity
              onPress={sendPost}
              style={{
                ...styles.publishBtn,
                backgroundColor: !photo ? "#F6F6F6" : "#FF6C00",
              }}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  ...styles.publishBtnText,
                  color: !photo ? "#BDBDBD" : "#FFFFFF",
                }}
              >
                Publish
              </Text>
            </TouchableOpacity>
            <View style={styles.removeBtnContainer}>
              <TouchableOpacity
                onPress={clearPost}
                style={styles.removeBtn}
                activeOpacity={0.7}
              >
                <Ionicons name="trash-outline" size={24} color="#DADADA" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
