import { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./PostStyled";
import db from "../../firebase/config";

import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Loader from "../../helpers/Loader";

export default function Post({ item, navigation }) {
  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const commentsAmount = allComments?.length;

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = async () => {
    try {
      setIsLoading(true);

      db.firestore()
        .collection("posts")
        .doc(item.postId)
        .collection("comments")
        .onSnapshot((data) =>
          setAllComments(data.docs.map((doc) => ({ ...doc.data() })))
        );

      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View style={styles.postContainer}>
      {isLoading && <Loader />}
      <Image style={styles.postImage} source={{ uri: `${item.photo}` }} />
      <Text style={styles.imageTitle}>{item.title}</Text>
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionWrap}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("Comments", {
                postId: item.postId,
                photo: item.photo,
              })
            }
          >
            <EvilIcons
              name="comment"
              size={24}
              color={commentsAmount > 0 ? "#FF6C00" : "#BDBDBD"}
            />
          </TouchableOpacity>
          <Text
            style={{
              ...styles.textComments,
              color: commentsAmount > 0 ? "#212121" : "#BDBDBD",
            }}
          >
            {commentsAmount}
          </Text>
          <TouchableOpacity style={{ marginLeft: 24 }} activeOpacity={0.7}>
            <Feather name="thumbs-up" size={20} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.textComments}></Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.descriptionWrap}
            onPress={() =>
              navigation.navigate("Map", { location: item.location })
            }
            activeOpacity={0.5}
          >
            <EvilIcons name="location" size={24} color="#BDBDBD" />
            <Text style={styles.textLocation}>{item.place}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
