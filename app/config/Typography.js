import React from "react";
import { Text, Platform, View } from "react-native";

import styled from "styled-components";
import colors from "../config/colors";

export const H = ({ children, colors }) => {
  return (
    <Container>
      <HeadingMain style={{ color: colors }}>{children}</HeadingMain>
    </Container>
  );
};

export const H1 = ({ children, colors }) => {
  return (
    <Container>
      <Heading1 style={{ color: colors }}>{children}</Heading1>
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

export const H3 = ({ children, colors }) => {
  return (
    <Container>
      <Heading3 style={{ color: colors }}>{children}</Heading3>
    </Container>
  );
};

export const H4 = ({ bold, children, colors }) => {
  return (
    <Container>
      <Text style={bold && { fontWeight: "bold" }}>
        <Heading4 style={{ color: colors }}>{children}</Heading4>
      </Text>
    </Container>
  );
};

export const Sub1 = ({ children, colors }) => {
  return (
    <Container>
      <Subtitle1 style={{ color: colors }}>{children}</Subtitle1>
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

export const P = ({ children, colors }) => {
  return (
    <Container>
      <Paragraph style={{ color: colors }}>{children}</Paragraph>
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

export const SP = ({ children, colors }) => {
  return (
    <Container>
      <SmallParagraph style={{ color: colors }}>{children}</SmallParagraph>
    </Container>
  );
};

export const Cap = ({ children, colors }) => {
  return (
    <Container>
      <Caption style={{ color: colors }}>{children}</Caption>
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
  line-height: 18px;
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
