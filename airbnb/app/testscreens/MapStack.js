import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import components
import ListStack from "./ListStack";
import ListMap from "./ListMap";
import TestModal from "./TestModal";

//import styles and assets
import styled from "styled-components";

const Stack = createStackNavigator();

const MapStack = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="ListStack"
      component={ListStack}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ListMap" component={ListMap} />
  </Stack.Navigator>
);

const IconWrapper = styled.View`
  margin-left: ${Platform.OS === "ios" ? "15px" : 0};
`;

export default MapStack;
