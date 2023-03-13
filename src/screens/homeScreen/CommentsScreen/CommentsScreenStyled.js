import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
  },
  photo: {
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  commentWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  inputComment: {
    height: 50,
    marginTop: 31,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  sendIcon: {
    position: "absolute",
    bottom: 8,
    right: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
});
