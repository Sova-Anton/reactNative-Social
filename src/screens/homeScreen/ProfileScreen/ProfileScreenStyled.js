import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
  backgroundImage: {
    flex: 1,
    marginBottom: -100,
    resizeMode: "center",
    justifyContent: "flex-end",
  },
  profileWrapper: {
    flex: 1,
    marginTop: 150,
    paddingTop: 92,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -45 }],
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatarImage: {
    resizeMode: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  btnRemoveAvatar: {
    position: "absolute",
    right: -16,
    bottom: 14,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  btnLogOut: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 1,
    color: "#212121",
    marginBottom: 33,
  },
});
