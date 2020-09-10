import React from "react";
import { StyleSheet, ScrollView, Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

//import components
import ImgCarousel from "../components/ImgCarousel";
import * as IconLabel from "../components/IconLabel";
import * as Button from "../components/Button";

//import styles and assets
import styled from "styled-components";
import * as Typography from "../config/Typography";
import colors from "../config/colors";

//import redux
import { connect } from "react-redux";

const HostingStep5 = (props) => {
  const onNavigate = () => {
    Alert.alert("New Listing", "Post successful", [
      { text: "OK", onPress: () => props.navigation.navigate("HostingStep1") },
    ]);
  };

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <ImgCarousel images={props.state.images} />
        <MainWrapper>
          <Typography.H2>{props.state.title}</Typography.H2>
          <Subheading>
            <Typography.SP>
              {props.state.address.country}, {props.state.address.city}
            </Typography.SP>
          </Subheading>
          <HLine />
          <Section>
            <Typography.H2>Description</Typography.H2>
            <Flex>
              <IconLabel.FA icon="bath" label="Bath" qty={props.state.bath} />
              <IconLabel.FA icon="bed" label="Bed" qty={props.state.bedroom} />
            </Flex>
          </Section>
          <HLine />
          <Section>
            <Typography.H2>Location</Typography.H2>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              scrollEnabled={false}
              initialRegion={{
                latitude: props.state.location.latitude,
                longitude: props.state.location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{
                  latitude: props.state.location.latitude,
                  longitude: props.state.location.longitude,
                }}
              ></Marker>
            </MapView>
          </Section>
        </MainWrapper>

        <Main></Main>
      </ScrollView>
      <Next>
        <Left></Left>
        <BtnContainer>
          <Button.BtnContain
            label="마침"
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

const MainWrapper = styled.View`
  flex: 1;
  padding: 20px 30px 20px 20px;
`;

const Subheading = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;

const Section = styled.View`
  padding: 18px 0;
`;

const Main = styled.View``;

const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 14px 16px 14px 0;
`;

const HLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.lightgray};
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

const styles = StyleSheet.create({
  map: {
    height: 200,
    marginTop: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    state: state.host,
  };
};

export default connect(mapStateToProps)(HostingStep5);
