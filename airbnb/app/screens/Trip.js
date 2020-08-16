import React from "react";
import { FlatList, View, Text, ScrollView } from "react-native";

//import components
import TripCard from "../components/TripCard";

//import styles and icons
import styled from "styled-components";
import { H } from "../config/Typography";

//import data
import { rooms } from "../data/tripdata";

const Trip = ({ navigation }) => {
  const handleDate = (item) => {
    let date = item.check_in_date;
    let parseDate = date.split("-");
    let newDate = {
      year: `${parseDate[0]}년`,
      month: `${parseDate[1]}월`,
      day: `${parseDate[2]}일`,
    };
    return newDate.year + " " + newDate.month;
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <Header>
            <H>여행</H>
          </Header>
        }
        data={rooms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TripCard
            image={item.images[0]}
            title={item.city}
            subtitle={handleDate(item)}
            description={item.title}
            onPress={() => navigation.navigate("TripDetails", item)}
          />
        )}
      ></FlatList>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 45px;
`;

const Header = styled.View`
  padding: 24px;
`;

export default Trip;
