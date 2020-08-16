import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { NolineNavBar } from "../components/NavBar";
import { RoundedButton } from "../components/Button";

import { EvilIcons } from "@expo/vector-icons";

import styled from "styled-components";
import Colors from "../config/colors";
import { TouchableHighlight } from "react-native-gesture-handler";

const Signup01 = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <NolineNavBar nav="chevron-left" />
      <MainWrapper>
        <Header>회원가입</Header>
        <InputWrapper>
          <Text>이름</Text>
          <Input
            onChangeText={(text) => setName(text)}
            keyboardType="default"
            clearButtonMode="always"
          />
        </InputWrapper>

        <InputWrapper>
          <Text>이메일</Text>
          <Input
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            clearButtonMode="always"
          />
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

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.lightgray};
`;

export default Signup01;
