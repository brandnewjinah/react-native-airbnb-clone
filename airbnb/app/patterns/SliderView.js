import React from "react";
import { Dimensions, View, StyleSheet, FlatList } from "react-native";

//import components
import ImgSliderItem from "../components/ImgSliderItem";
import Rating from "../components/Rating";

//import styles and assets
import colors from "../config/colors";
import * as Typography from "../config/Typography";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const SliderView = ({ images, title, subtitle, rating, reviews, onPress }) => {
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
          <Typography.H4 colors={colors.black}>{title}</Typography.H4>
        </View>

        <Typography.PBold>{`$${subtitle}`}</Typography.PBold>
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

export default SliderView;
