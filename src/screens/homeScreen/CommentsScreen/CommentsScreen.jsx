import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./CommentsScreenStyled";
import db from "../../../firebase/config";

export default function CommentsScreen({ route }) {
  const [comment, setComment] = useState("");
  const { postId, photo } = route.params;
  const { login } = useSelector((state) => state.auth);

  const createMessage = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, login });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>
      <View style={styles.commentWrapper}>
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
    </View>
  );
}
