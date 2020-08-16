import React from "react";
import { Dimensions, TouchableWithoutFeedback } from "react-native";

//import styles and assets
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../config/colors";
import { SP } from "../config/Typography";

const { width, height } = Dimensions.get("window");
const card_width = width * 0.8;
const img_width = card_width * 0.35;
const desc_width = card_width - img_width;

const MapCard = ({
  image,
  title,
  subtitle,
  rating,
  reviews,
  property,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container>
        <ImgContainer source={{ uri: image }} resizeMode="cover" />
        <Description>
          <SP>{property}</SP>
          <Title numberOfLines={1}>{title}</Title>
          <Price>{`$${subtitle}`}</Price>
          <Rating>
            <FontAwesome name="star" color={Colors.red} />
            <SP>{rating}</SP>
            <SP>{`(${reviews})`}</SP>
          </Rating>
        </Description>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  flex-direction: row;
  width: ${`${card_width}px`};
  height: 110px;
  background-color: white;
  border-radius: 16px;
  margin: 0 10px 20px;
`;

const ImgContainer = styled.Image`
  width: ${`${img_width}px`};
  height: 100%;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: yellow;
`;

const Description = styled.View`
  width: ${`${desc_width}px`};
  padding: 20px 12px;
`;

const Title = styled.Text`
  font-size: 14px;
`;

const Price = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const Rating = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

export default MapCard;
