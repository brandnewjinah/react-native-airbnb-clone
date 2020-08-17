import React from "react";
import { View } from "react-native";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";

export const MessageItem = ({ id, subtitle, title, caption }) => {
  const containerStyle =
    id === 1
      ? {
          flexDirection: "row-reverse",
          textAlign: "right",
          backgroundColor: "blue",
        }
      : { flexDirection: "row" };

  return (
    <Container style={containerStyle}>
      {/* {image && <Avatar source={{ uri: image }} />} */}
      <Img />
      <MessageContainer>
        <Title style={containerStyle}>{title}</Title>
        <MessageWrapper>
          <SubTitle numberOfLines={1}>{subtitle}</SubTitle>
        </MessageWrapper>
        <Date>{caption}</Date>
      </MessageContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  /* flex-direction: row; */

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

const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

const MessageContainer = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const Title = styled.Text`
  font-size: 12px;
  color: ${colors.black};
  margin-bottom: 6px;
  margin-left: 15px;
`;

const TitleReverse = styled.Text`
  font-size: 12px;
  color: ${colors.black};
  text-align: right;
  margin-bottom: 6px;
  margin-right: 15px;
`;

const MessageWrapper = styled.View`
  background-color: ${colors.faintgray};
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
  padding-right: 20px;
`;
