import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import Colors from "../config/colors";
import { SP } from "../config/Typography";

export const ListItem = ({
  arrow,
  image,
  onPress,
  RightActions,
  subtitle,
  title,
}) => {
  return (
    <Swipeable renderRightActions={RightActions}>
      <TouchableHighlight underlayColor={Colors.faintgray} onPress={onPress}>
        <Container>
          {image && <Avatar source={image} />}
          <ProfileContainer>
            <ProfileTitle>{title}</ProfileTitle>
            {subtitle && (
              <ProfileSubTitle numberOfLines={1}>{subtitle}</ProfileSubTitle>
            )}
          </ProfileContainer>
          {arrow && <EvilIcons name={arrow} size={20} />}
        </Container>
      </TouchableHighlight>
    </Swipeable>
  );
};

export const MessageItem = ({
  arrow,
  image,
  onPress,
  RightActions,
  subtitle,
  title,
  dates,
}) => {
  return (
    <Swipeable renderRightActions={RightActions}>
      <TouchableHighlight underlayColor={Colors.faintgray} onPress={onPress}>
        <Container>
          {image && <Avatar source={{ uri: image }} />}
          <ProfileContainer>
            <FirstLine>
              <ProfileTitle>{title}</ProfileTitle>
              <View style={{ flexDirection: "row" }}>
                <SP>{dates}</SP>
                {arrow && <EvilIcons name={arrow} size={20} />}
              </View>
            </FirstLine>
            {subtitle && (
              <ProfileSubTitle numberOfLines={1}>{subtitle}</ProfileSubTitle>
            )}
          </ProfileContainer>
        </Container>
      </TouchableHighlight>
    </Swipeable>
  );
};

export const SingleItem = ({ icon, onPress, subtitle, title, iconcolor }) => {
  return (
    <TouchableHighlight underlayColor={Colors.gray} onPress={onPress}>
      <Container>
        <SingleContainer>
          <ProfileContainer>
            <ProfileTitle>{title}</ProfileTitle>
            {subtitle && <ProfileSubTitle>{subtitle}</ProfileSubTitle>}
          </ProfileContainer>
          {icon && <EvilIcons name={icon} size={26} color={iconcolor} />}
        </SingleContainer>
      </Container>
    </TouchableHighlight>
  );
};

export const SearchList = ({ image, onPress, title }) => {
  return (
    <TouchableHighlight underlayColor={Colors.lightgray} onPress={onPress}>
      <Container>
        <Marker>
          <MaterialIcons name="location-on" size={18} />
        </Marker>
        <ProfileContainer>
          <ProfileTitle>{title}</ProfileTitle>
        </ProfileContainer>
      </Container>
    </TouchableHighlight>
  );
};

export const TripItem = ({ arrow, image, onPress, RightActions, subtitle }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <TripContainer>
        <ProfileContainer>
          {subtitle && (
            <ProfileSubTitle numberOfLines={1}>{subtitle}</ProfileSubTitle>
          )}
        </ProfileContainer>
        {arrow && <EvilIcons name={arrow} size={20} />}
      </TripContainer>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
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

const TripContainer = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  ${Platform.select({
    ios: {
      fontFamily: "Avenir",
    },
    android: {
      fontFamily: "Roboto",
    },
  })};
`;

const SingleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 15px;
`;

const Marker = styled.View`
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: ${Colors.faintgray};
  border-radius: 8px;
  border: 1px solid ${Colors.lightgray};
  margin-right: 15px;
`;

const Icon = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

const ProfileContainer = styled.View`
  flex: 1;
`;

const FirstLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ProfileTitle = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
  margin-bottom: 6px;
`;

const ProfileSubTitle = styled.Text`
  font-size: 13px;
  color: ${Colors.darkgray};
`;
