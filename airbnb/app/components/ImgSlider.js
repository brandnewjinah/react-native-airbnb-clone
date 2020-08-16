import React from "react";
import {
  View,
  Dimensions,
  ScrollView,
  Image,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import { rooms } from "../data/data";

const assets = [
  "https://a0.muscache.com/im/pictures/dea004da-ce7c-4b96-8ded-788ef3168349.jpg",
  "https://a0.muscache.com/im/pictures/6a4518bf-30b5-423a-bce9-ca37ef8684f2.jpg",
  "https://a0.muscache.com/im/pictures/4c01023f-0bf0-4be9-9b9a-7fca7f2e0f39.jpg",
  "https://a0.muscache.com/im/pictures/d9cb5d9c-180b-47e4-a4da-a0ef60183e6c.jpg",
  "https://a0.muscache.com/im/pictures/694715b0-d81f-42d8-b7a3-219c13f7e3e9.jpg",
];

const { width, height } = Dimensions.get("window");

const ImgSlider = ({ data }) => {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate={0}
        horizontal={true}
      >
        {data.map((image) => (
          <View key={image} style={styles.picture}>
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  picture: {
    width,
    height: 218,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
});

export default ImgSlider;
