import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

//import components
import { AppInput } from "../components/forms/AppInput";
import AppForm from "../components/forms/AppForm";
import AppPicker from "../components/AppPicker";
import Counter from "../components/Counter";

//import styles and assets
import styled from "styled-components";
import { H, Sub1, P } from "../config/Typography";
import Colors from "../config/colors";
import { RoundedBtn } from "../components/Button";

const categories = [
  { label: "아파트", value: 1 },
  { label: "주택", value: 2 },
  { label: "별채", value: 3 },
  { label: "부티크 호텔", value: 4 },
];

const Hosting = ({ navigation }) => {
  const [category, setCategory] = useState();
  const [guest, setGuest] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [bath, setBath] = useState(0);

  return (
    <Container>
      <Main>
        <H>숙소 등록을 시작해볼까요?</H>
        <AppForm
          initialValues={{ name: "", price: "", description: "" }}
          onSubmit={(values) => console.log(values)}
        >
          <Step style={{ paddingTop: 20 }}>
            <Sub1>등록하실 숙소 종류는 무엇인가요?</Sub1>
            <InputWrapper>
              <AppPicker
                selectedItem={category}
                onSelectItem={(item) => setCategory(item)}
                items={categories}
                placeholder="한가지 유형을 선택하세요"
                icon="chevron-down"
              />
            </InputWrapper>
          </Step>
          <Step>
            <Sub1>얼마나 많은 인원이 숙박할 수 있나요?</Sub1>
            <Flex>
              <P colors={Colors.gray}>최대 숙박 인원</P>
              <View style={{ width: "30%" }}>
                <Counter
                  result={guest}
                  onMinus={(item) => setGuest(item)}
                  onPlus={(item) => setGuest(item)}
                />
              </View>
            </Flex>
          </Step>
          <Step>
            <Sub1>게스트가 사용할 수 있는 침실은 몇 개인가요?</Sub1>
            <Flex>
              <P colors={Colors.gray}>침실</P>
              <View style={{ width: "30%" }}>
                <Counter
                  result={bedroom}
                  onMinus={(item) => setBedroom(item)}
                  onPlus={(item) => setBedroom(item)}
                />
              </View>
            </Flex>
          </Step>
          <Step>
            <Sub1>게스트가 사용할 수 있는 욕실은 몇 개인가요?</Sub1>
            <Flex>
              <P colors={Colors.gray}>욕실</P>
              <View style={{ width: "30%" }}>
                <Counter
                  result={bath}
                  onMinus={(item) => setBath(item)}
                  onPlus={(item) => setBath(item)}
                />
              </View>
            </Flex>
          </Step>
          {/* <Step>
            <Sub1>숙소의 제목을 만들어 주세요</Sub1>
            <InputWrapper>
              <AppInput
                name="title"
                placeholder="숙소의 특징과 장점을 강조하는 제목을 써주세요"
                maxLength={50}
                clearButtonMode="always"
              />
            </InputWrapper>
          </Step> */}
        </AppForm>
      </Main>
      <Next>
        <Left></Left>
        <BtnContainer>
          <RoundedBtn
            label="다음"
            onPress={() => navigation.navigate("HostingStep2")}
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

const Step = styled.View`
  margin: 20px 0;
`;

const InputWrapper = styled.View`
  margin: 15px 0 10px 0;
`;

const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 10px 0;
`;

export default Hosting;
