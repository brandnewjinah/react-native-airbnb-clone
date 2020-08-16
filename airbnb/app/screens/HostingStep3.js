import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
//import components
import AppForm from "../components/forms/AppForm";
import AppPicker from "../components/AppPicker";
import Counter from "../components/Counter";

//import styles and assets
import styled from "styled-components";
import { H, Sub1, P } from "../config/Typography";
import Colors from "../config/colors";
import { RoundedBtn } from "../components/Button";
import { EvilIcons } from "@expo/vector-icons";
import LocationPicker from "../components/LocationPicker";

const categories = [
  { label: "아파트", value: 1 },
  { label: "주택", value: 2 },
  { label: "별채", value: 3 },
  { label: "부티크 호텔", value: 4 },
];

const HostingStep3 = ({ navigation }) => {
  const [location, setLocation] = useState([]);
  const [openModal, setOpenmodal] = useState(false);

  const getLocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation([latitude, longitude]);
  };

  useEffect(() => {
    getLocation();
  }, []);

  const [category, setCategory] = useState();
  const [guest, setGuest] = useState(0);

  return (
    <Container>
      <Main>
        <H>숙소가 어디에 있나요?</H>
        <AppForm
          initialValues={{ name: "", price: "", description: "" }}
          onSubmit={(values) => console.log(values)}
        >
          <Step style={{ paddingTop: 20 }}>
            <Button
              title="현재위치 사용하기"
              // onPress={() => console.log(location)}
              onPress={() => setOpenmodal(true)}
            />
          </Step>
          <Modal visible={openModal} animationType="slide">
            <LocationPicker
              location={location}
              closeBtn={() => setOpenmodal(false)}
            />
          </Modal>
        </AppForm>
      </Main>
      <Next>
        <Left></Left>
        <BtnContainer>
          <RoundedBtn
            label="다음"
            onPress={() => navigation.navigate("HostingStep4")}
          />
        </BtnContainer>
      </Next>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Main = styled.ScrollView`
  flex: 1;
  padding: 24px;
`;

const Next = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${Colors.faintgray};
  background-color: white;
`;

const Left = styled.View``;

const BtnContainer = styled.View`
  width: 30%;
`;

const Step = styled.View`
  margin: 20px 0;
`;

const InputWrapper = styled.View`
  margin: 15px 0 10px 0;
`;

const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 10px 0;
`;

const styles = StyleSheet.create({
  map: {
    height: 200,
  },
});

export default HostingStep3;
