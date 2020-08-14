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

const CardView = ({ images, title, subtitle, rating, reviews, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <FlatList
          data={images}
          style={styles.images}
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
      <View style={styles.details}>
        <Rating rating={rating} reviews={reviews} />
        <View style={styles.title}>
          <H4 colors={Colors.black}>{title}</H4>
        </View>

        <PBold>{`$${subtitle}`}</PBold>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },

  images: {
    width: width,
    height: height / 3,
  },

  details: {
    marginTop: 10,
    marginBottom: 20,
  },

  title: {
    marginVertical: 3,
  },
});

export default CardView;
