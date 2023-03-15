import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./PostsScreenStyled";
import Post from "../../../components/Post";
import db from "../../../firebase/config";
import Loader from "../../../helpers/Loader";

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { email, login } = useSelector((state) => state.auth);

  const getAllPosts = async () => {
    try {
      setIsLoading(true);
      await db
        .firestore()
        .collection("posts")
        .onSnapshot((data) =>
          setPosts(data.docs.map((doc) => ({ ...doc.data(), postId: doc.id })))
        );
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerUserProfile}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imageProfile}
            source={require("../../../../assets/images/avatar.jpg")}
          ></Image>
        </View>

        <View>
          <Text style={styles.textName}>{login}</Text>
          <Text style={styles.textEmail}>{email}</Text>
        </View>
      </View>
      {isLoading && <Loader />}
      <View>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.postId}
          renderItem={({ item }) => (
            <Post item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}

// allow read, write: if request.auth != null;
