import React from "react";
import { View, Text, ScrollView } from "react-native";

//import styles and assets
import styled from "styled-components";
import * as Typography from "../../config/Typography";

const Description = () => {
  return (
    <Container>
      <ScrollView>
        <Typography.H1>숙소 설명</Typography.H1>
        <Spacing />
        <Typography.P>
          제주 서쪽에 위치한 조용하고 제주스러운 돌담이 멋스러운 지역, 근사한
          바다를 숙소에서 조망할 수 있는 바로 귀덕리 바닷가 앞 아담한
          숙소입니다. 제주 공항에서 자동차로 30분 거리에 있으며, 걸어서 8분
          거리에 버스정거장이 있고, 편의점은 걸어서 10분거리에 있습니다.
        </Typography.P>
        <Spacing />
        <Typography.P>
          제주 서쪽에 위치한 조용하고 제주스러운 돌담이 멋스러운 지역, 근사한
          바다를 숙소에서 조망할 수 있는 바로 귀덕리 바닷가 앞 아담한
          숙소입니다. 제주 공항에서 자동차로 30분 거리에 있으며, 걸어서 8분
          거리에 버스정거장이 있고, 편의점은 걸어서 10분거리에 있습니다.
        </Typography.P>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

const Spacing = styled.View`
  padding: 10px 0;
`;

export default Description;
