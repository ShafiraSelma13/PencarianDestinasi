import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import JatimScreen from './src/screens/JatimScreen';
import JabarScreen from './src/screens/JabarScreen';
import JatengScreen from './src/screens/JatengScreen';
import BaliScreen from './src/screens/BaliScreen';
import LombokScreen from './src/screens/LombokScreen';
import PapuaScreen from './src/screens/PapuaScreen';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: ' Tugas Akhir Mobile Web ' }}
          />
           <Stack.Screen
          name="Jawa Timur"
          component={JatimScreen}
          />
           <Stack.Screen
          name="Jawa Barat"
          component={JabarScreen}
          />
           <Stack.Screen
          name="Jawa Tengah"
          component={JatengScreen}
          />
           <Stack.Screen
          name="Bali"
          component={BaliScreen}
          />
          <Stack.Screen
          name="Lombok"
          component={LombokScreen}
          />
          <Stack.Screen
          name="Papua"
          component={PapuaScreen}
          />
        
        
         
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default MainApp;