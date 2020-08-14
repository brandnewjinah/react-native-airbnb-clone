import React from "react";
import { View, Text } from "react-native";

import styled from "styled-components";
import Colors from "../config/colors";

const TabButton = () => {
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  );
};

const Container = styled.View`
  background-color: black;
  width: 100px;
  height: 100px;
`;

export default TabButton;
