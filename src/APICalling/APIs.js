import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://zewst-pos-backend-dev-d20eb67f9e62.herokuapp.com';

const api = axios.create({
  baseURL: BASE_URL,
});

export const loginApi = async data => {
  try {
    console.log('Code', data);
    const response = await api.post(`/auth/signIn`, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMenuItems = async postData => {
  try {
    const auth = await AsyncStorage.getItem('auth');
    const token = await AsyncStorage.getItem('Token');

    const result = JSON.parse(auth);
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const response = await api.get(
      `/menu/menuItems/findByPOS/${result?.posDevice?.id}`,
      {
        headers: {
          token: token,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Menu Error', error?.response?.data?.message);
    if (error?.response?.data?.message === 'Token has expired') {
      RefreshToken();
    }

    throw new Error(error);
  }
};
export const getOrders = async bId => {
  try {
    const token = await AsyncStorage.getItem('Token');

    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const response = await api.get(`/order/findByBranch/${bId}`, {
      headers: {
        token: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log('getOrder Error', error);
    throw new Error(error);
  }
};

export const RefreshToken = async () => {
  try {
    const auth = await AsyncStorage.getItem('auth');

    const result = JSON.parse(auth);
    console.log('result?.token?.token', result?.token?.refreshToken);
    const response = await api.post('/auth/refreshToken', {
      token: result?.token.refreshToken,
    });
    console.log('RefreshToken-Response', response?.data);
  } catch (error) {
    console.log('RefreshToken-Error', error?.response?.data);
  }
};

export const CreateCustomer = async data => {
  try {
    const auth = await AsyncStorage.getItem('auth');
    const token = await AsyncStorage.getItem('Token');

    const result = JSON.parse(auth);
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const response = await api.post(`/customer/create`, data, {
      headers: {
        token: token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('CreateCustomer Error', error.response.data);
    return error.response.data;
  }
};

export const getCustomers = async bId => {
  try {
    const auth = await AsyncStorage.getItem('auth');
    const token = await AsyncStorage.getItem('Token');

    const result = JSON.parse(auth);
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const response = await api.get(`/customer/findCustomersByBranch/${bId}`, {
      headers: {
        token: token,
      },
    });
    // console.log('getCustomers_Response', response.data);
    return response.data;
  } catch (error) {
    console.log('getOrder Error', error);
    throw new Error(error);
  }
};

export const editCustomer = async data => {
  try {
    const auth = await AsyncStorage.getItem('auth');
    const token = await AsyncStorage.getItem('Token');
    console.log('Token', token);
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }

    const response = await api.post(`/customer/update`, data, {
      headers: {
        token: token,
      },
    });
    console.log('editCustomer_Response', response.data);
    return response.data;
  } catch (error) {
    console.log('editCustomer Error', error?.response?.data);
    return error?.response?.data;
  }
};

export const getReservation = async bId => {
  try {
    const auth = await AsyncStorage.getItem('auth');
    const token = await AsyncStorage.getItem('Token');

    const result = JSON.parse(auth);
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }
    console.log('IDDDD', bId);
    const response = await api.post(
      `/reservations/getServices/findByBranch/${bId}`,
      {},
      {
        headers: {
          token: token,
        },
      },
    );
    console.log('getReservation_Response', response.data);
    return response.data;
  } catch (error) {
    console.log('getReservation Error', error.response?.data);
    throw new Error(error);
  }
};

export const createOrder = async data => {
  console.log('DAta', JSON.stringify(data));
  try {
    const token = await AsyncStorage.getItem('Token');
    if (!token) {
      throw new Error('Token not found in AsyncStorage');
    }
    const response = await api.post(`/order/create`, data, {
      headers: {
        token: token,
      },
    });
    // console.log('createOrder response', response?.data);
    return response.data;
  } catch (error) {
    console.log('createOrder Error', error.response.data);
    return error.response.data;
  }
};
