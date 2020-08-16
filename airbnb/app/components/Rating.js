import React from "react";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";
import { P } from "../config/Typography";

const Rating = ({ rating, reviews }) => {
  return (
    <Container>
      <FontAwesome name="star" color={colors.red} />
      <P>{rating}</P>
      <P colors={colors.gray}>{`(${reviews})`}</P>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

export default Rating;
