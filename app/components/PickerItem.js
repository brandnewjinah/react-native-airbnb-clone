import React from "react";
import { TouchableOpacity, Text } from "react-native";

//import styles and assets
import styled from "styled-components";

const PickerItem = ({ label, onPress, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Item>{label}</Item>
    </TouchableOpacity>
  );
};

const Item = styled.Text`
  text-align: center;
  padding: 20px;
`;

export default PickerItem;
