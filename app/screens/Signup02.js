import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { NolineNavBar } from "../components/NavBar";
import { RoundedButton } from "../components/Button";

import { EvilIcons } from "@expo/vector-icons";

import styled from "styled-components";
import Colors from "../config/colors";
import { TouchableHighlight } from "react-native-gesture-handler";

const Signup02 = () => {
  const [hidePW, setHidePW] = useState(true);
  const [password, setPassword] = useState("");

  const TogglePw = () => {
    setHidePW(!hidePW);
  };

  return (
    <Container>
      <NolineNavBar nav="chevron-left" />
      <MainWrapper>
        <Header>비밀번호를 입력하세요</Header>

        <InputWrapper>
          <Text>비밀번호</Text>

          <InputLine>
            <Input
              onChangeText={(text) => setPassword(text)}
              keyboardType="visible-password"
              secureTextEntry={hidePW}
            ></Input>
            <TouchableHighlight onPress={TogglePw}>
              {hidePW === true ? <Text>표시</Text> : <Text>숨기기</Text>}
            </TouchableHighlight>
          </InputLine>
        </InputWrapper>
        <RoundedButton label="다음" />
      </MainWrapper>
    </Container>
  );
};

const Container = styled.View``;

const MainWrapper = styled.View`
  padding: 26px;
`;

const TopBar = styled.View`
  height: 60px;
`;

const Header = styled.Text`
  font-size: 28px;
  margin-bottom: 60px;
`;

const InputWrapper = styled.View`
  padding-bottom: 26px;
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

export default Signup02;
