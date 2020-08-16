import React from "react";
import { Dimensions, View, Platform, StyleSheet, FlatList } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

//import components
import ImgCarousel from "../components/ImgCarousel";
import * as Highlights from "../components/Highlights";
import * as Btn from "../components/Button";
import { ListItem, IconList } from "../components/ListItem";
import * as IconLabel from "../components/IconLabel";
import { NavBar2 } from "../components/NavBar";

//import patterns
import * as Card from "../patterns/Card";

//import screens

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import * as Typography from "../config/Typography";
import { FontAwesome } from "@expo/vector-icons";

//import data
import { AvailAmenities } from "../data/detaildata";
import { review } from "../data/detailreview";

const { width, height } = Dimensions.get("window");

const Details = ({ navigation, route }) => {
  const listing = route.params;

  return (
    <Container>
      <NavBar2 nav="chevron-left" />
      <Detail>
        <ImgCarousel images={listing.images} />
        <BackBtn>
          <Btn.BtnCircle
            iconName="chevron-left"
            size={24}
            onPress={() => navigation.goBack()}
          ></Btn.BtnCircle>
        </BackBtn>

        <MainWrapper>
          <Typography.H2>{listing.title}</Typography.H2>
          <Subheading>
            <IconLabel.FA
              icon="star"
              label="4.65"
              label2="(305)"
              colors={colors.red}
            />
            <IconLabel.MCI
              icon="medal"
              label="슈퍼호스트"
              colors={colors.red}
            />
            <Typography.SP>Cheju, 제주도, 한국</Typography.SP>
          </Subheading>
          <HLine />
          <Section>
            <Highlights.SuperClean />
            <Highlights.SelfCheckin />
            <Highlights.FreeCancellation />
          </Section>
          <HLine />
          <Section>
            <Typography.H2>Description</Typography.H2>
            <Flex>
              <IconLabel.FA icon="bath" label="Bath" qty={listing.baths} />
              <IconLabel.FA icon="bed" label="Bed" qty={listing.beds} />
            </Flex>
            <Typography.P>
              제주 서쪽에 위치한 조용하고 제주스러운 돌담이 멋스러운 지역,
              근사한 바다를 숙소에서 조망할 수 있는 바로 귀덕리 바닷가 앞 아담한
              숙소입니다. 제주 공항에서 자동차로 30분 거리에 있으며, 걸어서 8분
              거리에 버스정거장이 있고, 편의점은 걸어서 10분거리에 있습니다.
            </Typography.P>
            <Btn.BtnTxtUnderline
              label="더 보기"
              color={colors.gray}
              onPress={() => navigation.navigate("Description", listing)}
            />
          </Section>
          <HLine />
          <Section>
            <Typography.H2>Amenities</Typography.H2>
            <IconList
              title="Elevator"
              icon="elevator"
              iconcolor={colors.gray}
            />
            <IconList
              title="Kitchen"
              icon="food-variant"
              iconcolor={colors.gray}
            />
            <IconList title="Wifi" icon="wifi" iconcolor={colors.gray} />
            <IconList
              title="Washer"
              icon="dishwasher"
              iconcolor={colors.gray}
            />
            <IconList
              title="Cable TV"
              icon="youtube-tv"
              iconcolor={colors.gray}
            />
            <Btn.BtnTxtUnderline
              label="더 보기"
              color={colors.gray}
              onPress={() => navigation.navigate("Amenities", listing)}
            />
          </Section>
          <HLine />
          <Section>
            <Typography.H2>Location</Typography.H2>
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
          </Section>
          <HLine />
          <Section>
            <Typography.H2>Reviews</Typography.H2>
            <FlatList
              data={review.slice(0, 4)}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              decelerationRate={0}
              snapToInterval={width - 90}
              snapToAlignment="center"
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ width: width - 100, margin: 5 }}>
                  <Card.Box
                    imagexsmall={item.avatar}
                    title={item.username}
                    subtitle={item.date}
                    content={item.comments}
                  />
                </View>
              )}
            />
            <Btn.BtnTxtUnderline
              label="더 보기"
              color={colors.gray}
              onPress={() => navigation.navigate("Reviews", listing)}
            />
          </Section>
          <HLine />
          <Section>
            <Card.Default
              image={null}
              title="호스트: Jinah Lee님"
              subtitle="회원 가입일: 2018년 12월"
            />
          </Section>
        </MainWrapper>
      </Detail>
      <Reserve>
        <View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Typography.Sub2>${listing.price}</Typography.Sub2>
            <Typography.Sub1 colors={colors.darkgray}> /박</Typography.Sub1>
          </View>

          <IconLabel.FA
            icon="star"
            label="4.65"
            label2="(305)"
            colors={colors.red}
          />
        </View>
        <BtnContainer>
          <Btn.BtnContain
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

const BackBtn = styled.View`
  position: absolute;
  margin-top: ${Platform.OS === "ios" ? "40px" : "40px"};
  margin-left: 20px;
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

const Section = styled.View`
  padding: 18px 0;
`;

const Reserve = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${colors.faintgray};
  background-color: white;
`;

const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 14px 16px 14px 0;
`;

const HLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.lightgray};
`;

const BtnContainer = styled.View`
  width: 50%;
`;

const styles = StyleSheet.create({
  map: {
    height: 200,
    marginTop: 15,
  },
});

export default Details;
