import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./CommentsScreenStyled";
import db from "../../../firebase/config";

export default function CommentsScreen({ route }) {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const { postId, photo } = route.params;
  const { login } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllComments();
  }, []);

  //Время создания коммента
  const getData = () => {
    const date = new Date();
    const options = {
      day: "numeric",
      year: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
    const dateFormatter = new Intl.DateTimeFormat("en-us", options);
    const currentData = dateFormatter.format(date);

    return currentData;
  };

  const createMessage = async () => {
    const currentTime = getData();
    await db
      .firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, login, currentTime });
    setComment("");
  };

  const getAllComments = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((data) =>
        setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: photo }} style={styles.photo} />
        </View>
        <View style={styles.commentsContainer}>
          <FlatList
            data={allComments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.commentWrapper}>
                <Image
                  style={styles.avatarImage}
                  source={require("../../../../assets/images/avatar.jpg")}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textComment}>{item.comment}</Text>
                  <Text style={styles.textCommentData}>{item.currentTime}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.commentInputWrapper}>
            <TextInput
              style={styles.inputComment}
              value={comment}
              onChangeText={setComment}
              placeholder="Comment..."
              placeholderTextColor={"#BDBDBD"}
            />
            <TouchableOpacity
              style={styles.sendIcon}
              activeOpacity={0.7}
              onPress={createMessage}
            >
              <AntDesign name="arrowup" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
