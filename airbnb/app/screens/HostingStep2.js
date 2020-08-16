import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

//import components
import { AppInput } from "../components/forms/AppInput";
import AppForm from "../components/forms/AppForm";
import AppPicker from "../components/AppPicker";
import Counter from "../components/Counter";
import ImageInputList from "../components/ImageInputList";

//import styles and assets
import styled from "styled-components";
import { H, Sub1, P } from "../config/Typography";
import Colors from "../config/colors";
import { RoundedBtn } from "../components/Button";

const HostingStep2 = ({ navigation }) => {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Container>
      <Main>
        <H>숙소 사진을 추가하세요</H>
        <Sub1 colors={Colors.darkgray}>
          멋진 사진으로 숙소가 돋보이게 해주세요
        </Sub1>

        <Step style={{ paddingTop: 10 }}>
          <ImageInputList
            imageUris={imageUris}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
          />
        </Step>
        <Step>
          {/* <Image
            source={{ uri: imageUri }}
            style={{ width: 200, height: 200 }}
          /> */}
        </Step>
      </Main>
      <Next>
        <Left></Left>
        <BtnContainer>
          <RoundedBtn
            label="다음"
            onPress={() => navigation.navigate("HostingStep3")}
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

export default HostingStep2;
