import React from "react";

//import components
import { BtnContain, BtnOutline, BtnText } from "../components/Button";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import * as Typography from "../config/Typography";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Main>
        <Header>
          <Logo source={require("../assets/airbnb_logo.png")}></Logo>
          <Typography.H1 colors={Colors.red}>Welcome to Airbnb</Typography.H1>
        </Header>
        <Options>
          <Btn>
            <BtnContain
              label="Continue with Google"
              onPress={() => console.log("tapped")}
            />
          </Btn>
          <Btn>
            <BtnOutline
              label="Create Account"
              onPress={() => console.log("tapped")}
            />
          </Btn>
          <BtnText label="Login" onPress={() => navigation.navigate("Login")} />
        </Options>
        <Terms>
          <Typography.P colors={Colors.gray}>
            By tapping Continue, Create Account or More options, I agree to
            Airbnb's Terms of Service, Payments Terms of Service, Privacy Policy
            and Nondiscrimination Policy.
          </Typography.P>
        </Terms>
      </Main>
    </Container>
  );
};

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const Main = styled.View`
  padding: 30px;
`;

const Header = styled.View`
  padding-top: 80px;
`;

const Logo = styled.Image`
  width: 60px;
  height: 60px;
  resize-mode: contain;
  margin: 10px 0;
`;

const Options = styled.View`
  margin: 30px 0;
`;

const Btn = styled.View`
  margin: 10px 0;
`;

const Terms = styled.View`
  margin-top: 20px;
`;
export default WelcomeScreen;
