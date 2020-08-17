import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

//import components
import { MessageItem } from "../components/ListItem";
import DeleteItem from "../components/DeleteItem";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import { H } from "../config/Typography";

const initialMessages = [
  {
    id: 1,
    fromUser: "Yuni",
    description:
      "Hi Jinah, thank you for your interest in my house.  My house is available ",
    image:
      "https://a0.muscache.com/im/pictures/user/e326de82-07e9-4abc-aaed-80724957ab8e.jpg",
    dates: "2020년 5월 10일",
  },
  {
    id: 2,
    fromUser: "Yoonjin",
    description:
      "Hi Jinah, thank you for your interest in my house.  My house is available ",
    image:
      "https://a0.muscache.com/im/pictures/user/d7aabb16-b2d5-45a0-8d91-a7626f566d59.jpg",
    dates: "2020년 3월 8일",
  },
  {
    id: 3,
    fromUser: "Hami",
    description:
      "Hi Jinah, thank you for your interest in my house.  My house is available ",
    image:
      "https://a0.muscache.com/im/pictures/user/4771a2d4-9498-4891-96f5-af3b5473d2a4.jpg",
    dates: "2020년 1월 20일",
  },
];

const MessageScreen = ({ navigation }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefresing] = useState(false);

  const handleDelete = (message) => {
    const newMesages = messages.filter((m) => m.id !== message.id);
    setMessages(newMesages);
  };

  const handleNavigation = (item) => {
    console.log(item.fromUser);
    navigation.navigate("MessageDetail", item);
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <Header>
            <H>메세지</H>
          </Header>
        }
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <MessageItem
            title={item.fromUser}
            subtitle={item.description}
            image={item.image}
            dates={item.dates}
            arrow="chevron-right"
            onPress={() => handleNavigation(item)}
            RightActions={() => (
              <DeleteItem onPress={() => handleDelete(item)} />
            )}
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
  padding: 45px 20px 0;
`;

const Header = styled.View`
  padding: 24px 0;
`;

const HLine = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 1px;
  background-color: ${Colors.lightgray};
`;

export default MessageScreen;
