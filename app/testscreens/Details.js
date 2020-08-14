import React from "react";
import {
  View,
  Image,
  Text,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import { ListItem } from "../components/ListItem";
import styled from "styled-components";
import Colors from "../config/colors";

import { rooms } from "../data/data";

const Details = ({ route }) => {
  const listing = route.params;

  return (
    <Container>
      <ImgSlider source={{ uri: listing.images[0] }} />
      <MainWrapper>
        <HeaderWrapper>
          <Title>{listing.title}</Title>
          <SubTitle>
            <Flex style={{ marginRight: 16 }}>
              <FontAwesome name="star" color={Colors.red} />
              <Text>4.65 (305)</Text>
            </Flex>
            <Flex style={{ marginRight: 16 }}>
              <MaterialCommunityIcons name="medal" color={Colors.red} />
              <Text>슈퍼호스트</Text>
            </Flex>
            <Text>Cheju, 제주도, 한국</Text>
          </SubTitle>
        </HeaderWrapper>
        <HLine />
        <HighlightWrapper>
          <Highlight>
            <EvilIcons name="unlock" size={38} color={Colors.black} />
            <HglText>
              <HglTitle>셀프 체크인</HglTitle>
              <HglBody>키패드를 이용해 체크인하세요</HglBody>
            </HglText>
          </Highlight>
          <Highlight>
            <EvilIcons name="like" size={38} color={Colors.black} />
            <HglText>
              <HglTitle>깨끗하고 깔끔한 숙소</HglTitle>
              <HglBody>
                최근 게스트 13명이 이 숙소가 티 없이 깨끗하다고 후기를
                남겼습니다
              </HglBody>
            </HglText>
          </Highlight>
          <Highlight>
            <EvilIcons name="tag" size={38} color={Colors.black} />
            <HglText>
              <HglTitle>7월 29일까지 무료 취소 가능</HglTitle>
              <HglBody>
                그 이후 8월 7일 3:00 PM 전에 예약을 취소하면 서비스 수수료를
                제외한 요금 전액이 환불됩니다.
              </HglBody>
            </HglText>
          </Highlight>
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
          initialRegion={{
            latitude: listing.coordinate.latitude,
            longitude: listing.coordinate.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          <Marker coordinate={listing.coordinate}></Marker>
        </MapView>
      </MainWrapper>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

const ImgSlider = styled.Image`
  width: 100%;
  height: 300px;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 20px;
`;

const HeaderWrapper = styled.View``;

const Title = styled.Text`
  font-size: 24px;
`;

const SubTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0 20px 0;
`;

const Flex = styled.View`
  flex-direction: row;
`;

const HLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.lightgray};
`;

const HighlightWrapper = styled.View`
  margin: 0 0 20px 0;
`;

const Highlight = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const HglText = styled.View`
  flex-shrink: 1;
  margin-left: 4px;
`;

const HglTitle = styled.Text`
  font-size: 15px;
  color: ${Colors.black};
  margin-bottom: 4px;
`;

const HglBody = styled.Text`
  font-size: 13px;
  color: ${Colors.darkgray};
`;

const Host = styled.View`
  margin: 30px 0;
`;

const styles = StyleSheet.create({
  map: {
    height: 200,
  },
});

export default Details;
