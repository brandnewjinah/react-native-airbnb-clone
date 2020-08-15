import React, { useState } from "react";
import { View, Switch } from "react-native";

//import components
import * as Btn from "../components/Button";
import * as IconLabel from "../components/IconLabel";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import * as Typogrpahy from "../config/Typography";

const Reserve_1 = ({ route }) => {
  const listing = route.params;
  const [bizTrip, setBiztrip] = useState(false);

  return (
    <Container>
      <Detail>
        <MainWrapper>
          <Flex>
            <View>
              <Typogrpahy.Cap colors={colors.gray}>
                {listing.property_type}
              </Typogrpahy.Cap>
              <View style={{ marginVertical: 5 }}>
                <Typogrpahy.Sub1>${listing.price}</Typogrpahy.Sub1>
              </View>
              <IconLabel.FA
                icon="star"
                label="4.65"
                label2="(305)"
                colors={colors.red}
              />
            </View>
            <CoverImg source={{ uri: listing.images[0] }} resizeMode="cover" />
          </Flex>
          <HLine />
          <Flex>
            <View>
              <Typogrpahy.Cap colors={colors.gray}>체크인</Typogrpahy.Cap>
              <Typogrpahy.Sub1>9월 1일</Typogrpahy.Sub1>
            </View>
            <View>
              <Typogrpahy.Cap colors={colors.gray}>체크아웃</Typogrpahy.Cap>
              <Typogrpahy.Sub1>9월 4일</Typogrpahy.Sub1>
            </View>
            <View>
              <Typogrpahy.Cap colors={colors.gray}>게스트</Typogrpahy.Cap>
              <Typogrpahy.Sub1>2명</Typogrpahy.Sub1>
            </View>
          </Flex>
          <HLine />
          <Flex>
            <Typogrpahy.Sub1>출장인가요?</Typogrpahy.Sub1>
            <Switch
              trackColor={{ false: colors.faintgray, true: colors.blue }}
              ios_backgroundColor={colors.faintgray}
              value={bizTrip}
              onValueChange={(newValue) => setBiztrip(newValue)}
            ></Switch>
          </Flex>
          <HLine />
          <View>
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
              <Typogrpahy.Cap colors={colors.gray}>
                수수료 및 세금 정보
              </Typogrpahy.Cap>
            </View>
            <Flex>
              <Typogrpahy.Sub1>얼마 x 몇박</Typogrpahy.Sub1>
              <Typogrpahy.Sub1>얼마</Typogrpahy.Sub1>
            </Flex>
            <Flex>
              <Typogrpahy.Sub1>청소비</Typogrpahy.Sub1>
              <Typogrpahy.Sub1>얼마</Typogrpahy.Sub1>
            </Flex>
            <Flex>
              <Typogrpahy.Sub1>서비스 수수료</Typogrpahy.Sub1>
              <Typogrpahy.Sub1>얼마</Typogrpahy.Sub1>
            </Flex>
            <Flex>
              <Typogrpahy.Sub1>숙박세와 수수료</Typogrpahy.Sub1>
              <Typogrpahy.Sub1>얼마</Typogrpahy.Sub1>
            </Flex>
            <HLine />
            <Flex>
              <Typogrpahy.Sub1>합계</Typogrpahy.Sub1>
              <Typogrpahy.Sub1>얼마</Typogrpahy.Sub1>
            </Flex>
          </View>
        </MainWrapper>
      </Detail>
      <Reserve>
        <Btn.BtnContain label="예약하기" />
      </Reserve>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Detail = styled.ScrollView`
  flex: 1;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 20px 30px 20px 20px;
`;

const Reserve = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${colors.faintgray};
  background-color: white;
`;

const HLine = styled.View`
  width: 90%;
  margin: 0 auto;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.faintgray};
`;

const Flex = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const CoverImg = styled.Image`
  width: 40%;
  height: 80px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export default Reserve_1;
