import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

import Images from "./Images";

const { width, height } = Dimensions.get("window");

const ImagesContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Images />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },

  image: {
    width: width - 20,
    height: height / 3,
  },
});

export default ImagesContainer;
