import React, { useState } from "react";
import { StyleSheet, Modal, Text, KeyboardAvoidingView } from "react-native";
import * as Location from "expo-location";

//import components
import AppForm from "../components/forms/AppForm";
import LocationPicker from "../components/LocationPicker";
import * as Button from "../components/Button";
import { DefaultInput } from "../components/forms/AppInput";

//import styles and assets
import styled from "styled-components";
import { H } from "../config/Typography";
import colors from "../config/colors";

//import redux
import { connect } from "react-redux";
import { setCurrLocation, setRevGeoCode } from "../store/host";

const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 80;

const HostingStep3 = (props) => {
  const [location, setLocation] = useState({});
  const [address, setAddress] = useState([]);

  const getAddress = async (location) => {
    let addy = await Location.reverseGeocodeAsync(location);
    console.log(addy);
    setAddress(addy);
  };

  const getLocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
    location && getAddress({ latitude, longitude });
  };

  const getCurrLocation = () => {
    getLocation();
  };

  const setNewAddress = (text, name) => {
    let newArray = [...address];
    let newAddress = { ...newArray[0] };
    newAddress[name] = text;
    newArray[0] = newAddress;
    setAddress(newArray);
  };

  const onNavigate = () => {
    props.setCurrLocation(location);
    props.setRevGeoCode(address[0]);
    props.navigation.navigate("HostingStep4");
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <Main>
          <H>숙소가 어디에 있나요?</H>
          <AppForm
            initialValues={{ name: "", price: "", description: "" }}
            onSubmit={(values) => console.log(values)}
          >
            <Step style={{ paddingTop: 20 }}>
              <Button.BtnText
                label="현재위치 사용하기"
                color={colors.red}
                onPress={() => getCurrLocation()}
              />
            </Step>
            <Step>
              <Text></Text>
            </Step>
            <Step>
              <Text>국가/지역</Text>
              <DefaultInput
                name="country"
                value={address[0] && address[0].country}
                onChangeText={(text) => setNewAddress(text, "country")}
              />
            </Step>
            <Step>
              <Text>주</Text>
              <DefaultInput
                name="region"
                value={address[0] && address[0].region}
                onChangeText={(text) => setNewAddress(text, "region")}
              />
            </Step>
            <Step>
              <Text>시/군/구</Text>
              <DefaultInput
                name="city"
                value={address[0] && address[0].city}
                onChangeText={(text) => setNewAddress(text, "city")}
              />
            </Step>
            <Step>
              <Text>도로명 주소</Text>
              <DefaultInput
                name="name"
                value={address[0] && address[0].name}
                onChangeText={(text) => setNewAddress(text, "name")}
              />
            </Step>
            <Step>
              <Text>우편번호</Text>
              <DefaultInput
                name="postalCode"
                value={address[0] && address[0].postalCode}
                onChangeText={(text) => setNewAddress(text, "postalCode")}
              />
            </Step>
            {/* <Modal visible={openModal} animationType="slide">
              <LocationPicker
                location={location}
                closeBtn={() => setOpenmodal(false)}
              />
            </Modal> */}
          </AppForm>
        </Main>
      </KeyboardAvoidingView>
      <Next>
        <Left></Left>
        <BtnContainer>
          <Button.BtnContain
            label="다음"
            color={colors.red}
            size="small"
            onPress={() => onNavigate()}
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
  border-top-color: ${colors.faintgray};
  background-color: white;
`;

const Left = styled.View``;

const BtnContainer = styled.View`
  width: 30%;
`;

const Step = styled.View`
  margin: 20px 0;
`;

const styles = StyleSheet.create({
  map: {
    height: 200,
  },
});

export default connect(null, { setCurrLocation, setRevGeoCode })(HostingStep3);
