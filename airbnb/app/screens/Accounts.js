import React from "react";
import { View, FlatList, Text, SectionList, StatusBar } from "react-native";

import * as List from "../components/List";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import { Cap } from "../config/Typography";

const AccountItems = [
  {
    title: "개졍 관리",
    data: [
      { title: "개인정보", icon: "user", screen: "Hosting" },
      { title: "알림", icon: "bell", screen: "Hosting" },
      { title: "결제 및 대금 수령", icon: "credit-card", screen: "Hosting" },
    ],
  },
  {
    title: "호스팅",
    data: [
      { title: "호스팅 모드로 전환", icon: "refresh", screen: "Hosting" },
      { title: "숙소 등록하기", icon: "plus", screen: "Hosting" },
    ],
  },
  {
    title: "도움말",
    data: [
      { title: "에어비앤비 이용 방법", icon: "question", screen: "Hosting" },
    ],
  },
];

const Accounts = ({ navigation }) => {
  return (
    <Container>
      <SectionList
        contentContainerStyle={{ paddingVertical: 40, paddingHorizontal: 20 }}
        ListHeaderComponent={
          <List.UserList
            title="Jinah"
            subtitle="View Profile"
            // image={require("../assets/profile.jpg")}
          />
        }
        sections={AccountItems}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ marginTop: 30, marginBottom: 10 }}>
            <Cap color={colors.gray}>{title}</Cap>
          </View>
        )}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <List.Default
            title={item.title}
            icon={item.icon}
            iconcolor={colors.darkgray}
            // onPress={() => console.log("selected", item)}
            // onPress={() => navigation.navigate(`${item.screen}`)}
          />
        )}
        ItemSeparatorComponent={() => <HLine />}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 20px;
`;

const HLine = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: ${colors.lightgray};
`;

export default Accounts;
