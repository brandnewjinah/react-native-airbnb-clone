import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";

export const WelcomeText = ({ children }) => {
  return <Text style={WelcomeStyles.text}>{children}</Text>;
};

const WelcomeStyles = StyleSheet.create({
  text: {
    color: colors.red,
    marginTop: 20,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 24,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 26,
      },
    }),
  },
});

export const BodyText = ({ children, style }) => {
  return <Text style={(BodyStyles.text, style)}>{children}</Text>;
};

const BodyStyles = StyleSheet.create({
  text: {
    color: colors.black,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 19,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 20,
      },
    }),
  },
});
