// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const BASE_URL = 'https://zewst-pos-backend-dev-d20eb67f9e62.herokuapp.com';

// const api = axios.create({
//   baseURL: BASE_URL,
// });

// export const loginApi = async data => {
//   try {
//     console.log('Code', data);
//     const response = await api.post(`/auth/signIn`, data);
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const getMenuItems = async postData => {
//   try {
//     const auth = await AsyncStorage.getItem('auth');
//     const token = await AsyncStorage.getItem('Token');

//     const result = JSON.parse(auth);
//     if (!token) {
//       throw new Error('Token not found in AsyncStorage');
//     }

//     const response = await api.get(
//       `/menu/menuItems/findByPOS/${result?.posDevice?.id}`,
//       {
//         headers: {
//           token: token,
//         },
//       },
//     );
//     return response.data;
//   } catch (error) {
//     console.log('Menu Error', error?.response?.data?.message);
//     if (error?.response?.data?.message === 'Token has expired') {
//       RefreshToken();
//     }

//     throw new Error(error);
//   }
// };
// export const getOrders = async bId => {
//   try {
//     const token = await AsyncStorage.getItem('Token');

//     if (!token) {
//       throw new Error('Token not found in AsyncStorage');
//     }

//     const response = await api.get(`/order/findByBranch/${bId}`, {
//       headers: {
//         token: token,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.log('getOrder Error', error);
//     throw new Error(error);
//   }
// };

// export const RefreshToken = async () => {
//   try {
//     const auth = await AsyncStorage.getItem('auth');

//     const result = JSON.parse(auth);
//     console.log('result?.token?.token', result?.token?.refreshToken);
//     const response = await api.post('/auth/refreshToken', {
//       token: result?.token.refreshToken,
//     });
//     console.log('RefreshToken-Response', response?.data);
//   } catch (error) {
//     console.log('RefreshToken-Error', error?.response?.data);
//   }
// };

// export const CreateCustomer = async data => {
//   try {
//     const auth = await AsyncStorage.getItem('auth');
//     const token = await AsyncStorage.getItem('Token');

//     const result = JSON.parse(auth);
//     if (!token) {
//       throw new Error('Token not found in AsyncStorage');
//     }

//     const response = await api.post(`/customer/create`, data, {
//       headers: {
//         token: token,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log('CreateCustomer Error', error.response.data);
//     return error.response.data;
//   }
// };

// export const getCustomers = async bId => {
//   try {
//     const auth = await AsyncStorage.getItem('auth');
//     const token = await AsyncStorage.getItem('Token');

//     const result = JSON.parse(auth);
//     if (!token) {
//       throw new Error('Token not found in AsyncStorage');
//     }

//     const response = await api.get(`/customer/findCustomersByBranch/${bId}`, {
//       headers: {
//         token: token,
//       },
//     });
//     // console.log('getCustomers_Response', response.data);
//     return response.data;
//   } catch (error) {
//     console.log('getOrder Error', error);
//     throw new Error(error);
//   }
// };

// export const editCustomer = async data => {
//   try {
//     const auth = await AsyncStorage.getItem('auth');
//     const token = await AsyncStorage.getItem('Token');
//     console.log('Token', token);
//     if (!token) {
//       throw new Error('Token not found in AsyncStorage');
//     }

//     const response = await api.post(`/customer/update`, data, {
//       headers: {
//         token: token,
//       },
//     });
//     console.log('editCustomer_Response', response.data);
//     return response.data;
//   } catch (error) {
//     console.log('editCustomer Error', error?.response?.data);
//     return error?.response?.data;
//   }
// };

// export const getReservation = async bId => {
//   try {
//     const auth = await AsyncStorage.getItem('auth');
//     const token = await AsyncStorage.getItem('Token');

//     const result = JSON.parse(auth);
//     if (!token) {
//       throw new Error('Token not found in AsyncStorage');
//     }
//     console.log('IDDDD', bId);
//     const response = await api.post(
//       `/reservations/getServices/findByBranch/${bId}`,
//       {},
//       {
//         headers: {
//           token: token,
//         },
//       },
//     );
//     console.log('getReservation_Response', response.data);
//     return response.data;
//   } catch (error) {
//     console.log('getReservation Error', error.response?.data);
//     throw new Error(error);
//   }
// };

// export const createOrder = async data => {
//   console.log('DAta', JSON.stringify(data));
//   try {
//     const token = await AsyncStorage.getItem('Token');
//     if (!token) {
//       throw new Error('Token not found in AsyncStorage');
//     }
//     const response = await api.post(`/order/create`, data, {
//       headers: {
//         token: token,
//       },
//     });
//     // console.log('createOrder response', response?.data);
//     return response.data;
//   } catch (error) {
//     console.log('createOrder Error', error.response.data);
//     return error.response.data;
//   }
// };
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://zewst-pos-backend-dev-d20eb67f9e62.herokuapp.com';

const api = axios.create({
  baseURL: BASE_URL,
});

const getTokenAndAuth = async () => {
  try {
    const token = await AsyncStorage.getItem('Token');
    const auth = await AsyncStorage.getItem('auth');
    if (!token || !auth) {
      throw new Error('Token or auth not found in AsyncStorage');
    }
    return {token, auth: JSON.parse(auth)};
  } catch (error) {
    console.error('Error retrieving token and auth from AsyncStorage:', error);
    throw error;
  }
};

export const loginApi = async data => {
  try {
    console.log('Login Data', data);
    const response = await api.post('/auth/signIn', data);
    return response.data;
  } catch (error) {
    console.error('Login API Error:', error);
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getMenuItems = async postData => {
  try {
    const {token, auth} = await getTokenAndAuth();
    const response = await api.get(
      `/menu/menuItems/findByPOS/${auth.posDevice?.id}`,
      {
        headers: {token},
      },
    );
    return response.data;
  } catch (error) {
    console.error(
      'Menu Items Error:',
      error.response?.data?.message || error.message,
    );
    if (error.response?.data?.message === 'Token has expired') {
      await refreshToken();
    }
    throw error;
  }
};

export const getOrders = async bId => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.get(`/order/findByBranch/${bId}`, {
      headers: {token},
    });
    return response.data;
  } catch (error) {
    console.error('Get Orders Error:', error.message);
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const {auth} = await getTokenAndAuth();
    const response = await api.post('/auth/refreshToken', {
      token: auth.token.refreshToken,
    });
    console.log('RefreshToken Response:', response.data);
    await AsyncStorage.setItem('Token', response.data.token);
  } catch (error) {
    console.error(
      'Refresh Token Error:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const createCustomer = async data => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.post('/customer/create', data, {
      headers: {token},
    });
    console.log('Create Customer Response:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Create Customer Error:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getCustomers = async bId => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.get(`/customer/findCustomersByBranch/${bId}`, {
      headers: {token},
    });
    return response.data;
  } catch (error) {
    console.error('Get Customers Error:', error.message);
    throw error;
  }
};

