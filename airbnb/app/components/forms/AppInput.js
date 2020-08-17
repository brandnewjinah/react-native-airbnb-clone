import React, { useState } from "react";
import { Dimensions, TextInput, TouchableOpacity, Text } from "react-native";
import { useFormikContext } from "formik";

//import components
import ErrorMessage from "./ErrorMessage";

//import styles and assets
import styled from "styled-components";
import Colors from "../../config/colors";

export const AppInput = ({ name, ...otherProps }) => {
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

export const PwInput = ({ name, ...otherProps }) => {
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
  border-bottom-color: ${Colors.lightgray};
`;

const Input = styled.TextInput`
  width: 90%;
  height: 40px;
`;
