import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";

import { EvilIcons } from "@expo/vector-icons";
import styled from "styled-components";
import MainStack from "./MainStack";

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: false,
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
      name="MainStack"
      component={MainStack}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const IconWrapper = styled.View`
  margin-left: ${Platform.OS === "ios" ? "15px" : 0};
`;

export default AuthStack;
