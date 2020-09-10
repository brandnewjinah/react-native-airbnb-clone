import React from "react";
import { Text, Platform } from "react-native";

import styled from "styled-components";
import colors from "../config/colors";

export const H = ({ children, color }) => {
  return (
    <Container>
      <HeadingMain style={{ color }}>{children}</HeadingMain>
    </Container>
  );
};

export const H1 = ({ children, color }) => {
  return (
    <Container>
      <Heading1 style={{ color }}>{children}</Heading1>
    </Container>
  );
};

export const H3 = ({ children, color }) => {
  return (
    <Container>
      <Heading3 style={{ color }}>{children}</Heading3>
    </Container>
  );
};

export const H4 = ({ bold, children, color }) => {
  return (
    <Container>
      <Text style={bold && { fontWeight: "bold" }}>
        <Heading4 style={{ color }}>{children}</Heading4>
      </Text>
    </Container>
  );
};

export const P = ({ bold, children, color, numberOfLines }) => {
  return (
    <Container numberOfLines={numberOfLines}>
      <Text style={bold && { fontWeight: "bold" }}>
        <Paragraph style={{ color }}>{children}</Paragraph>
      </Text>
    </Container>
  );
};

export const Sub1 = ({ bold, children, color }) => {
  return (
    <Container>
      <Text style={bold && { fontWeight: "bold" }}>
        <Subtitle1 style={{ color }}>{children}</Subtitle1>
      </Text>
    </Container>
  );
};

export const SP = ({ children, color }) => {
  return (
    <Container>
      <SmallParagraph style={{ color }}>{children}</SmallParagraph>
    </Container>
  );
};

export const H2 = ({ children, colors }) => {
  return (
    <Container>
      <Heading2 style={{ color: colors }}>{children}</Heading2>
    </Container>
  );
};

export const Sub2 = ({ children, colors }) => {
  return (
    <Container>
      <Subtitle2 style={{ color: colors }}>{children}</Subtitle2>
    </Container>
  );
};

export const pS = ({ bold, children, color }) => {
  return (
    <Container>
      <Text style={bold && { fontWeight: "bold" }}>
        <ParagraphSmall style={{ color }}>{children}</ParagraphSmall>
      </Text>
    </Container>
  );
};

export const PBold = ({ children, colors }) => {
  return (
    <Container>
      <ParagraphBold style={{ color: colors }}>{children}</ParagraphBold>
    </Container>
  );
};

export const Cap = ({ children, color }) => {
  return (
    <Container>
      <Caption style={{ color }}>{children}</Caption>
    </Container>
  );
};

const Container = styled.Text`
  ${Platform.select({
    ios: {
      fontFamily: "Avenir",
    },
    android: {
      fontFamily: "Roboto",
    },
  })}
`;

const HeadingMain = styled.Text`
  font-size: ${Platform.OS === "ios" ? "28px" : "28px"};
`;

const Heading1 = styled.Text`
  font-size: ${Platform.OS === "ios" ? "24px" : "24px"};
`;

const Heading2 = styled.Text`
  font-size: ${Platform.OS === "android" ? "22px" : "22px"};
`;

const Heading3 = styled.Text`
  font-size: ${Platform.OS === "android" ? "22px" : "20px"};
`;

const Heading4 = styled.Text`
  font-size: ${Platform.OS === "ios" ? "18px" : "18px"};
`;

const Subtitle1 = styled.Text`
  font-size: ${Platform.OS === "ios" ? "16px" : "16px"};
`;

const Subtitle2 = styled.Text`
  font-size: ${Platform.OS === "ios" ? "16px" : "16px"};
  font-weight: bold;
`;

const Paragraph = styled.Text`
  font-size: ${Platform.OS === "ios" ? "14px" : "14px"};
  line-height: 22px;
`;

const ParagraphSmall = styled.Text`
  font-size: ${Platform.OS === "ios" ? "13px" : "13px"};
  line-height: 16px;
`;

const ParagraphBold = styled.Text`
  font-size: ${Platform.OS === "ios" ? "14px" : "14px"};
  font-weight: bold;
`;

const SmallParagraph = styled.Text`
  font-size: ${Platform.OS === "android" ? "14px" : "12px"};
  color: ${colors.darkgray};
  line-height: 18px;
`;

const Caption = styled.Text`
  font-size: ${Platform.OS === "android" ? "12px" : "12px"};
`;
