import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import screens

import Message from "../screens/Messages";
import MessageDetail from "../screens/MessageDetail";

//import styles, icons
import styled from "styled-components";

const Stack = createStackNavigator();

const MessageStack = ({ navigation, route }) => {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true,
    });
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Message"
        component={Message}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MessageDetail"
        component={MessageDetail}
        options={({ route }) => ({ title: route.params.fromUser })}
      />
    </Stack.Navigator>
  );
};

export default MessageStack;
