import React, { useState } from "react";
import { View, TextInput, Text, TouchableHighlight } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

//import components
import AppForm from "../components/forms/AppForm";
import { AppInput, PwInput } from "../components/forms/AppInput";
import SubmitBtn from "../components/forms/SubmitBtn";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import * as Typography from "../config/Typography";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Login = ({ navigation }) => {
  return (
    <Container>
      <Main>
        <Header>
          <Typography.H>Login</Typography.H>
        </Header>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={() => navigation.navigate("MainStack")}
          validationSchema={validationSchema}
        >
          <Input>
            <Text>Email</Text>
            <AppInput
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              clearButtonMode="always"
              textContentType="emailAddress"
            />
          </Input>
          <Input>
            <Text>Password</Text>
            <PwInput
              name="password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
            ></PwInput>
          </Input>
          <SubmitBtn title="로그인" />
        </AppForm>
      </Main>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Main = styled.View`
  padding: 26px;
`;

const Header = styled.View`
  margin-bottom: 60px;
`;

const Input = styled.View`
  padding-bottom: 26px;
`;

export default Login;
