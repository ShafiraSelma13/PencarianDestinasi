import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import GaleriScreen from './src/screens/GaleriScreen';
import JatimScreen from './src/screens/JatimScreen';
import JabarScreen from './src/screens/JabarScreen';
import JatengScreen from './src/screens/JatengScreen';
import BaliScreen from './src/screens/BaliScreen';
import LombokScreen from './src/screens/LombokScreen';
import PapuaScreen from './src/screens/PapuaScreen';


const Stack = createStackNavigator();

const HomeRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} > 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: ' Tugas Akhir Aplikasi Mobile Berbasis Web ' }}
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


  </View>
);

const GaleryRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Galeri"
          component={GaleriScreen}
          options={{ title: ' Tugas Akhir Aplikasi Mobile Berbasis Web ' }}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
  );


  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home' },
    { key: 'galery', title: 'Galery' },
  ]);

  const renderScene = SceneMap({
    home: HomeRoute,
    galery: GaleryRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
