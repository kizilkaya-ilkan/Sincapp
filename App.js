import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/login';
import logo from './src/screen/logo';
import register from './src/screen/register';
import main from './src/screen/Main';



const Stack = createNativeStackNavigator()
const App= () => {

  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="LogoScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen}
      options={{headerShown: false}}
      />
      <Stack.Screen name="LogoScreen" component={logo}
       options={{headerShown: false}}
      />
       <Stack.Screen name="RegisterScreen" component={register}
       options={{headerShown: false}}
      />
       <Stack.Screen name="Users" component={main}
       options={{headerShown: false}}
      />
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
