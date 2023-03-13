import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postContainer: {
    paddingBottom: 34,
  },
  postImage: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    resizeMode: "contain",
  },
  imageTitle: {
    marginBottom: 10,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionWrap: {
    flexDirection: "row",
  },
  textComments: {
    marginLeft: 4,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  textLocation: {
    fontFamily: "Roboto-Regular",
    textDecorationLine: "underline",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
});
