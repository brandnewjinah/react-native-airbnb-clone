import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import components
import Listings from "./Listings";
import Details from "./Details";

//import styles and assets
import styled from "styled-components";

const Stack = createStackNavigator();

const ListStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Listings" component={Listings} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

const IconWrapper = styled.View`
  margin-left: ${Platform.OS === "ios" ? "15px" : 0};
`;

export default ListStack;
