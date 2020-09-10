import React, { useState } from "react";
import { View, Switch } from "react-native";

//import components
import * as Button from "../components/Button";
import * as IconLabel from "../components/IconLabel";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import * as Typogrpahy from "../config/Typography";

//import redux
import { connect } from "react-redux";

const Reserve_1 = (props) => {
  const listing = props.route.params;
  const [bizTrip, setBiztrip] = useState(false);

  const total = () => {
    const totalPeople =
      props.state.adult + props.state.child + props.state.infant;
    return totalPeople;
  };

  const calcNights = () => {
    const start = new Date(props.state.startDay);
    const end = new Date(props.state.endDay);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    var nightCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return nightCount;
  };

  const calcSubtotal = () => {
    const subtotal = listing.price * calcNights();
    return subtotal;
  };

  const calcCleaning = () => {
    const cleaning = calcSubtotal() * 0.125;
    return cleaning;
  };

  const calcFee = () => {
    const fee = calcSubtotal() * 0.1;
    return fee;
  };

  const calcTotal = () => {
    const total = calcSubtotal() + calcCleaning() + calcFee();
    return total;
  };

  return (
    <Container>
      <Detail>
        <MainWrapper>
          <Flex>
            <View>
              <Typogrpahy.Cap color={colors.gray}>
                {listing.property_type}
              </Typogrpahy.Cap>
              <View style={{ marginVertical: 5 }}>
                <Typogrpahy.Sub1>${listing.price}</Typogrpahy.Sub1>
              </View>
              <IconLabel.FA
                icon="star"
                label="4.65"
                label2="(305)"
                color={colors.red}
              />
            </View>
            <CoverImg source={{ uri: listing.images[0] }} resizeMode="cover" />
          </Flex>
          <HLine />
          <Flex>
            <View>
              <Typogrpahy.Cap color={colors.gray}>체크인</Typogrpahy.Cap>
              <Typogrpahy.Sub1>{props.state.startDay}</Typogrpahy.Sub1>
            </View>
            <View>
              <Typogrpahy.Cap color={colors.gray}>체크아웃</Typogrpahy.Cap>
              <Typogrpahy.Sub1>{props.state.endDay}</Typogrpahy.Sub1>
            </View>
            <View>
              <Typogrpahy.Cap color={colors.gray}>게스트</Typogrpahy.Cap>
              <Typogrpahy.Sub1>{total()}명</Typogrpahy.Sub1>
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
              <Typogrpahy.Cap color={colors.gray}>
                수수료 및 세금 정보
              </Typogrpahy.Cap>
            </View>
            <Flex>
              <Typogrpahy.Sub1>
                ${listing.price} x {calcNights()}박
              </Typogrpahy.Sub1>
              <Typogrpahy.Sub1>${calcSubtotal()}</Typogrpahy.Sub1>
            </Flex>
            <Flex>
              <Typogrpahy.Sub1>청소비</Typogrpahy.Sub1>
              <Typogrpahy.Sub1>${calcCleaning()}</Typogrpahy.Sub1>
            </Flex>
            <Flex>
              <Typogrpahy.Sub1>서비스 수수료</Typogrpahy.Sub1>
              <Typogrpahy.Sub1>${calcFee()}</Typogrpahy.Sub1>
            </Flex>
            <HLine />
            <Flex>
              <Typogrpahy.Sub1>합계</Typogrpahy.Sub1>
              <Typogrpahy.Sub1>${calcTotal()}</Typogrpahy.Sub1>
            </Flex>
          </View>
        </MainWrapper>
      </Detail>
      <Reserve>
        <Button.BtnContain label="예약하기" color={colors.red} />
        {/* 액션 보내기 */}
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

const mapStateToProps = (state) => {
  return {
    state: state.search,
  };
};

export default connect(mapStateToProps)(Reserve_1);
