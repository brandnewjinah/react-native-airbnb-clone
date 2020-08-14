import React from "react";
import {
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

//import components
import { TripItem } from "../components/ListItem";

//import styles and icons
import styled from "styled-components";
import Colors from "../config/colors";
import { H3, P, SP } from "../config/Typography";

const Card = ({ image, subtitle, description, title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Body>
        <Container elevation={5}>
          <CoverImg source={{ uri: image }} resizeMode="cover" />
          <Detail>
            <View style={{ marginBottom: 4 }}>
              <SP>{subtitle}</SP>
            </View>
            <H3>{title}</H3>
            <TripItem subtitle={description} arrow="chevron-right" />
          </Detail>
          <HLine></HLine>
          <ViewMore>
            <TouchableOpacity onPress={onPress}>
              <Center>
                <P>여행 계획 더 보기</P>
              </Center>
            </TouchableOpacity>
          </ViewMore>
        </Container>
      </Body>
    </TouchableWithoutFeedback>
  );
};

const Body = styled.View`
  padding: 0 24px;
  ${Platform.select({
    ios: {
      fontFamily: "Avenir",
    },
    android: {
      fontFamily: "Roboto",
    },
  })};
`;

const Container = styled.View`
  width: 100%;
  height: 370px;
  border-radius: 10px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.08);
  background-color: white;
  margin: 16px 0;
`;

const CoverImg = styled.Image`
  width: 100%;
  height: 164px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Detail = styled.View`
  width: 100%;
  padding: 24px;
`;

const HLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.faintgray};
`;

const ViewMore = styled.View`
  padding: 24px;
`;

const Center = styled.View`
  margin: 0 auto;
`;

export default Card;
