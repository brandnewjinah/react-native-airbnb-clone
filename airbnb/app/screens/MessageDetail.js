import React, { useEffect, useState, useRef } from "react";

import {
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Text,
  TextInput,
} from "react-native";
import io from "socket.io-client";
import moment from "moment";

//import components
import { MessageItem } from "../components/MessageItem";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";

const keyboardVerticalOffset = Platform.OS === "ios" ? 100 : -150;

const MessageDetail = () => {
  const [message, setMessage] = useState({
    user_id: 1,
    createdAt: new Date(),
    msg: "",
  });
  const [messageList, setMessageList] = useState([]);
  const socket = useRef(null);
  const flat = useRef();

  useEffect(() => {
    socket.current = io("http://192.168.1.39:3001");
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
    console.log(messageList);
    setMessage("");
    Keyboard.dismiss();
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <MessageArea>
          <FlatList
            ref={flat}
            onContentSizeChange={() =>
              flat.current.scrollToEnd({ animated: true })
            }
            onLayout={() => flat.current.scrollToEnd({ animated: true })}
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
        </MessageArea>

        <InputArea>
          <TextInput
            placeholder="메세지 작성하기"
            value={message.msg}
            onChangeText={(text) => handleChange(text)}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Feather name="arrow-up-circle" size={20} />
          </TouchableOpacity>
        </InputArea>
      </KeyboardAvoidingView>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const MessageArea = styled.View`
  /* background-color: lightslategray; */
  flex: 1;
  justify-content: flex-end;
  width: 100%;
`;

const InputArea = styled.View`
  /* background-color: darkturquoise; */
  width: 80%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  border: 1px solid ${colors.lightgray};
  border-radius: 50px;
  padding: 0 20px;
  margin: 10px;
`;

export default MessageDetail;
