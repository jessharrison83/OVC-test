import { LOADING, ERROR, SUCCESS } from '../actions';

const initialState = {
  users: [],
  loading: false,
  error: null
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true};
    case ERROR: 
      return {...state, error: action.payload, loading: false}
    case SUCCESS: 
      return {...state, users: action.payload, loading: false, error: null}
    default: 
      return state;
    }
}