import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { useFormikContext } from "formik";

//import components
import ErrorMessage from "./ErrorMessage";

//import styles and assets
import styled from "styled-components";
import colors from "../../config/colors";
import { EvilIcons } from "@expo/vector-icons";

export const Default = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <Container>
      <Inputfield
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      ></Inputfield>
      {<ErrorMessage error={errors[name]} visible={touched[name]} />}
    </Container>
  );
};

export const Pw = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  const [hide, setHide] = useState(true);

  const TogglePw = () => {
    setHide((hide) => !hide);
  };

  return (
    <Container>
      <InputLine>
        <Input
          secureTextEntry={hide}
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          {...otherProps}
        ></Input>
        <TouchableOpacity onPress={TogglePw}>
          {hide === true ? <Text>Show</Text> : <Text>Hide</Text>}
        </TouchableOpacity>
      </InputLine>
      {<ErrorMessage error={errors[name]} visible={touched[name]} />}
    </Container>
  );
};

export const DefaultInput = ({ name, value, onChangeText, ...otherProps }) => {
  return (
    <Container>
      <Inputfield
        name={name}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        {...otherProps}
      ></Inputfield>
    </Container>
  );
};

export const Search = ({ ...otherProps }) => {
  return (
    <SearchArea>
      <EvilIcons name="search" size={20} color={colors.black} />
      <SearchInput autoFocus={true} {...otherProps} />
    </SearchArea>
  );
};

const Container = styled.View`
  width: 100%;
`;

const Inputfield = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #d4d4d4;
  padding: 20px 0;
  /* height: 40px; */
`;

const InputLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.lightgray};
`;

const Input = styled.TextInput`
  width: 90%;
  height: 40px;
`;

const SearchArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
  border: 1px solid ${colors.lightgray};
  border-radius: 25px;
  padding: 10px;
`;

const SearchInput = styled.TextInput`
  margin-left: 10px;
`;
