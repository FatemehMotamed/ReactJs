import { INCREMENT, DECREMENT, RESET, INCREMENT_BY_AMOUNT } from './actionTypes';

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const reset = () => ({
  type: RESET
});

export const incrementByAmount = (amount) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount
});