import React from "react";
import { View, Button, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

//import styles and asses
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";
import { P } from "../config/Typography";
import Colors from "../config/colors";

const LocationPicker = ({ closeBtn, location }) => {
  return (
    <Container>
      <Header>
        <CloseBtn>
          <TouchableOpacity onPress={closeBtn}>
            <EvilIcons name="close" size={30} />
          </TouchableOpacity>
        </CloseBtn>
        <Confirm>
          <Button title="확인" onPress={closeBtn}></Button>
        </Confirm>
      </Header>
      <Main>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          scrollEnabled={false}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          ></Marker>
        </MapView>
      </Main>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 24px;
`;

const Confirm = styled.View``;

const Main = styled.View``;
const Mapcontainer = styled.View`
  height: 300px;
  background-color: black;
`;

const CloseBtn = styled.View`
  /* position: absolute;
  margin-top: ${Platform.OS === "ios"
    ? "40px"
    : "40px"}; */
  border-radius: 6px;
  padding: 4px;
`;

const styles = StyleSheet.create({
  map: {
    height: 200,
  },
});

export default LocationPicker;
