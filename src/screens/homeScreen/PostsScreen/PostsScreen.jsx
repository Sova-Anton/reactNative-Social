import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./PostsScreenStyled";
import Post from "../../../components/Post";
import { listPosts } from "../../../helpers/listPosts";

export default function PostsScreen({ navigation }) {
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
          data={listPosts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Post item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}
