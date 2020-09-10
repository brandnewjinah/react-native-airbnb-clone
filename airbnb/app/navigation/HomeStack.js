import React from "react";

//import navigation
import { createStackNavigator } from "@react-navigation/stack";
import HomeTab from "./HomeTab";
import ListStack from "./ListStack";

//import screens
import RangePicker from "../screens/RangePicker";
import AddGuest from "../screens/AddGuest";

//import styles and assets
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeTab"
      component={HomeTab}
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

export default HomeStack;
