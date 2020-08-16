import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styled from "styled-components";

const FilterItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <EachLine>{label}</EachLine>
    </TouchableOpacity>
  );
};

const EachLine = styled.Text`
  padding: 20px;
`;

export default FilterItem;
