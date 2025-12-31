import { INCREMENT, DECREMENT, RESET, INCREMENT_BY_AMOUNT } from './actionTypes';

const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    
    case RESET:
      return {
        ...state,
        count: 0
      };
    
    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        count: state.count + action.payload
      };
    
    default:
      return state;
  }
};

export default counterReducer;