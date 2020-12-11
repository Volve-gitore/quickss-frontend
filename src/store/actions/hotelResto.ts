import API from "../../utils/api";
export const VIEW_HOTEL_RESTO = "VIEW_HOTEL_RESTO";
export const ERRORS = "ERRORS";

export const viewHotelResto = () => {
  return async (dispatch: (arg0: { type: string; payload: {} }) => void) => {
    try {
      const res = await API.get("/hotel-resto");      
      dispatch({ type: VIEW_HOTEL_RESTO, payload: res.items });
    } catch (error) {
      if (error) {
        const res = error.response;
        dispatch({
          type: ERRORS,
          payload: res
        });
      }
    }
  };
};
