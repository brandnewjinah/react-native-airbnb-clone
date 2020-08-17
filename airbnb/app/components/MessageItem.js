import React from "react";
import { Dimensions, View } from "react-native";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";

const { width, height } = Dimensions.get("window");

export const MessageItem = ({ id, subtitle, title, caption }) => {
  const msgDirection =
    id === 1
      ? {
          flexDirection: "row-reverse",
          textAlign: "right",
        }
      : { flexDirection: "row" };

  const bubbleStyle =
    id === 1
      ? { backgroundColor: "#b4d9d5", alignSelf: "flex-end" }
      : { backgroundColor: `${colors.faintgray}` };

  return (
    <View>
      <Container style={msgDirection}>
        <Img />
        <Wrapper>
          <Title style={msgDirection}>{title}</Title>
          <Bubble style={bubbleStyle}>
            <SubTitle numberOfLines={1}>{subtitle}</SubTitle>
          </Bubble>
          <Date>{caption}</Date>
        </Wrapper>
      </Container>
    </View>
  );
};

const Container = styled.View`
  padding: 20px;

  ${Platform.select({
    ios: {
      fontFamily: "Avenir",
    },
    android: {
      fontFamily: "Roboto",
    },
  })};
`;

const Img = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: black;
`;

const Wrapper = styled.View`
  flex: 1;
  padding: 0 10px;
`;

const Title = styled.Text`
  font-size: 12px;
  color: ${colors.black};
  margin-bottom: 6px;
`;

const Bubble = styled.View`
  width: 70%;
  border-radius: 16px;
`;

const SubTitle = styled.Text`
  font-size: 13px;
  color: ${colors.darkgray};
  padding: 20px;
`;

const Date = styled.Text`
  font-size: 10px;
  color: ${colors.gray};
  text-align: right;
  padding-top: 5px;
`;
