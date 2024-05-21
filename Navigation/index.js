import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login';
import Home from '../Screens/Home/Home';
import Payment from '../Screens/Payment/Payment';
import PaymentSuccess from '../Screens/PaymentSuccess/PaymentSuccess';
import Transcation from '../Screens/Transaction/Transcation';
import Reservation from '../Screens/Reservation/Reservation';
import Report from '../Screens/Reports/Reports';
import Reports from '../Screens/Reports/Reports';
import Employee from '../Screens/Employee/Employee';
import Setting from '../Screens/Setting/Setting';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        <Stack.Screen name="Transcation" component={Transcation} />
        <Stack.Screen name="Reservation" component={Reservation} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="Employee" component={Employee} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
