import React from "react";
import { View, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

const ViewImage = () => {
  return (
    <Container>
      <Back>
        <Ionicons name="ios-arrow-back" size={20} color="white" />
      </Back>
      <SingleImage source={require("../assets/airbnb_home.jpg")} />
    </Container>
  );
};

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

const Back = styled.View`
  position: absolute;
  top: 40px;
  left: 30px;
`;

const SingleImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

export default ViewImage;
