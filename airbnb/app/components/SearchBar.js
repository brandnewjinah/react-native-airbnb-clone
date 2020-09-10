import React from "react";
import { TouchableOpacity } from "react-native";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import { EvilIcons } from "@expo/vector-icons";

export const SearchTap = ({ icon, size, placeholder, setSearch }) => {
  return (
    <Container>
      <TouchableOpacity onPress={setSearch}>
        <SearchArea>
          <Flex>
            <EvilIcons name={icon} size={size} color={colors.black} />
            <Placeholder>{placeholder}</Placeholder>
          </Flex>
        </SearchArea>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const SearchArea = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  border: 1px solid ${colors.lightgray};
  border-radius: 25px;
  padding: 10px;
`;

const Flex = styled.View`
  flex-direction: row;
`;

const Input = styled.TextInput`
  margin-left: 10px;
`;

const Placeholder = styled.Text`
  color: ${colors.gray};
  margin-left: 10px;
`;
