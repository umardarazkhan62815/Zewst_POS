import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from './Slices/LoginSlice';
import MenuReducer from './Slices/MenuSlice';
import OrderListReducer from './Slices/GetOrderSlice';
import CustomerListReducer from './Slices/GetCustomerSlice';
import ReservationListReducer from './Slices/GetReservationSlice';
import CreateOrderReducer from './Slices/CreateOrderSlice';
import EmployeeListReducer from './Slices/getEmployeeSlice';
export const store = configureStore({
  reducer: {
    login: LoginReducer,
    menu: MenuReducer,
    ordersList: OrderListReducer,
    customersList: CustomerListReducer,
    reservationList: ReservationListReducer,
    createOrder: CreateOrderReducer,
    employeeList: EmployeeListReducer,
  },
});
