import React from "react";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";
import * as Typography from "../config/Typography";

const Rating = ({ rating, reviews }) => {
  return (
    <Container>
      <FontAwesome name="star" color={colors.red} />
      <Typography.P>{rating}</Typography.P>
      <Typography.P color={colors.gray}>{` (${reviews})`}</Typography.P>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Rating;
