import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./PostStyled";

import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Post({ item, navigation }) {
  return (
    <View style={styles.postContainer}>
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
              color={item.comments > 0 ? "#FF6C00" : "#BDBDBD"}
            />
          </TouchableOpacity>
          <Text style={styles.textComments}></Text>
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
