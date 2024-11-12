import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import HomeScreen from './screens/HomeScreen';
import LogIn from './screens/LogIn';  
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="LogIn" 
          component={LogIn}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="ResetPassword" 
          component={ResetPassword}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Login from './screens/Login';
import User from './screens/User';
import Welcome from './screens/Welcome';
import About from './screens/About';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/


