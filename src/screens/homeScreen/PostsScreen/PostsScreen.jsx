import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./PostsScreenStyled";
import Post from "../../../components/Post";
import db from "../../../firebase/config";

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), postId: doc.id })))
      );
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
          <Text style={styles.textName}>Mister Bin</Text>
          <Text style={styles.textEmail}>BinPretty@gmail.com</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Post item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}
