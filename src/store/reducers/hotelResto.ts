import { VIEW_HOTEL_RESTO, ERRORS } from "../actions/hotelResto";

const initialState = {
  errors: null,
  hotelResto: []
};

const hotelRestoReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case VIEW_HOTEL_RESTO:
      return {
        ...state,
        hotelResto: payload
      };
    case ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};

export default hotelRestoReducer;
