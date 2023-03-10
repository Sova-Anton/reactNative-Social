import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./PostsScreenStyled";
import Post from "../../../components/Post";
import { listPosts } from "../../../helpers/listPosts";

export default function PostsScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [route.params, ...prevState]);
    }
  }, [route.params]);
  console.log("posts", posts);

  console.log("route.params", route.params);
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
