import React from "react";
import { TouchableOpacity, Text } from "react-native";

//import styles and assets
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

const Counter = ({ result, onMinus, onPlus }) => {
  return (
    <Container>
      <BtnWrapper>
        <TouchableOpacity
          onPress={() => {
            if (result > 0) {
              onMinus(result - 1);
            }
          }}
        >
          <CountBtnWrapper>
            <AntDesign name="minus" />
          </CountBtnWrapper>
        </TouchableOpacity>
      </BtnWrapper>
      <CountWrapper>
        <Number>{result}</Number>
      </CountWrapper>
      <BtnWrapper>
        <TouchableOpacity
          onPress={() => {
            if (result < 16) {
              onPlus(result + 1);
            }
          }}
        >
          <CountBtnWrapper>
            <AntDesign name="plus" />
          </CountBtnWrapper>
        </TouchableOpacity>
      </BtnWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const BtnWrapper = styled.View`
  width: 30%;
`;
const CountBtnWrapper = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid ${colors.gray};
  justify-content: center;
  align-items: center;
`;

const CountWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 40%;
`;

const Number = styled.Text`
  text-align: center;
`;

export default Counter;
