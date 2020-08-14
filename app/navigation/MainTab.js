import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import styles and assets
import { EvilIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Messages from "../screens/Messages";
import Accounts from "../screens/Accounts";
import AccountStack from "../navigation/AccountStack";
import TripStack from "../navigation/TripStack";
import HostStack from "../navigation/HostStack";

const Tab = createBottomTabNavigator();

const MainTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="검색"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="여행"
      component={TripStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="calendar" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="호스트"
      component={HostStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="chart" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="메시지"
      component={Messages}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="comment" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="프로필"
      component={AccountStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTab;
