import React, { useState } from "react";
import { Dimensions, View, StyleSheet, Image, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const assets = [
  "https://a0.muscache.com/im/pictures/dea004da-ce7c-4b96-8ded-788ef3168349.jpg",
  "https://a0.muscache.com/im/pictures/6a4518bf-30b5-423a-bce9-ca37ef8684f2.jpg",
  "https://a0.muscache.com/im/pictures/4c01023f-0bf0-4be9-9b9a-7fca7f2e0f39.jpg",
  "https://a0.muscache.com/im/pictures/d9cb5d9c-180b-47e4-a4da-a0ef60183e6c.jpg",
  "https://a0.muscache.com/im/pictures/694715b0-d81f-42d8-b7a3-219c13f7e3e9.jpg",
];

const Images = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://a0.muscache.com/im/pictures/dea004da-ce7c-4b96-8ded-788ef3168349.jpg",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: "100%",
    resizeMode: "contain",
  },
});

export default Images;
