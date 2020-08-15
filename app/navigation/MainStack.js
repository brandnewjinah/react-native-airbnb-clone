import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Details from "../screens/Details";
import Home from "../screens/Home";
import AddGuest from "../screens/AddGuest";
import RangePicker from "../screens/RangePicker";

import { EvilIcons } from "@expo/vector-icons";
import styled from "styled-components";
import MainTab from "./MainTab";
import Listings from "../screens/Listings";
import ListTab from "./ListTab";
import ListStack from "./ListStack";

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainTab"
      component={MainTab}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RangePicker"
      component={RangePicker}
      options={{
        title: "날짜 추가",
        headerBackTitleVisible: false,
        headerStyle: {
          height: 60,
        },
        headerBackImage: () => (
          <IconWrapper>
            <EvilIcons name="chevron-left" size={30} />
          </IconWrapper>
        ),
      }}
    />
    <Stack.Screen
      name="AddGuest"
      component={AddGuest}
      options={{
        title: "게스트 추가",
        headerBackTitleVisible: false,
        headerStyle: {
          height: 60,
        },
        headerBackImage: () => (
          <IconWrapper>
            <EvilIcons name="chevron-left" size={30} />
          </IconWrapper>
        ),
      }}
    />
    <Stack.Screen
      name="ListStack"
      component={ListStack}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const IconWrapper = styled.View`
  margin-left: ${Platform.OS === "ios" ? "15px" : 0};
`;

export default MainStack;
