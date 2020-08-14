import React, { useState } from "react";

import styled from "styled-components";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

//import components
import {
  FilledButton2,
  TextUnderlineButton,
  IconButton2,
} from "../components/Button";

//import styles and assets
import { AntDesign } from "@expo/vector-icons";
import { H3, P } from "../config/Typography";
import Colors from "../config/colors";

const AddGuest = ({ navigation }) => {
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  const adultminus = () => {
    if (adult > 0) {
      setAdult(adult - 1);
    }
  };

  const adultplus = () => {
    if (adult < 16) {
      setAdult(adult + 1);
    }
  };

  const childrenminus = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const childrenplus = () => {
    if (children < 5) {
      setChildren(children + 1);
    }
  };

  const infantrenminus = () => {
    if (infant > 0) {
      setInfant(infant - 1);
    }
  };

  const infantplus = () => {
    if (infant < 5) {
      setInfant(infant + 1);
    }
  };

  return (
    <Container>
      <MainWrapper>
        <Category>
          <View>
            <H3>성인</H3>
            <P>만 13세 이상</P>
          </View>
          <Counter>
            <TouchableOpacity
              onPress={() => {
                adultminus();
              }}
            >
              <CountBtnWrapper>
                <AntDesign name="minus" />
              </CountBtnWrapper>
            </TouchableOpacity>
            <CountWrapper>
              <Text>{adult}</Text>
            </CountWrapper>
            <TouchableOpacity
              onPress={() => {
                adultplus();
              }}
            >
              <CountBtnWrapper>
                <AntDesign name="plus" />
              </CountBtnWrapper>
            </TouchableOpacity>
          </Counter>
        </Category>
        <HLine />
        <Category>
          <View>
            <H3>어린이</H3>
            <P>2-12세</P>
          </View>
          <Counter>
            <TouchableOpacity
              onPress={() => {
                childrenminus();
              }}
            >
              <CountBtnWrapper>
                <AntDesign name="minus" />
              </CountBtnWrapper>
            </TouchableOpacity>
            <CountWrapper>
              <Text>{children}</Text>
            </CountWrapper>
            <TouchableOpacity
              onPress={() => {
                childrenplus();
              }}
            >
              <CountBtnWrapper>
                <AntDesign name="plus" />
              </CountBtnWrapper>
            </TouchableOpacity>
          </Counter>
        </Category>
        <HLine />
        <Category>
          <View>
            <H3>유아</H3>
            <P>2세 미만</P>
          </View>
          <Counter>
            <TouchableOpacity
              onPress={() => {
                infantrenminus();
              }}
            >
              <CountBtnWrapper>
                <AntDesign name="minus" />
              </CountBtnWrapper>
            </TouchableOpacity>
            <CountWrapper>
              <Text>{infant}</Text>
            </CountWrapper>
            <TouchableOpacity
              onPress={() => {
                infantplus();
              }}
            >
              <CountBtnWrapper>
                <AntDesign name="plus" />
              </CountBtnWrapper>
            </TouchableOpacity>
          </Counter>
        </Category>
      </MainWrapper>
      <Next>
        <Left>
          <TextUnderlineButton color={Colors.gray} label="건너뛰기" />
        </Left>
        <BtnContainer>
          <IconButton2
            iconName="search"
            label="다음"
            onPress={() => navigation.navigate("ListStack")}
          />
        </BtnContainer>
      </Next>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 26px;
`;

const Next = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${Colors.faintgray};
  background-color: white;
`;

const Left = styled.View``;

const BtnContainer = styled.View`
  width: 30%;
`;

const Category = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Counter = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CountBtnWrapper = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid ${Colors.gray};
  justify-content: center;
  align-items: center;
`;

const CountWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const HLine = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: ${Colors.faintgray};
  margin: 20px 0;
`;

const Bottom = styled.View`
  align-items: center;
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0;
  bottom: 0;
  background-color: white;
  flex-direction: row;
  justify-content: flex-end;
  border-top-width: 1px;
  border-top-color: ${Colors.lightgray};
`;

const Btn = styled.View`
  justify-content: center;
  align-items: center;

  background-color: ${Colors.lightgray};
  border-radius: 6px;
  margin-right: 20px;
`;

const BtnLabel = styled.Text`
  padding: 16px 40px;
`;

export default AddGuest;
