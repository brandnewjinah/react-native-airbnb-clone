import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import screens
import Accounts from "../screens/Accounts";
import Hosting from "../screens/Hosting";
import HostingStep2 from "../screens/HostingStep2";
import HostingStep3 from "../screens/HostingStep3";
import HostingStep4 from "../screens/HostingStep4";

//import syltes and assets
import { EvilIcons } from "@expo/vector-icons";
import styled from "styled-components";

const Stack = createStackNavigator();

const AccountStack = ({ navigation, route }) => {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true,
    });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accounts"
        component={Accounts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Hosting"
        component={Hosting}
        options={{
          title: false,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <IconWrapper>
              <EvilIcons name="chevron-left" size={30} />
            </IconWrapper>
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep2"
        component={HostingStep2}
        options={{
          title: false,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <IconWrapper>
              <EvilIcons name="chevron-left" size={30} />
            </IconWrapper>
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep3"
        component={HostingStep3}
        options={{
          title: false,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <IconWrapper>
              <EvilIcons name="chevron-left" size={30} />
            </IconWrapper>
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep4"
        component={HostingStep4}
        options={{
          title: false,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <IconWrapper>
              <EvilIcons name="chevron-left" size={30} />
            </IconWrapper>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const IconWrapper = styled.View`
  margin-left: ${Platform.OS === "ios" ? "15px" : 0};
`;

export default AccountStack;
