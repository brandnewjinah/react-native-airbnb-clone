import * as actions from "./actionTypes";

const initialState = {
  city: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CITY_SET:
      return [
        ...state,
        {
          city: action.payload.city,
        },
      ];
    default:
      state;
  }
};
