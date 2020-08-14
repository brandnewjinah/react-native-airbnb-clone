import React from "react";
import { View, StyleSheet, Image, Text, Platform } from "react-native";

import { FilledButton, OutlineButton } from "../components/Button";

import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.btnContainer}>
        <FilledButton label="Google" onPress={() => console.log("Google")} />
        <FilledButton
          label="Facebook"
          onPress={() => console.log("Facebook")}
        />
        <OutlineButton
          label="Create account"
          onPress={() => console.log("Create")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  welcome: {
    paddingLeft: 30,
    marginTop: 120,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  btnContainer: {
    marginTop: 40,
  },
  moreOptions: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 17,
    fontWeight: "bold",
    color: colors.red,
    paddingLeft: 30,
    paddingTop: 40,
  },
  terms: {
    color: colors.gray,
    lineHeight: 18,
    paddingHorizontal: 30,
    marginTop: 30,
  },
});

export default WelcomeScreen;
