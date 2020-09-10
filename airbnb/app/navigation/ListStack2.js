import React from "react";

//import navigation
import { createStackNavigator } from "@react-navigation/stack";
import ListTab from "../navigation/ListTab";

//import screens
import Details from "../screens/Details";
import Description from "../screens/details/Description";
import Amenities from "../screens/details/Amenities";
import Reserve_1 from "../screens/Reserve_1";
import Reviews from "../screens/details/Reviews";

//import styles and assets
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const ListStack2 = ({ navigation, route }) => {
  // if (route.state) {
  //   navigation.setOptions({
  //     tabBarVisible: route.state.index > 0 ? false : true,
  //   });
  // }
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="Description"
        component={Description}
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
        name="Amenities"
        component={Amenities}
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
        name="Reserve_1"
        component={Reserve_1}
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
        name="Reviews"
        component={Reviews}
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
    </Stack.Navigator>
  );
};

const IconWrapper = styled.View`
  margin-left: ${Platform.OS === "ios" ? "15px" : 0};
`;

export default ListStack2;
