import React, { useState } from "react";
import { Dimensions, FlatList, Modal, StatusBar, View } from "react-native";

import FilterItem from "../components/FilterItem";
import { NavBar } from "../components/NavBar";

//import components
import Card from "../components/Card";
import { RoundedButton, IconButton } from "../components/Button";
import ListMap from "../screens/ListMap";

//import styles and assets
import styled from "styled-components";
import { H1, SP } from "../config/Typography";
import { EvilIcons } from "@expo/vector-icons";

import { rooms } from "../data/testdata";

const filteroptions = [
  { label: "난방", value: "난방" },
  { label: "무선인터넷", value: "무선인터넷" },
  { label: "에어컨", value: "에어컨" },
  { label: "헤어드라이어", value: "헤어드라이어" },
  { label: "샴푸", value: "샴푸" },
];

const { width, height } = Dimensions.get("window");

const Listings = ({ navigation }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showMap, setShowMap] = useState(false);

  return (
    <Body>
      <FlatList
        ListHeaderComponent={
          <View style={{ marginTop: 40 }}>
            <View>
              <SP>300개 이상의 숙소</SP>
              <H1>제주도의 숙소</H1>
            </View>
            <BtnContainer>
              <RoundedButton label="필터" onPress={() => setShowFilter(true)} />
            </BtnContainer>
          </View>
        }
        data={rooms}
        keyExtractor={(room) => room.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            images={item.images}
            rating={item.rating}
            reviews={item.reviews}
            title={item.title}
            subtitle={item.price}
            onPress={() => navigation.navigate("Details", item)}
          />
        )}
      ></FlatList>
      <MapBtnWrapper>
        <IconButton
          iconName="map-o"
          label="지도"
          onPress={() => navigation.navigate("ListMap", rooms)}
        />
      </MapBtnWrapper>
      <Modal visible={showMap} animationType="slide">
        <ListMap
          rooms={rooms}
          closeBtn={() => setShowMap(false)}
          // showListing={() => navigation.navigate("Details", item)}
        />
      </Modal>
    </Body>
  );
};

const Body = styled.View`
  flex: 1;
  background-color: white;
  padding: 0 24px;
`;

const BtnContainer = styled.View`
  width: 25%;
  margin: 16px 0;
`;

const MapBtnWrapper = styled.View`
  width: 20%;
  align-self: center;
  position: absolute;
  bottom: 20px;
`;

const CloseBtn = styled.View`
  width: 50px;
  height: 50px;
  background-color: black;
  position: absolute;
  top: 20px;
  align-self: center;
`;

export default Listings;
