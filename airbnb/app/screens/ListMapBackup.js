import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Animated from "react-native-reanimated";

//import components
import MapCard from "../components/MapCard";

//import styles and assets
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";

//import data
import { rooms } from "../data/data";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 120;
const CARD_WIDTH = width * 0.8;
const CARD_INSET = width * 0.1;

const ListMap = ({ onPress }) => {
  const initialState = {
    rooms,
    region: {
      latitude: 33.392358,
      longitude: 126.535918,
      latitudeDelta: 0.7,
      longitudeDelta: 0.7,
    },
  };

  const [state, setState] = useState(initialState);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.rooms.length) {
        index = state.rooms.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { latitude, longitude } = state.rooms[index];
          _map.current.animateToRegion(
            {
              ...latitude,
              ...longitude,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const _map = useRef(null);

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={_map}
        style={styles.map}
        initialRegion={state.region}
      >
        {state.rooms.map((room, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: Number(room.latitude),
                longitude: Number(room.longitude),
              }}
            >
              <CustomMarker>
                <Text>{room.price}</Text>
              </CustomMarker>
            </Marker>
          );
        })}
      </MapView>

      <CloseBtn>
        <TouchableOpacity onPress={onPress}>
          <EvilIcons name="close" size={30} />
        </TouchableOpacity>
      </CloseBtn>

      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        pagingEnabled
        decelerationRate={0}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: CARD_INSET,
          bottom: 0,
          right: CARD_INSET,
        }}
        contentContainerStyle={{
          marginHorizontal: Platform.OS === "android" ? CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {state.rooms.map((room, index) => (
          <MapCard
            key={index}
            image={room.images[0]}
            property={room.property_type}
            title={room.title}
            subtitle={room.price}
            rating={room.rating}
            reviews={room.reviews}
          />
        ))}
      </Animated.ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Bubble = styled.View`
  flex-direction: row;
  align-self: flex-start;
  background-color: white;
  border-radius: 6px;
  border: 0.5px solid #cccccc;
  padding: 15px;
  width: 150px;
`;

const CustomMarker = styled.View`
  background-color: white;
  border-radius: 20px;
  padding: 6px 16px;
`;

const CloseBtn = styled.View`
  position: absolute;
  margin-top: ${Platform.OS === "ios" ? "40px" : "40px"};
  margin-left: 20px;
  background-color: white;
  border-radius: 6px;
  padding: 4px;
`;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
});

export default ListMap;
