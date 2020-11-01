import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";

//import components
import * as Lists from "./List";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import * as Typography from "../config/Typography";

export const List = ({ data }) => {
  return (
    <ListCard>
      <View>
        <Typography.Sub1 colors={colors.gray}>{data.title}</Typography.Sub1>
      </View>
      <FlatList
        data={data.data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View>
            <View style={{ marginVertical: 15 }}>
              <Typography.P>{item.title}</Typography.P>
              <Typography.P color={colors.gray}>{item.detail}</Typography.P>
            </View>
            <HLine />
          </View>
        )}
        scrollEnabled={false}
      />
    </ListCard>
  );
};

export const Default = ({
  action,
  image,
  title,
  secondary,
  sub,
  meta,
  onPress,
}) => {
  return (
    <Rounded
      style={{
        width: "100%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 5,
        elevation: 5,
      }}
    >
      {image && (
        <ImageContainer>
          <MainImage source={{ uri: image }} />
        </ImageContainer>
      )}
      <View style={{ marginHorizontal: 16, marginVertical: 16 }}>
        {meta && <Typography.SP color={colors.gray}>{sub}</Typography.SP>}
        <Typography.Sub1 color={colors.black}>{title}</Typography.Sub1>
        {secondary && (
          <Typography.P color={colors.gray} numberOfLines={1}>
            {secondary}
          </Typography.P>
        )}
      </View>
      {action && (
        <TouchableOpacity onPress={onPress}>
          <ViewMore>
            <Typography.P color={colors.gray}>{action}</Typography.P>
          </ViewMore>
        </TouchableOpacity>
      )}
    </Rounded>
  );
};

//Card Parts

export const Review = ({ imagexsmall, secondary, title, content }) => {
  return (
    <Outlined>
      <Lists.UserList
        title={title}
        imagexsmall={imagexsmall}
        secondary={secondary}
      />
      <Typography.P numberOfLines={5}>{content}</Typography.P>
    </Outlined>
  );
};

const Rounded = styled.View`
  background-color: white;
  border-radius: 12px;
`;

const ListCard = styled.View`
  width: 260px;
  height: 270px;
  margin: 0 10px;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 180px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
`;

const MainImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const HLine = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: #e6e6e6;
`;

const Outlined = styled.View`
  width: 100%;
  height: 240px;
  background-color: white;
  border: 1px solid ${colors.lightgray};
  border-radius: 10px;
  padding: 20px;
`;

const ViewMore = styled.View`
  padding: 24px;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${colors.faintgray};
`;
