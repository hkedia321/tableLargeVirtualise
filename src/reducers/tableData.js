import { REQUEST_TABLE_DATA, SUCCESS_TABLE_DATA, ERROR_TABLE_DATA } from "../actions/actionTypes";

const initialState = {
  data: [],
  fetched: false,
  error: null,
  errorMsg: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TABLE_DATA: {
      return {
        ...state,
        data: [],
        fetched: false,
        error: null,
        errorMsg: null
      };
    }
    case SUCCESS_TABLE_DATA: {
        const tableData = action.payload.data.data.slice(0,10)
        return {
            ...state,
            data: tableData,
            fetched: true,
            error: null,
            errorMsg: null
        }
    }
    case ERROR_TABLE_DATA: {
        return {
          ...state,
          data: [],
          fetched: true,
          error: action.payload.error,
          errorMsg: 'Couldn\'t Fetch Data'
        }
    }
    default:
      return state;
  }
}
