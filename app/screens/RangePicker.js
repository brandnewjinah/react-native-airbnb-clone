import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import _isEmpty from "lodash/isEmpty";
import moment from "moment";

//import components
import { RoundedBtn, TextUnderlineButton } from "../components/Button";

//import styles and assets
import styled from "styled-components";
import Colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const RangePicker = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const [startDay, setStartDay] = useState({});
  const [endDay, setEndDay] = useState({});
  const [periodDay, setPeriodDay] = useState({});

  const getPeriod = (startTimestamp, endTimestamp) => {
    const period = {};
    let start = moment.unix(startTimestamp);
    const end = moment.unix(endTimestamp);
    while (end.isAfter(start)) {
      period[start.format("YYYY-MM-DD")] = {
        color: Colors.red,
        textColor: "white",
        startingDay: moment(start).unix() === startTimestamp,
      };
      start = start.add(1, "days");
    }
    period[end.format("YYYY-MM-DD")] = {
      color: Colors.red,
      textColor: "white",
      endingDay: true,
    };

    return period;
  };

  const setDay = (objDay) => {
    const { dateString, day, month, year } = objDay;
    const timestamp = moment(dateString).unix();

    // if (_isEmpty(startDay) && _isEmpty(endDay)) {
    //   const period = {
    //     [dateString]: {
    //       color: Colors.red,
    //       textColor: "white",
    //       startingDay: true,
    //     },
    //   };
    //   setStartDay(objDay);
    //   setPeriodDay(period);
    // }

    if (_isEmpty(startDay) || (!_isEmpty(startDay) && !_isEmpty(endDay))) {
      const period = {
        [dateString]: {
          color: Colors.red,
          textColor: "white",
          // endingDay: true,
          startingDay: true,
        },
      };
      const newObjDay = { ...objDay, timestamp };
      setStartDay(newObjDay);
      setPeriodDay(period);
      setEndDay({});
    } else {
      const { timestamp: savedTimestamp } = startDay;
      if (savedTimestamp > timestamp) {
        const period = getPeriod(timestamp, savedTimestamp);
        setPeriodDay(period);
      } else {
        const period = getPeriod(savedTimestamp, timestamp);
        setPeriodDay(period);
      }
    }
  };

  console.log(startDay);

  return (
    <Container>
      <Detail>
        <CalendarList
          ListHeaderComponent={<Text>hello</Text>}
          current={new Date()}
          style={styles.calendar}
          minDate={new Date()}
          pastScrollRange={0}
          futureScrollRange={12}
          hideExtraDays
          markingType={"period"}
          onDayPress={setDay}
          markedDates={periodDay}
        />
      </Detail>

      <Next>
        <Left>
          <TextUnderlineButton color={Colors.gray} label="건너뛰기" />
        </Left>
        <BtnContainer>
          <RoundedBtn
            label="다음"
            onPress={() => navigation.navigate("AddGuest")}
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

const Detail = styled.View`
  flex: 1;
`;

const Next = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${Colors.faintgray};
  background-color: white;
`;

const Left = styled.View``;

const BtnContainer = styled.View`
  width: 30%;
`;

const Bottom = styled.View`
  align-items: center;
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0;
  bottom: 0;
  background-color: white;
  flex-direction: row;
  justify-content: flex-end;
  border-top-width: 1px;
  border-top-color: ${Colors.lightgray};
`;

const Flex = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.View`
  justify-content: center;
  align-items: center;

  background-color: ${Colors.lightgray};
  border-radius: 6px;
  margin-right: 20px;
`;

const BtnLabel = styled.Text`
  padding: 16px 40px;
`;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "lightgrey",
    fontSize: 16,
  },
});

export default RangePicker;
