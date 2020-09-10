import React, { useState } from "react";
import { Text, View } from "react-native";

//import components
import { DefaultInput } from "../components/forms/AppInput";

//import styles and assets
import styled from "styled-components";
import { H, Sub1, P } from "../config/Typography";
import colors from "../config/colors";
import * as Button from "../components/Button";

//import redux
import { connect } from "react-redux";
import { setTitle } from "../store/host";

const HostingStep4 = (props) => {
  const [title, setTitle] = useState("");

  const calcLength = () => {
    return 50 - title.length;
  };

  const onNavigate = () => {
    props.setTitle(title);
    props.navigation.navigate("HostingStep5");
  };

  return (
    <Container>
      <Main>
        <H>숙소에 제목을 붙여주세요</H>
        <Sub1 colors={colors.darkgray}>
          숙소의 특징과 장점을 강조하는 제목을 정해 게스트의 관심을 끌어보세요
        </Sub1>
        <Step>
          <Text>제목</Text>
          <DefaultInput
            name="title"
            value={title}
            onChangeText={(text) => setTitle(text)}
            maxLength={50}
          />
          <Remaining>
            <P color={colors.gray}>{calcLength()}/50</P>
          </Remaining>
        </Step>
      </Main>
      <Next>
        <Left></Left>
        <BtnContainer>
          <Button.BtnContain
            label="다음"
            color={colors.red}
            size="small"
            onPress={() => onNavigate()}
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

const Main = styled.ScrollView`
  flex: 1;
  padding: 24px;
`;

const Step = styled.View`
  margin: 20px 0;
`;

const Next = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${colors.faintgray};
  background-color: white;
`;

const Left = styled.View``;

const BtnContainer = styled.View`
  width: 30%;
`;

const Remaining = styled.View`
  margin-top: 15px;
`;

export default connect(null, { setTitle })(HostingStep4);
