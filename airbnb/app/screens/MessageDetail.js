import React from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from "react-native";

//import components
import { MessageItem } from "../components/MessageItem";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import { Feather } from "@expo/vector-icons";

//import data
import { messages } from "../data/messages";

const { width } = Dimensions.get("window");
const composeWidth = width * 0.8;
const keyboardVerticalOffset = Platform.OS === "ios" ? 60 : 0;

const MessageDetail = ({ navigation, route }) => {
  const msg = route.params;

  return (
    <Container>
      <Messages>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          initialScrollIndex={messages.length - 1}
          renderItem={({ item }) => (
            <MessageItem
              title={item.fromUser}
              subtitle={item.message}
              caption={item.dateTime}
            />
          )}
        ></FlatList>
      </Messages>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <Compose>
          <Input placeholder="메세지 작성하기"></Input>
          <TouchableOpacity>
            <Feather name="arrow-up-circle" size={20} />
          </TouchableOpacity>
        </Compose>
      </KeyboardAvoidingView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Messages = styled.View`
  flex: 1;
`;

const Compose = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: ${`${composeWidth}px`};
  border-radius: 50px;
  border: 1px solid ${Colors.lightgray};
  padding: 0 20px;
  margin: 10px;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 40px;
`;

export default MessageDetail;
