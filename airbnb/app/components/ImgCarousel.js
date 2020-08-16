import React from "react";
import { Dimensions, View, StyleSheet, FlatList } from "react-native";

//import components
import ImgSliderItem from "./ImgSliderItem";
import Rating from "./Rating";

//import styles and assets
import Colors from "../config/colors";
import { H4, PBold } from "../config/Typography";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const CardView = ({ images }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => "key" + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ImgSliderItem item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: width,
    height: height / 2.5,
    borderRadius: 10,
  },
});

export default CardView;
