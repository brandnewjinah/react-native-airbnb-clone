import React from "react";

//import navigation
import { createStackNavigator } from "@react-navigation/stack";

//import screens
import Hosting from "../screens/Hosting";
import HostingStep1 from "../screens/HostingStep1";
import HostingStep2 from "../screens/HostingStep2";
import HostingStep3 from "../screens/HostingStep3";
import HostingStep4 from "../screens/HostingStep4";
import HostingStep5 from "../screens/HostingStep5";

//import syltes and assets
import { EvilIcons } from "@expo/vector-icons";
import styled from "styled-components";

const Stack = createStackNavigator();

const HostStack = ({ navigation, route }) => {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true,
    });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HostingStep1"
        component={HostingStep1}
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
      <Stack.Screen
        name="HostingStep5"
        component={HostingStep5}
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

export default HostStack;
