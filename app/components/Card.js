import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import ImgSlider from "../components/ImgSlider";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import { H4, SP } from "../config/Typography";
import { FontAwesome } from "@expo/vector-icons";

import { rooms } from "../data/testdata";

const { width, height } = Dimensions.get("window");

const Card = ({ images, rating, reviews, subtitle, title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container>
        <ImgSlider data={images} />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <FontAwesome name="star" color={Colors.red} />
          <SP>{rating}</SP>
          <SP>{`(${reviews})`}</SP>
        </View>
        <H4 colors={Colors.black}>{title}</H4>
        <Subtitle>{`$${subtitle}`}</Subtitle>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  margin: 16px 0;
  ${Platform.select({
    ios: {
      fontFamily: "Avenir",
    },
    android: {
      fontFamily: "Roboto",
    },
  })};
`;

const ImageContainer = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const styles = StyleSheet.create({
  picture: {
    width,
    height: 200,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Card;
