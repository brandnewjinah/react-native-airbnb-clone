// Action types
const SET_PROPERTY = "SET_PROPERTY";
const SET_GUEST = "SET_GUEST";
const SET_BEDROOM = "SET_BEDROOM";
const SET_BATH = "SET_BATH";
const SET_IMAGES = "SET_IMAGES";
const SET_CURR_LOCATION = "SET_CURR_LOCATION";
const SET_REVGEOCODE = "SET_REVGEOCODE";
const SET_TITLE = "SET_TITLE";

// Action creators
export const setPropertyType = (property) => {
  return (dispatch) => {
    dispatch({
      type: SET_PROPERTY,
      payload: {
        property,
      },
    });
  };
};

export const setMaxGuest = (num) => {
  return (dispatch) => {
    dispatch({
      type: SET_GUEST,
      payload: {
        num,
      },
    });
  };
};

export const setMaxBedroom = (num) => {
  return (dispatch) => {
    dispatch({
      type: SET_BEDROOM,
      payload: {
        num,
      },
    });
  };
};

export const setMaxBath = (num) => {
  return (dispatch) => {
    dispatch({
      type: SET_BATH,
      payload: {
        num,
      },
    });
  };
};

export const setImages = (images) => {
  return (dispatch) => {
    // console.log(images);
    dispatch({
      type: SET_IMAGES,
      payload: {
        images,
      },
    });
  };
};

export const setCurrLocation = (location) => {
  return (dispatch) => {
    dispatch({
      type: SET_CURR_LOCATION,
      payload: {
        location,
      },
    });
  };
};

export const setRevGeoCode = (address) => {
  return (dispatch) => {
    dispatch({
      type: SET_REVGEOCODE,
      payload: {
        address,
      },
    });
  };
};

export const setTitle = (title) => {
  return (dispatch) => {
    dispatch({
      type: SET_TITLE,
      payload: {
        title,
      },
    });
  };
};

const initialStore = {
  propertyType: "",
  guest: 0,
  bedroom: 0,
  bath: 0,
  location: {},
  title: "",
  images: [],
};

// Reducer
const reducer = (state = initialStore, action) => {
  if (action.type === SET_PROPERTY) {
    // const newState = { ...state, propertyType: action.payload.property };
    // console.log(newState);

    return {
      ...state,
      propertyType: action.payload.property,
    };
  }
  if (action.type === SET_GUEST) {
    return {
      ...state,
      guest: action.payload.num,
    };
  }
  if (action.type === SET_BEDROOM) {
    return {
      ...state,
      bedroom: action.payload.num,
    };
  }
  if (action.type === SET_BATH) {
    return {
      ...state,
      bath: action.payload.num,
    };
  }
  if (action.type === SET_IMAGES) {
    // const newState = { ...state, images: action.payload.images };
    // console.log(newState);
    return {
      ...state,
      images: action.payload.images,
    };
  }
  if (action.type === SET_CURR_LOCATION) {
    return {
      ...state,
      location: action.payload.location,
    };
  }
  if (action.type === SET_REVGEOCODE) {
    return {
      ...state,
      address: action.payload.address,
    };
  }
  if (action.type === SET_TITLE) {
    // const newState = { ...state, title: action.payload.title };
    // console.log(newState);
    return {
      ...state,
      title: action.payload.title,
    };
  }

  return state;
};

export default reducer;
