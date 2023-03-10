import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 34,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  cameraContainer: {
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  camera: {
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
  },
  photoContainer: {
    position: "absolute",
  },
  photo: {
    height: 240,
    width: Dimensions.get("window").width - 32,
    resizeMode: "cover",
  },
  containerSnap: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  photoText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  inputTitle: {
    marginTop: 48,
    paddingBottom: 15,
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  inputPlace: {
    paddingLeft: 32,
    marginTop: 32,
    paddingBottom: 15,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  placeSvg: {
    position: "absolute",
    left: 4,
    bottom: 17,
  },
  publishBtn: {
    marginTop: 32,
    height: 51,
    paddingVertical: 16,
    borderRadius: 100,
  },
  publishBtnText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  removeBtnContainer: {
    alignItems: "center",
    marginTop: 120,
  },
  removeBtn: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#F6F6F6",
  },
});
