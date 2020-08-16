import React from "react";
import { View, FlatList, Text, SectionList, StatusBar } from "react-native";

import { ListItem, SingleItemTap } from "../components/ListItem";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
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
    <Common>
      <Container>
        <SectionList
          contentContainerStyle={{ paddingVertical: 40 }}
          ListHeaderComponent={
            <ListItem
              title="Jinah"
              subtitle="View Profile"
              image={require("../assets/profile.jpg")}
            />
          }
          sections={AccountItems}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <View style={{ marginLeft: 20, marginTop: 30, marginBottom: 10 }}>
              <Cap colors={Colors.gray}>{title}</Cap>
            </View>
          )}
          stickySectionHeadersEnabled={false}
          renderItem={({ item }) => (
            <SingleItemTap
              title={item.title}
              icon={item.icon}
              iconcolor={Colors.darkgray}
              // onPress={() => console.log("selected", item)}
              onPress={() => navigation.navigate(`${item.screen}`)}
            />
          )}
          ItemSeparatorComponent={() => <HLine />}
        />
      </Container>
    </Common>
  );
};

const Common = styled.SafeAreaView`
  background-color: white;
  ${Platform.select({
    android: {
      paddingTop: StatusBar.currentHeight,
    },
  })}

  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

const HLine = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 1px;
  background-color: ${Colors.lightgray};
`;

export default Accounts;
