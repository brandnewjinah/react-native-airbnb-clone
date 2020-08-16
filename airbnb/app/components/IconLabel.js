import React from "react";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import * as Typography from "../config/Typography";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export const FA = ({ icon, label, label2, colors, qty }) => {
  return (
    <Container>
      <FontAwesome name={icon} style={{ marginRight: 2, color: colors }} />
      <Typography.SP>
        {qty} {label}
      </Typography.SP>
      {label2 && <Typography.SP colors={Colors.gray}>{label2}</Typography.SP>}
    </Container>
  );
};

export const MCI = ({ icon, label, label2, colors }) => {
  return (
    <Container>
      <MaterialCommunityIcons
        name={icon}
        style={{ marginRight: 4, color: colors }}
      />
      <Typography.SP>{label}</Typography.SP>
      {label2 && <Typography.SP colors={colors.gray}>{label}</Typography.SP>}
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;
