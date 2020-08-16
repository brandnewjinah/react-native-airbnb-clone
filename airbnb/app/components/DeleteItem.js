import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import styled from "styled-components";
import Colors from "../config/colors";

const DeleteItem = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <DeleteView>
        <DeleteText>Delete</DeleteText>
      </DeleteView>
    </TouchableWithoutFeedback>
  );
};

const DeleteView = styled.View`
  background-color: ${Colors.red};
  justify-content: center;
`;

const DeleteText = styled.Text`
  color: white;
  font-weight: bold;
  padding: 20px;
`;

export default DeleteItem;
