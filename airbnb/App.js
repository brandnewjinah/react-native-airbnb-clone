import React from "react";
import { Text, View, StatusBar, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./app/store/store";

import styled from "styled-components";

import MoreOptions from "./app/screens/MoreOptions";
import Listings from "./app/screens/Listings";
import Details from "./app/screens/Details";
import ViewImage from "./app/screens/ViewImage";
import MessageScreen from "./app/screens/Messages";
import Account from "./app/screens/Accounts";
import Home from "./app/screens/Home";
import RangePicker from "./app/screens/RangePicker";

import AddGuest from "./app/screens/AddGuest";
import ListMap from "./app/screens/ListMap";
import ImgSlider from "./app/components/ImgSlider";
import Trip from "./app/screens/Trip";
import TripDetails from "./app/screens/TripDetails";
import navigationTheme from "./app/navigation/navigationTheme";
import MessageDetail from "./app/screens/MessageDetail";
import Highlights from "./app/components/Highlights";

import AuthStack from "./app/navigation/AuthStack";
import HomeStack from "./app/navigation/HomeStack";
import ListStack from "./app/navigation/ListStack";
import ListTab from "./app/navigation/ListTab";
import HomeTab from "./app/navigation/HomeTab";
import TripStack from "./app/navigation/TripStack";
import ImgSliderItem from "./app/components/ImgSliderItem";

import HostingStep3 from "./app/screens/HostingStep3";

export default function App() {
  return (
    <Common>
      <Provider store={store}>
        <NavigationContainer theme={navigationTheme}>
          <AuthStack />
          {/* <HomeStack /> */}
        </NavigationContainer>
      </Provider>
    </Common>
  );
}

const Common = styled.SafeAreaView`
  ${Platform.select({
    ios: {
      fontFamily: "Avenir",
    },
    android: {
      fontFamily: "Roboto",
      paddingTop: StatusBar.currentHeight,
    },
  })}

  flex: 1;
`;
