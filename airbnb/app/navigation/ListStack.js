import React from "react";

//import navigation
import { createStackNavigator } from "@react-navigation/stack";
import ListStack2 from "./ListStack2";

//import screens
import ListMap from "../screens/ListMap";

//import styles and assets
import styled from "styled-components";

const Stack = createStackNavigator();

const ListStack = ({ navigation, route }) => {
  // if (route.state) {
  //   navigation.setOptions({
  //     tabBarVisible: route.state.index > 0 ? false : true,
  //   });
  // }

  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="ListStack2"
        component={ListStack2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListMap"
        component={ListMap}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const IconWrapper = styled.View`
  margin-left: ${Platform.OS === "ios" ? "15px" : 0};
`;

export default ListStack;