export const editCustomer = async data => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.post('/customer/update', data, {
      headers: {token},
    });
    console.log('Edit Customer Response:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Edit Customer Error:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getReservation = async bId => {
  try {
    const {token} = await getTokenAndAuth();
    console.log('Branch ID:', bId);
    const response = await api.post(
      `/reservations/getServices/findByBranch/${bId}`,
      {},
      {
        headers: {token},
      },
    );
    console.log('Get Reservation Response:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Get Reservation Error:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const createOrder = async data => {
  console.log('Create Order Data:', JSON.stringify(data));
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.post('/order/create', data, {
      headers: {token},
    });
    return response.data;
  } catch (error) {
    console.error('Create Order Error:', error.response?.data || error.message);
    throw error;
  }
};

export const getEmployees = async bId => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.get(`/employee/getAllEmployeesByPOSId/${bId}`, {
      headers: {token},
    });
    return response.data;
  } catch (error) {
    console.error('Get Employee Error:', error.response.data);
    throw error;
  }
};

export const getEmployeeDetails = async id => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.get(`/employee/getEmployeeDetails/${id}`, {
      headers: {token},
    });
    return response.data;
  } catch (error) {
    console.error('getEmployeeDetails Error:', error.response.data);
    throw error;
  }
};

export const getEmployeeDocs = async id => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.get(`/employee/getEmployeeDocs/${id}`, {
      headers: {token},
    });
    return response.data;
  } catch (error) {
    console.error('getEmployeeDocs Error:', error.response.data);
    throw error;
  }
};

export const getDepartmentsApi = async id => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.get(`/department/findByPOS/${id}`, {
      headers: {token},
    });
    return response.data;
  } catch (error) {
    console.error('getDepartmentsAPI Error:', error.response.data);
    throw error;
  }
};

export const getRolesApi = async () => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.get(`/role/findAll`, {
      headers: {token},
    });
    return response.data;
  } catch (error) {
    console.error('getRolesAPI Error:', error.response.data);
    throw error;
  }
};

export const createEmployee = async data => {
  // console.log('ASAD', data);
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.post('/employee/create', data, {
      headers: {token},
    });
    // console.log('createEmployee Response:', response.data);
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error('createEmployee Error:', error.response?.data);
  }
};

export const editEmployee = async data => {
  // console.log('Updated Data', data);
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.post('/employee/update', data, {
      headers: {token},
    });
    console.log('editEmployee Res:', response.data);
    return response.data;
  } catch (error) {
    console.error('editEmployee Error:', error.response?.data);

    return error.response?.data;
  }
};

export const uploadDocument = async data => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.post('/upload', data, {
      headers: {'Content-Type': 'multipart/form-data', token},
    });
    console.log('uploadDocument Res:', response.data);
    return response.data;
  } catch (error) {
    console.error('uploadDocument Error:', error.response?.data);

    return error.response?.data;
  }
};

export const removeDocument = async data => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.post('/employee/removeDocument', data, {
      headers: {token},
    });
    console.log('removeDocument Res:', response.data);
    return response.data;
  } catch (error) {
    console.error('removeDocument Error:', error.response?.data);

    return error.response?.data;
  }
};

export const attachDocumentAPI = async data => {
  try {
    const {token} = await getTokenAndAuth();
    const response = await api.post('/employee/attachDocument', data, {
      headers: {token},
    });
    console.log('attachDocument Res:', response.data);
    return response.data;
  } catch (error) {
    console.error('attachDocument Error:', error.response?.data);

    return error.response?.data;
  }
};
