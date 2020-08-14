import React, { useState } from "react";
import { FlatList, Modal, TouchableOpacity, StatusBar } from "react-native";

//import components
import { SearchTap, SearchInput } from "../components/SearchBar";
import { AdCard, FirstCard } from "../components/AdCard";
import { SearchList } from "../components/ListItem";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import { H } from "../config/Typography";

//import data
import { homedata } from "../data/homedata";

const InitialCities = [
  { title: "Seoul" },
  { title: "Busan" },
  { title: "Jeju" },
];

const Home = ({ navigation }) => {
  const [search, setSearch] = useState(false);
  const [searchterm, setSearchterm] = useState("");

  const filteredCity = InitialCities.filter((city) => {
    return city.title.toLowerCase().includes(searchterm.toLocaleLowerCase());
  });

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <FirstCard
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
        />
      );
    } else {
      return (
        <AdCard
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
        />
      );
    }
  };

  const onNavigate = () => {
    setSearch(false);
    navigation.navigate("RangePicker");
  };

  return (
    <Common>
      <Container>
        <SearchTap
          placeholder="Location, landmark, or address"
          icon="search"
          size={20}
          setSearch={() => setSearch(true)}
        />
        <Modal visible={search} animationType="slide">
          <Safe>
            <FlatList
              ListHeaderComponent={
                <SearchArea>
                  <SearchInput
                    placeholder="search"
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
                <SearchList title={item.title} onPress={() => onNavigate()} />
              )}
              ItemSeparatorComponent={() => <HLine />}
            />
          </Safe>
        </Modal>
        <HLine />

        <HeroText>
          <H colors={Colors.red}>가까운 여행지, 에어비앤비와 탐험해보세요</H>
        </HeroText>

        <FlatList
          data={homedata}
          keyExtractor={(item) => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </Container>
    </Common>
  );
};

const Common = styled.SafeAreaView`
  ${Platform.select({
    ios: {
      fontFamily: "Avenir",
    },
    android: {
      fontFamily: "Roboto",
      paddingTop: StatusBar.currentHeight,
    },
  })}
  background-color: white;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
`;

const SearchArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Safe = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
  flex: 1;
`;

const HLine = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: ${Colors.faintgray};
`;

const InputArea = styled.TextInput`
  margin-left: 10px;
`;

const CancelBtn = styled.Text`
  color: ${Colors.black};
  text-decoration: underline;
  margin-left: 10px;
`;

const ResultWrapper = styled.ScrollView`
  flex: 1;
  padding: 18px;
`;

const HeroText = styled.View`
  padding: 30px;
`;

export default Home;
