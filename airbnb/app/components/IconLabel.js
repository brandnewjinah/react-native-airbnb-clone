import React from "react";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import * as Typography from "../config/Typography";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export const FA = ({ icon, label, label2, color, qty }) => {
  return (
    <Container>
      <FontAwesome name={icon} style={{ marginRight: 2, color }} />
      <Typography.SP>
        {qty} {label}
      </Typography.SP>
      {label2 && <Typography.SP color={colors.gray}>{label2}</Typography.SP>}
    </Container>
  );
};

export const MCI = ({ icon, label, label2, color }) => {
  return (
    <Container>
      <MaterialCommunityIcons name={icon} style={{ marginRight: 4, color }} />
      <Typography.SP>{label}</Typography.SP>
      {label2 && <Typography.SP color={colors.gray}>{label}</Typography.SP>}
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;
