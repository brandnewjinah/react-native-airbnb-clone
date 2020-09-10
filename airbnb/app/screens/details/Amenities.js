import React from "react";
import { View, Text, SectionList } from "react-native";

//import components
import * as ListItem from "../../components/List";

//import styles and assets
import styled from "styled-components";
import colors from "../../config/colors";
import * as Typography from "../../config/Typography";

//import data
import { AvailAmenities } from "../../data/detaildata";

const Amenities = () => {
  return (
    <Container>
      <SectionList
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={<Typography.H1>Amenities</Typography.H1>}
        sections={AvailAmenities}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ marginTop: 30 }}>
            <Typography.H4 colors="black" bold>
              {title}
            </Typography.H4>
          </View>
        )}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <ListItem.Default title={item.name} subtitle={item.description} />
        )}
        ItemSeparatorComponent={() => <HLine />}
      />
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

const HLine = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: ${colors.lightgray};
`;

export default Amenities;
