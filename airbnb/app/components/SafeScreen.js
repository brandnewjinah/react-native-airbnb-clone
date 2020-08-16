import React from "react";
import { SafeAreaView, Platform, StatusBar, View } from "react-native";

//import styles and assets
import styled from "styled-components";

const SafeScreen = ({ children }) => {
  return (
    <Safe>
      <View>{children}</View>
    </Safe>
  );
};

const Safe = styled.SafeAreaView`
  ${Platform.select({
    android: {
      paddingTop: StatusBar.currentHeight,
    },
  })}
`;

export default SafeScreen;
