import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import { EvilIcons, FontAwesome } from "@expo/vector-icons";

import styled from "styled-components";
import Colors from "../config/colors";
import { PBold } from "../config/Typography";

export const BtnContain = ({ label, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <Filled>
          <Label style={{ color: "white" }}>{label}</Label>
        </Filled>
      </TouchableOpacity>
    </Container>
  );
};

export const BtnOutline = ({ disabled, label, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Outlined>
          <Label style={{ color: Colors.red }}>{label}</Label>
        </Outlined>
      </TouchableOpacity>
    </Container>
  );
};

export const BtnText = ({ label, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <LabelWrapper>
          <Label style={{ color: Colors.red }}>{label}</Label>
        </LabelWrapper>
      </TouchableOpacity>
    </Container>
  );
};

export const RoundedButton = ({ label, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <Rounded>
          <BtnLabel>{label}</BtnLabel>
        </Rounded>
      </TouchableOpacity>
    </Container>
  );
};

export const RoundedBtn = ({ label, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <Filled2>
          <PBold colors="white">{label}</PBold>
        </Filled2>
      </TouchableOpacity>
    </Container>
  );
};

export const DisabledButton = ({ disabled, label, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Disabled>
          <Label style={{ color: Colors.lightgray }}>{label}</Label>
        </Disabled>
      </TouchableOpacity>
    </Container>
  );
};

export const BtnTxtUnderline = ({ color, label, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <LabelWrapper>
          <Label
            style={{
              color: color,
              fontSize: 15,
              textDecorationLine: "underline",
            }}
          >
            {label}
          </Label>
        </LabelWrapper>
      </TouchableOpacity>
    </Container>
  );
};

export const IconButton = ({ iconName, label, onPress }) => {
  return (
    <Container>
      {Platform.OS === "ios" ? (
        <TouchableOpacity onPress={onPress}>
          <IconWrapper elevation={3}>
            <FontAwesome name={iconName} color="white" />
            <BtnLabel style={{ color: "white", marginLeft: 6 }}>
              {label}
            </BtnLabel>
          </IconWrapper>
        </TouchableOpacity>
      ) : (
        <TouchableWithoutFeedback onPress={onPress}>
          <IconWrapper elevation={3}>
            <FontAwesome name={iconName} color="white" />
            <BtnLabel style={{ color: "white", marginLeft: 6 }}>
              {label}
            </BtnLabel>
          </IconWrapper>
        </TouchableWithoutFeedback>
      )}
    </Container>
  );
};

export const IconButton2 = ({ iconName, label, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <IconWrapper2>
          <FontAwesome name={iconName} color="white" />
          <BtnLabel style={{ color: "white", marginLeft: 6 }}>{label}</BtnLabel>
        </IconWrapper2>
      </TouchableOpacity>
    </Container>
  );
};

export const BtnCircle = ({ iconName, size, onPress }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <Circle>
          <EvilIcons name={iconName} size={size} color="black" />
        </Circle>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
`;

const Filled = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${Colors.red};
  border-radius: 26px;
  padding: 14px;
`;

const Outlined = styled.View`
  justify-content: center;
  align-items: center;
  border: 2px solid ${Colors.red};
  border-radius: 26px;
  padding: 14px;
`;

const LabelWrapper = styled.View`
  padding: 10px 0;
`;

const Circle = styled.View`
  background-color: white;
  border-radius: 500px;
  padding: 4px;
`;

const Rounded = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid ${Colors.lightgray};
  border-radius: 26px;
  padding: 14px;
`;

const Filled2 = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${Colors.red};
  border-radius: 8px;
  padding: 14px;
`;

const IconWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.black};
  border-radius: 26px;
  padding: 14px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.12);
`;

const IconWrapper2 = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.black};
  border-radius: 8px;
  padding: 14px;
`;

const Disabled = styled.View`
  justify-content: center;
  align-items: center;
  border: 2px solid ${Colors.lightgray};
  border-radius: 26px;
  padding: 14px;
`;

const BtnLabel = styled.Text`
  font-size: 13px;
  letter-spacing: 1px;
`;

const Label = styled.Text`
  ${Platform.select({
    ios: {
      fontFamily: "Avenir",
    },
    android: {
      fontFamily: "Roboto",
    },
  })}
  font-size: 17px;
  font-weight: bold;
`;
