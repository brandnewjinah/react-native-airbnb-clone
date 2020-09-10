import React, { useState } from "react";
import { StyleSheet } from "react-native";

//import libraries
import { CalendarList } from "react-native-calendars";
import _isEmpty from "lodash/isEmpty";
import moment from "moment";

//import components
import * as Button from "../components/Button";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";

//import redux
import { connect } from "react-redux";
import { setStart, setEnd } from "../store/search";

const RangePicker = (props) => {
  const [startDay, setStartDay] = useState({});
  const [endDay, setEndDay] = useState({});
  const [periodDay, setPeriodDay] = useState({});

  const getPeriod = (startTimestamp, endTimestamp) => {
    const period = {};
    let start = moment.unix(startTimestamp);
    const end = moment.unix(endTimestamp);
    while (end.isAfter(start)) {
      period[start.format("YYYY-MM-DD")] = {
        color: colors.red,
        textColor: "white",
        startingDay: moment(start).unix() === startTimestamp,
      };
      start = start.add(1, "days");
    }
    period[end.format("YYYY-MM-DD")] = {
      color: colors.red,
      textColor: "white",
      endingDay: true,
    };

    return period;
  };

  const setDay = (objDay) => {
    const { dateString, day, month, year } = objDay;
    const timestamp = moment(dateString).unix();

    if (_isEmpty(startDay) || (!_isEmpty(startDay) && !_isEmpty(endDay))) {
      const period = {
        [dateString]: {
          color: colors.red,
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
  const periodArrays = Object.keys(periodDay);

  const onNavigate = () => {
    props.setStart(periodArrays[0]);
    props.setEnd(periodArrays[periodArrays.length - 1]);
    props.navigation.navigate("AddGuest");
  };

  return (
    <Container>
      <Detail>
        <CalendarList
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
          <Button.BtnTxtUnderline
            color={colors.gray}
            label="건너뛰기"
            onPress={() => props.navigation.navigate("AddGuest")}
          />
        </Left>
        <BtnContainer>
          {periodArrays.length > 1 ? (
            <Button.BtnContain
              label="다음"
              color={colors.red}
              size="small"
              disabled={false}
              onPress={() => onNavigate()}
            />
          ) : (
            <Button.BtnContain
              label="다음"
              color={colors.lightgray}
              size="small"
              disabled={true}
            />
          )}
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
  border-top-color: ${colors.faintgray};
  background-color: white;
`;

const Left = styled.View``;

const BtnContainer = styled.View`
  width: 30%;
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

export default connect(null, { setStart, setEnd })(RangePicker);
