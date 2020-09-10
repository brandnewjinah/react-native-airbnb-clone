import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

//import components
import MapCard from "../components/MapCard";

//import styles and assets
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";

//import data
// import { rooms } from "../data/testdata";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 120;
const CARD_WIDTH = width * 0.8;
const CARD_INSET = width * 0.1;

const ListMap = ({ navigation, route, closeBtn, showListing }) => {
  const rooms = route.params;

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
          const { coordinate } = state.rooms[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = state.rooms.map((room, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.25, 1],
      extrapolate: "clamp",
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === "ios") {
      x = x - CARD_INSET;
    }

    _scrollView.current.getNode().scrollTo({ x: x, y: 0, animated: true });
  };

  const _map = useRef(null);
  const _scrollView = useRef(null);

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={_map}
        style={styles.map}
        initialRegion={state.region}
      >
        {state.rooms.map((room, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <Marker
              key={index}
              coordinate={room.coordinate}
              onPress={(e) => onMarkerPress(e)}
            >
              <Animated.View
                style={[
                  {
                    borderRadius: 20,
                    paddingVertical: 6,
                    paddingHorizontal: 16,
                  },
                  scaleStyle,
                ]}
              >
                <CustomMarker>
                  <Text>${room.price}</Text>
                </CustomMarker>
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>

      <CloseBtn>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <EvilIcons name="close" size={30} />
        </TouchableOpacity>
      </CloseBtn>

      <Animated.ScrollView
        ref={_scrollView}
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
            onPress={() => navigation.navigate("Details", room)} //pass room info?
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

const CustomMarkerCurrent = styled.View`
  background-color: black;
  border-radius: 20px;
  padding: 6px 16px;
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
