import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import screens

import Trip from "../screens/Trip";
import TripDetails from "../screens/TripDetails";

//import styles, icons
import styled from "styled-components";

const Stack = createStackNavigator();

const ListStack = ({ navigation, route }) => {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true,
    });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trip"
        component={Trip}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="TripDetails" component={TripDetails} />
    </Stack.Navigator>
  );
};

export default ListStack;
