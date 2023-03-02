import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
  },
  containerUserProfile: {
    flexDirection: "row",
    marginBottom: 32,
    alignItems: "center",
  },
  imageProfile: {
    resizeMode: "center",
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  imageWrapper: {
    marginRight: 8,
  },
  textName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  textEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
