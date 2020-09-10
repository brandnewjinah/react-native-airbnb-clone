// Action types
const SET_CITY = "SET_CITY";
const SET_START = "SET_START";
const SET_END = "SET_END";
const ADD_ADULT = "ADD_ADULT";
const ADD_CHILD = "ADD_CHILD";
const ADD_INFANT = "ADD_INFANT";

// Action creators
export const setCity = (city) => {
  return (dispatch) => {
    dispatch({
      type: SET_CITY,
      payload: {
        city,
      },
    });
  };
};

export const setStart = (start) => {
  return (dispatch) => {
    dispatch({
      type: SET_START,
      payload: {
        start,
      },
    });
  };
};

export const setEnd = (end) => {
  return (dispatch) => {
    dispatch({
      type: SET_END,
      payload: {
        end,
      },
    });
  };
};

export const addAdult = (num) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ADULT,
      payload: {
        num,
      },
    });
  };
};

export const addChild = (num) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CHILD,
      payload: {
        num,
      },
    });
  };
};

export const addInfant = (num) => {
  return (dispatch) => {
    dispatch({
      type: ADD_INFANT,
      payload: {
        num,
      },
    });
  };
};

const initialStore = {
  city: "",
  startDay: "",
  endDay: "",
  adult: 0,
  child: 0,
  infant: 0,
};

// Reducer
const reducer = (state = initialStore, action) => {
  if (action.type === SET_CITY) {
    return { ...state, city: action.payload.city };
  }
  if (action.type === SET_START) {
    return {
      ...state,
      startDay: action.payload.start,
    };
  }
  if (action.type === SET_END) {
    return {
      ...state,
      endDay: action.payload.end,
    };
  }
  if (action.type === ADD_ADULT) {
    return {
      ...state,
      adult: action.payload.num,
    };
  }
  if (action.type === ADD_CHILD) {
    return {
      ...state,
      child: action.payload.num,
    };
  }
  if (action.type === ADD_INFANT) {
    // const newState = { ...state, infant: action.payload.num };
    // console.log(newState);

    return {
      ...state,
      infant: action.payload.num,
    };
  }

  return state;
};

export default reducer;
