import { GET_ITEM } from "./types";
import axios from "axios";

const getItem = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1"
    );
    dispatch({
      type: GET_ITEM,
      payload: res.data.texts,
    });
    console.log(res.data.texts)
  } catch (error) {
    console.log(error);
  }
};

export default getItem;