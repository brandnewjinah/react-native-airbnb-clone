import React, { useState } from "react";
import {
  Dimensions,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  StatusBar,
} from "react-native";

//import components
import { SearchTap } from "../components/SearchBar";
import * as TextInput from "../components/forms/AppInput";
import * as ListItem from "../components/List";
import * as Cards from "../components/Cards";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import * as Typography from "../config/Typography";

//import data
import { homedata, footerdata, InitialCities } from "../data/homedata";

//import redux
import { connect } from "react-redux";
import { setCity } from "../store/search";

const { width, height } = Dimensions.get("window");

const Home = (props) => {
  const [search, setSearch] = useState(false);
  const [searchterm, setSearchterm] = useState("");

  const filteredCity = InitialCities.filter((city) => {
    return city.title.toLowerCase().includes(searchterm.toLocaleLowerCase());
  });

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <View
          style={{
            width: 270,
            marginVertical: 12,
            marginLeft: 30,
            marginRight: 12,
          }}
        >
          <Cards.Default
            image={item.image}
            title={item.title}
            secondary={item.subtitle}
          />
        </View>
      );
    } else {
      return (
        <View style={{ width: 270, margin: 12 }}>
          <Cards.Default
            image={item.image}
            title={item.title}
            secondary={item.subtitle}
          />
        </View>
      );
    }
  };

  const renderFooterItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <View style={{ marginLeft: 20 }}>
          <Cards.List data={item} />
        </View>
      );
    } else {
      return <Cards.List data={item} />;
    }
  };

  const onNavigate = (city) => {
    setSearch(false);
    props.setCity(city);
    props.navigation.navigate("RangePicker");
  };

  return (
    <Container>
      <Main>
        <SearchStart>
          <SearchTap
            placeholder="Location, landmark, or address"
            icon="search"
            size={20}
            setSearch={() => setSearch(true)}
          />
        </SearchStart>
        <Modal visible={search} animationType="slide">
          <Safe>
            <FlatList
              ListHeaderComponent={
                <SearchArea>
                  <TextInput.Search
                    placeholder="search"
                    autoCorrect={false}
                    onChangeText={(text) => setSearchterm(text)}
                  />
                  <TouchableOpacity onPress={() => setSearch(false)}>
                    <CancelBtn>Cancel</CancelBtn>
                  </TouchableOpacity>
                </SearchArea>
              }
              keyboardShouldPersistTaps={"handled"}
              data={filteredCity}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <View style={{ paddingHorizontal: 20 }}>
                  <ListItem.Default
                    title={item.title}
                    containedicon="location-on"
                    onPress={() => onNavigate(item.title)}
                  />
                </View>
              )}
              ItemSeparatorComponent={() => <HLine />}
            />
          </Safe>
        </Modal>
        <HLine />
        <HeroText>
          <Typography.H color={colors.red}>
            가까운 여행지, 에어비앤비와 탐험해보세요
          </Typography.H>
        </HeroText>
        <FlatList
          data={homedata}
          keyExtractor={(item) => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </Main>
      <Footer>
        <HeroText>
          <Typography.H4 color={colors.gray}>최신정보 확인하기</Typography.H4>
        </HeroText>

        <FlatList
          data={footerdata}
          keyExtractor={(item) => item.title}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={width - 90}
          snapToAlignment="center"
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={renderFooterItem}
        />
      </Footer>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

const Main = styled.View`
  background-color: white;
  padding-bottom: 30px;
`;

const SearchStart = styled.View`
  padding: 10px 0 5px 0;
`;

const SearchArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Safe = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
  flex: 1;
`;

const HLine = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: ${colors.faintgray};
`;

const CancelBtn = styled.Text`
  color: ${colors.black};
  text-decoration: underline;
  margin-left: 10px;
`;

const HeroText = styled.View`
  width: 100%;
  padding: 30px;
`;

const Footer = styled.View`
  background-color: #fafafa;
`;

export default connect(null, { setCity })(Home);
