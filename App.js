import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();


import Main from "./components/Main";
import Search from './components/Search';



const App = ({ navigation }) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/* statusbar */}
      <StatusBar style="light" backgroundColor='#234aa8' />
    </>

  )
}


export default App;