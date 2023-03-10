import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";

export default function MapScreen({ route }) {
  console.log("route.params", route.params);
  const location = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={{
          ...location,
          latitudeDelta: 0.002,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
      >
        <Marker coordinate={{ ...location }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
