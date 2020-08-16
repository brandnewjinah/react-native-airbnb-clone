import React from "react";
import { TouchableHighlight, Platform, View, Image } from "react-native";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import * as Typography from "../config/Typography";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

export const Default = ({
  image,
  imagesmall,
  onPress,
  title,
  subtitle,
  arrow,
}) => {
  return (
    <TouchableHighlight underlayColor={colors.faintgray} onPress={onPress}>
      <Container>
        {image ? (
          <Avatar source={{ uri: `${image}` }} />
        ) : imagesmall ? (
          <AvatarSmall source={{ uri: `${imagesmall}` }} />
        ) : imagesmall === null ? (
          <AvatarSmallEmpty>
            <AntDesign name="user" size={26} color="white" />
          </AvatarSmallEmpty>
        ) : (
          <AvatarEmpty>
            <AntDesign name="user" size={26} color="white" />
          </AvatarEmpty>
        )}
        <View>
          <Typography.Sub1>{title}</Typography.Sub1>
          {subtitle && (
            <Typography.pS numberOfLines={1} colors={colors.gray}>
              {subtitle}
            </Typography.pS>
          )}
        </View>
        {arrow && <EvilIcons name={arrow} size={20} />}
      </Container>
    </TouchableHighlight>
  );
};

export const Box = ({ imagexsmall, onPress, title, subtitle, content }) => {
  return (
    <TouchableHighlight underlayColor={colors.faintgray} onPress={onPress}>
      <BoxContainer>
        <Flex>
          {imagexsmall === null ? (
            <AvatarXsmallEmpty>
              <AntDesign name="user" size={26} color="white" />
            </AvatarXsmallEmpty>
          ) : (
            <AvatarXsmall source={{ uri: `${imagexsmall}` }} />
          )}
          <View>
            <Typography.P>{title}</Typography.P>
            {subtitle && (
              <Typography.SP numberOfLines={1} colors={colors.gray}>
                {subtitle}
              </Typography.SP>
            )}
          </View>
        </Flex>
        <Vspacing />
        {/* <Typography.P>{content}</Typography.P> */}
        <Typography.P numberOfLines={5}>{content}</Typography.P>
      </BoxContainer>
    </TouchableHighlight>
  );
};

const Container = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

const BoxContainer = styled.View`
  width: 100%;
  height: 200px;
  background-color: white;
  border: 1px solid ${colors.lightgray};
  border-radius: 10px;
  padding: 20px;
`;

const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 15px;
`;

const AvatarSmall = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-right: 12px;
  background-color: ${colors.lightgray};
`;

const AvatarXsmall = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  margin-right: 10px;
  background-color: ${colors.lightgray};
`;

const AvatarEmpty = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 15px;
  background-color: ${colors.lightgray};
`;

const AvatarSmallEmpty = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-right: 12px;
  background-color: ${colors.lightgray};
`;

const AvatarXsmallEmpty = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  margin-right: 10px;
  background-color: ${colors.lightgray};
`;

const Flex = styled.View`
  display: flex;
  flex-direction: row;
`;

const Vspacing = styled.View`
  padding: 5px 0;
`;
