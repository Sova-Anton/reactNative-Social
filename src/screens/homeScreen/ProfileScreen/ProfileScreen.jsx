import {
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
//icons
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Post from "../../../components/Post";
import { listPosts } from "../../../helpers/listPosts";
import { styles } from "./ProfileScreenStyled";
import { authSignOutUser } from "../../../redux/auth/authOperations";

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser());
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../../assets/images/bg.jpg")}
      >
        <View style={styles.profileWrapper}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImage}
              source={require("../../../../assets/images/avatar.jpg")}
            />
            <TouchableOpacity
              style={styles.btnRemoveAvatar}
              activeOpacity={0.7}
            >
              <Ionicons name="close-circle-outline" size={30} color="#E8E8E8" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnLogOut} activeOpacity={0.7}>
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={signOut}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Mister Bin</Text>

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
      </ImageBackground>
    </View>
  );
}
