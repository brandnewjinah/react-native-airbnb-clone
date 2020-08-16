import * as actions from "./actionTypes";

export const citySet = (city) => ({
  type: actions.CITY_SET,
  payload: {
    city,
  },
});
