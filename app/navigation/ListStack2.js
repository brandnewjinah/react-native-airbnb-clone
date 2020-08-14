import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Listings from "../screens/Listings";
import ListTab from "../navigation/ListTab";
import Details from "../screens/Details";
import Reserve_1 from "../screens/Reserve_1";

import styled from "styled-components";

const Stack = createStackNavigator();

const ListStack2 = ({ navigation, route }) => {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true,
    });
  }
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Listings"
        component={ListTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Reserve_1" component={Reserve_1} />
    </Stack.Navigator>
  );
};

const IconWrapper = styled.View`
  margin-left: ${Platform.OS === "ios" ? "15px" : 0};
`;

export default ListStack2;
