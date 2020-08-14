import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

//import components
import { ListItem } from "../components/ListItem";

//import styles and assets
import styled from "styled-components";
import { H3, SP, P, Sub1, Cap } from "../config/Typography";
import Colors from "../config/colors";

//import data

const TripDetails = ({ route }) => {
  const trip = route.params;

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: Number(trip.latitude),
          longitude: Number(trip.longitude),
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{
            latitude: Number(trip.latitude),
            longitude: Number(trip.longitude),
          }}
        ></Marker>
      </MapView>
      <Main>
        <View style={{ marginBottom: 20 }}>
          <H3>{trip.title}</H3>
        </View>

        <HLine />
        <Checkin>
          <View>
            <Cap colors={Colors.gray}>체크인</Cap>
            <Sub1>{trip.check_in_date}</Sub1>
          </View>
          <View>
            <Cap colors={Colors.gray}>체크아웃</Cap>
            <Sub1>{trip.check_out_date}</Sub1>
          </View>
        </Checkin>
        <HLine />
        <Reservation>
          <View>
            <Cap colors={Colors.gray} style={{ marginBottom: 6 }}>
              예약번호
            </Cap>
            <Sub1>{trip.reservation}</Sub1>
          </View>
        </Reservation>
        <HLine />
        <Host>
          <ListItem
            title="호스트: Jinah Lee님"
            subtitle="회원 가입일: 2018년 12월"
            image={require("../assets/profile.jpg")}
          ></ListItem>
        </Host>
        <HLine />
        <Rules>
          <View>
            <Cap colors={Colors.gray}>규칙</Cap>
            <P>-Smoke free</P>
            <P>-No pets allowed</P>
            <P>-Self check-in / out</P>
            <P>-Take off your shoes inside</P>
            <P>-Keep place clean</P>
          </View>
        </Rules>
      </Main>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

const Main = styled.View`
  padding: 24px;
`;

const Checkin = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px 20px 0;
`;
const HLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.lightgray};
`;

const Host = styled.View`
  margin: 10px 0;
`;

const Reservation = styled.View`
  padding: 20px 0;
`;

const Rules = styled.View`
  padding: 20px 0;
`;

const styles = StyleSheet.create({
  map: {
    height: 184,
  },
});

export default TripDetails;
