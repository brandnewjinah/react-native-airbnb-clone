import React, { useEffect, useState, useRef } from "react";
import {
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Keyboard,
  Text,
  Platform,
} from "react-native";
import io from "socket.io-client";
import moment from "moment";

//import components
import { MessageItem } from "../components/MessageItem";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";

//import data
import { messages } from "../data/messages";

const keyboardVerticalOffset = Platform.OS === "ios" ? 60 : -210;

const MessageDetail = () => {
  const [message, setMessage] = useState({
    user_id: 1,
    createdAt: new Date(),
    msg: "",
  });
  const [messageList, setMessageList] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://10.160.211.17:3001");
    socket.current.on("message", (message) => {
      setMessageList((prevState) => [...prevState, message]);
    });
  }, []);

  const handleChange = (text) => {
    let newMessage = { ...message };
    let date = moment().format("MMMM D YYYY, h:mm a");
    newMessage = { user_id: 1, createdAt: date, msg: text };
    setMessage(newMessage);
  };

  const sendMessage = () => {
    socket.current.emit("message", message);
    setMessageList((prevState) => [...prevState, message]);
    setMessage("");
    Keyboard.dismiss();
  };

  // const displayMessage = messageList.map((msg, idx) => <Text>{msg}</Text>);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <Container>
        <FlatList
          inverted
          data={messageList}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => (
            <MessageItem
              id={item.user_id}
              title={item.createdAt}
              subtitle={item.msg}
            />
          )}
        />
        <View></View>
        <Compose>
          <Input
            placeholder="메세지 작성하기"
            value={message.msg}
            onChangeText={(text) => handleChange(text)}
            onSubmitEditing={sendMessage}
          ></Input>
          <TouchableOpacity onPress={sendMessage}>
            <Feather name="arrow-up-circle" size={20} />
          </TouchableOpacity>
        </Compose>
      </Container>
    </KeyboardAvoidingView>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Compose = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: 80%;
  border-radius: 50px;
  border: 1px solid ${colors.lightgray};
  padding: 0 20px;
  margin: 10px;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 40px;
`;

export default MessageDetail;
