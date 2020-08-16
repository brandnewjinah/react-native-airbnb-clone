import React from "react";
import { Dimensions, View, StyleSheet, Image, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const ImgSliderItems = ({ item }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: item }} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: "100%",
    resizeMode: "cover",
  },
});

export default ImgSliderItems;
