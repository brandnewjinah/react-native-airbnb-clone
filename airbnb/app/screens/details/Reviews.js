import React from "react";
import { View, Text, FlatList } from "react-native";

//import patterns
import * as Card from "../../patterns/Card";

//import styles and assets
import styled from "styled-components";
import * as Typography from "../../config/Typography";

//import mock data
import { review } from "../../data/detailreview";
import colors from "../../config/colors";

const Reviews = () => {
  return (
    <Container>
      <FlatList
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={<Typography.H1>Reviews</Typography.H1>}
        data={review}
        keyExtractor={(review) => review.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Card.Default
              imagesmall={item.avatar}
              title={item.username}
              subtitle={item.date}
            />
            <Typography.P color={colors.black}>{item.comments}</Typography.P>
          </View>
        )}
      ></FlatList>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Spacing = styled.View`
  padding: 10px 0;
`;

export default Reviews;
