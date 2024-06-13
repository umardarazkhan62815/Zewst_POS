// createOrderSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  user: null,
};
const areOrdersEqual = (order1, order2) => {
  if (order1.order._id !== order2.order._id) {
    return false;
  }
  if (order1.modifier === null && order2.modifier === null) {
    return true;
  }
  if (order1.modifier === null || order2.modifier === null) {
    return false;
  }
  return JSON.stringify(order1.modifier) === JSON.stringify(order2.modifier);
};

const createOrderSlice = createSlice({
  name: 'createOrder',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const {order, modifier} = action.payload;
      // console.log('ITEMMMMM', order);
      // console.log('modifier', modifier);

      const existingOrder = state.orders.find(orderc =>
        areOrdersEqual(orderc, {order, modifier}),
      );
      console.log('existingOrder', existingOrder);
      if (existingOrder) {
        existingOrder.quantity += 1;
      } else {
        state.orders.push({order, modifier, quantity: 1});
      }
    },
    removeOrder: (state, action) => {
      const {order, modifier} = action.payload;
      const existingOrder = state.orders.find(orderc =>
        areOrdersEqual(orderc, {order, modifier}),
      );

      if (existingOrder) {
        if (existingOrder.quantity > 1) {
          existingOrder.quantity -= 1;
        } else {
          state.orders = state.orders.filter(
            orderc => !areOrdersEqual(orderc, {order, modifier}),
          );
        }
      }
    },
    resetOrder: (state, action) => {
      console.log('action.payload', action.payload);
      state.orders = action.payload;
    },
    addUser: (state, action) => {
      console.log('Select.User', action.payload);

      state.user = action.payload;
    },
  },
});

export const {addOrder, removeOrder, resetOrder, addUser} =
  createOrderSlice.actions;

export default createOrderSlice.reducer;
