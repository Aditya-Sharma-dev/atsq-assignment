import { GET_ITEM } from "../actions/types";
const initialState = [];

const item = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ITEM:
      return [...payload];
    default:
      return state;
  }
};

export default item;