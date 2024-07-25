import { ADD_COUNTRY, ADD_INPUT_DATA, ADD_SORT_ORDER } from "./constants";
import { RateInitialState, RateState } from "./interfaces";

const initialState: RateState = RateInitialState;

const reducers = (state: RateState = initialState, action: any): RateState => {
  switch (action.type) {
    case ADD_INPUT_DATA:
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value,
      };
    case ADD_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case ADD_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
