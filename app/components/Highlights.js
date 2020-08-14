import React from "react";
import { View } from "react-native";

//import styles and assets
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../config/colors";
import { Sub1, P } from "../config/Typography";

export const SuperClean = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="spinner" size={37} color={Colors.black} />
        <HglText>
          <Sub1>청결 강화</Sub1>
          <P colors={Colors.darkgray}>
            이 호스트는 공중보건 및 숙박업계 최고의 전문가들과 협력하여 개발한
            엄격한 청결 강화 기준을 준수합니다.
          </P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const SelfCheckin = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="unlock" size={38} color={Colors.black} />
        <HglText>
          <Sub1>셀프 체크인</Sub1>
          <P colors={Colors.darkgray}>키패드를 이용해 체크인하세요</P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const Clean = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="like" size={37} color={Colors.black} />
        <HglText>
          <Sub1>깨끗하고 깔끔한 숙소</Sub1>
          <P colors={Colors.darkgray}>
            최근 게스트 13명이 이 숙소가 티 없이 깨끗하다고 후기를 남겼습니다
          </P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const SuperHost = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="trophy" size={37} color={Colors.black} />
        <HglText>
          <Sub1>님은 슈퍼호스트입니다</Sub1>
          <P colors={Colors.darkgray}>
            슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서
            편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
          </P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const Location = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="location" size={38} color={Colors.black} />
        <HglText>
          <Sub1>훌륭한 숙소 위치</Sub1>
          <P colors={Colors.darkgray}>
            최근 숙박한 게스트 중 94%가 위치에 별점 5점을 준 숙소입니다.
          </P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const FreeCancellation = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="calendar" size={36} color={Colors.black} />
        <HglText>
          <Sub1>7월 29일까지 무료 취소 가능</Sub1>
          <P colors={Colors.darkgray}>
            그 이후 8월 7일 3:00 PM 전에 예약을 취소하면 서비스 수수료를 제외한
            요금 전액이 환불됩니다.
          </P>
        </HglText>
      </Highlight>
    </View>
  );
};

const Highlight = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const HglText = styled.View`
  flex-shrink: 1;
  margin-left: 6px;
`;
