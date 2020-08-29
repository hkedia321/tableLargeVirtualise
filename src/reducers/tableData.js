import { REQUEST_TABLE_DATA, SUCCESS_TABLE_DATA, ERROR_TABLE_DATA } from "../actions/actionTypes";

const initialState = {
  data: null,
  fetched: false,
  error: null
};

export default function(state = initialState, action) {
    console.log("INSIDE TABLEDATA_REDUCER")
  switch (action.type) {
    case REQUEST_TABLE_DATA: {
      return {
        ...state,
        data: null,
        fetched: false,
        error: null,
      };
    }
    case SUCCESS_TABLE_DATA: {
        return {
            ...state,
            data: Object.assign({},action.payload.data),
            fetched: true,
            error: null,
        }
    }
    case ERROR_TABLE_DATA: {
        return {
          ...state,
          data: null,
          fetched: true,
          error: action.payload.error,
        }
    }
    default:
      return state;
  }
}
