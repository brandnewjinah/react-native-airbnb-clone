import React from "react";
import { TouchableOpacity } from "react-native";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import { EvilIcons } from "@expo/vector-icons";

export const SearchTap = ({ icon, size, placeholder, setSearch }) => {
  return (
    <Container>
      <TouchableOpacity onPress={setSearch}>
        <SearchArea>
          <Flex>
            <EvilIcons name={icon} size={size} color={Colors.black} />
            <Placeholder>{placeholder}</Placeholder>
          </Flex>
        </SearchArea>
      </TouchableOpacity>
    </Container>
  );
};

export const SearchInput = ({ ...otherProps }) => {
  return (
    <InputArea>
      <EvilIcons name="search" size={20} color={Colors.black} />
      <Input autoFocus={true} {...otherProps} />
    </InputArea>
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
  border: 1px solid ${Colors.lightgray};
  border-radius: 25px;
  padding: 10px;
`;

const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
  border: 1px solid ${Colors.lightgray};
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
  color: ${Colors.gray};
  margin-left: 10px;
`;
