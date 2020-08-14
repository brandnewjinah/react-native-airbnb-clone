import React from "react";
import {
  View,
  Image,
  Text,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

//import components
import * as Highlights from "../components/Highlights";
import { BtnContain, BtnCircle } from "../components/Button";
import { ListItem } from "../components/ListItem";
import styled from "styled-components";
import Colors from "../config/colors";
import ImgCarousel from "../components/ImgCarousel";

import { rooms } from "../data/data";
import Listings from "./Listings";

//import styles and assets
import { H1, SP, P, Sub1, Sub2 } from "../config/Typography";
import {
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Details = ({ navigation, route }) => {
  const listing = route.params;

  return (
    <Container>
      <Detail>
        <ImgCarousel images={listing.images} />
        <CloseBtn>
          <BtnCircle
            iconName="close"
            size={24}
            onPress={() => navigation.goBack()}
          ></BtnCircle>
        </CloseBtn>

        <MainWrapper>
          <H1>{listing.title}</H1>
          <Subheading>
            <Flex>
              <FontAwesome
                name="star"
                color={Colors.red}
                style={{ marginRight: 6 }}
              />
              <P>4.65 (305)</P>
            </Flex>
            <Flex>
              <MaterialCommunityIcons
                name="medal"
                color={Colors.red}
                style={{ marginRight: 6 }}
              />
              <P>슈퍼호스트</P>
            </Flex>
            <Text>Cheju, 제주도, 한국</Text>
          </Subheading>
          <HLine />
          <HighlightWrapper>
            <Highlights.SuperClean />
            <Highlights.SelfCheckin />
            <Highlights.FreeCancellation />
          </HighlightWrapper>
          <HLine />
          <Host>
            <ListItem
              title="호스트: Jinah Lee님"
              subtitle="회원 가입일: 2018년 12월"
              image={require("../assets/profile.jpg")}
            ></ListItem>
          </Host>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            scrollEnabled={false}
            initialRegion={{
              latitude: listing.coordinate.latitude,
              longitude: listing.coordinate.longitude,
              latitudeDelta: 0.5,
              longitudeDelta: 0.5,
            }}
          >
            <Marker coordinate={listing.coordinate}></Marker>
          </MapView>
        </MainWrapper>
      </Detail>
      <Reserve>
        <View>
          <Flex>
            <Sub2>${listing.price}</Sub2>
            <Sub1 colors={Colors.darkgray}> /박</Sub1>
          </Flex>
          <Flex>
            <FontAwesome
              name="star"
              color={Colors.red}
              style={{ marginRight: 6 }}
            />
            <SP>4.65 (305)</SP>
          </Flex>
        </View>
        <BtnContainer>
          <BtnContain
            label="예약하기"
            onPress={() => navigation.navigate("Reserve_1", listing)}
          />
        </BtnContainer>
      </Reserve>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Detail = styled.ScrollView`
  flex: 1;
`;

const Reserve = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${Colors.faintgray};
  background-color: white;
`;

const ImgSlider = styled.Image`
  width: 100%;
  height: 300px;
`;

const CloseBtn = styled.View`
  position: absolute;
  margin-top: ${Platform.OS === "ios" ? "40px" : "40px"};
  margin-left: 20px;
  /* background-color: white;
  border-radius: 12px;
  padding: 4px; */
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 20px 30px 20px 20px;
`;

const Subheading = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;

const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`;

const HLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.lightgray};
`;

const HighlightWrapper = styled.View`
  margin: 0 0 20px 0;
`;

const Host = styled.View`
  margin: 30px 0;
`;

const BtnContainer = styled.View`
  width: 50%;
`;

const styles = StyleSheet.create({
  map: {
    height: 200,
  },
});

export default Details;
