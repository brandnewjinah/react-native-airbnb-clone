import React from "react";

//import components

//import styles and assets
import styled from "styled-components";
import { H, Sub1, P, H3 } from "../config/Typography";
import Colors from "../config/colors";
import { RoundedBtn } from "../components/Button";
import { View } from "react-native";

const HostingStep1 = ({ navigation }) => {
  return (
    <Container>
      <Main>
        <Header>
          <H colors={Colors.red}>숙소 등록하기</H>
          <View style={{ marginTop: 14, marginBottom: 20 }}>
            <P colors={Colors.gray}>
              남는 방 하나부터 별장까지, 다양한 형태의 공간을 무료로 등록하고
              공유하세요.
            </P>
          </View>
          <BtnContainer>
            <RoundedBtn
              label="등록하러 가기"
              onPress={() => navigation.navigate("Hosting")}
            />
          </BtnContainer>
        </Header>
      </Main>
      <HostStory>
        <Card elevation={5}>
          <ImageContainer>
            <MainImage
              source={{
                uri:
                  "https://a0.muscache.com/pictures/9d977b2b-f66f-4028-a9c6-b997cb331892.jpg",
              }}
            />
          </ImageContainer>
          <TextContainer>
            <View style={{ marginBottom: 8 }}>
              <H3>호스트의 이야기를 들어보세요</H3>
            </View>

            <P colors={Colors.gray}>
              도로시는 그녀의 집을 다른 사람과 공유하고 싶은 런던의 호스트에요
            </P>
          </TextContainer>
        </Card>
      </HostStory>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 45px;
`;

const Main = styled.View`
  flex: 1;
  padding: 24px;
`;

const HostStory = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: white;
`;

const Card = styled.View`
  background-color: #ffffff;
  height: 260px;
  border-radius: 12px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.08);
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 140px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
`;

const MainImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.View`
  padding: 20px;
`;

const Header = styled.View`
  margin-bottom: 40px;
`;

const BtnContainer = styled.View`
  width: 50%;
`;

export default HostingStep1;
