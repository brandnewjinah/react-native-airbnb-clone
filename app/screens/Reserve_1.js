import React, { useState } from "react";
import { View, Switch } from "react-native";

//import components
import { FilledButton } from "../components/Button";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import * as Typogrpahy from "../config/Typography";
import {
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Reserve_1 = ({ route }) => {
  const listing = route.params;
  const [bizTrip, setBiztrip] = useState(false);
  //   console.log(listing);
  return (
    <Container>
      <Detail>
        <MainWrapper>
          <Flex>
            <View>
              <Typogrpahy.Cap>{listing.property_type}</Typogrpahy.Cap>
              <Typogrpahy.Sub1>{listing.price}</Typogrpahy.Sub1>
              <Flex>
                <FontAwesome
                  name="star"
                  color={Colors.red}
                  style={{ marginRight: 6 }}
                />
                <Typogrpahy.SP>4.65 (305)</Typogrpahy.SP>
              </Flex>
            </View>
            <CoverImg source={{ uri: listing.images[0] }} resizeMode="cover" />
          </Flex>
          <HLine />
          <Flex>
            <View>
              <Typogrpahy.Cap colors={Colors.gray}>체크인</Typogrpahy.Cap>
              <Typogrpahy.Sub1>9월 1일</Typogrpahy.Sub1>
            </View>
            <View>
              <Typogrpahy.Cap colors={Colors.gray}>체크아웃</Typogrpahy.Cap>
              <Typogrpahy.Sub1>9월 4일</Typogrpahy.Sub1>
            </View>
            <View>
              <Typogrpahy.Cap colors={Colors.gray}>게스트</Typogrpahy.Cap>
              <Typogrpahy.Sub1>2명</Typogrpahy.Sub1>
            </View>
          </Flex>
          <HLine />
          <Flex>
            <Typogrpahy.Sub1>출장인가요?</Typogrpahy.Sub1>
            <Switch
              trackColor={{ false: Colors.faintgray, true: Colors.blue }}
              ios_backgroundColor={Colors.faintgray}
              value={bizTrip}
              onValueChange={(newValue) => setBiztrip(newValue)}
            ></Switch>
          </Flex>
          <HLine />
          <View>
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
              <Typogrpahy.Cap colors={Colors.gray}>
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
        <FilledButton label="예약하기" />
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
  /* background-color: ${Colors.faintgray}; */
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
  border-top-color: ${Colors.faintgray};
  background-color: white;
`;

const HLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.lightgray};
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
