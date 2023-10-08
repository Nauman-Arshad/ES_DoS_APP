import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';
import { Platform } from 'react-native';
const Stack = createStackNavigator();
import { navigationRef } from './RootNavigation';
import Header from './Header';
import Footer from './Footer';
import AboutGlobo from './About';
import Quotepage from './Quote';
import NewsDetail from './NewsDetail';
import Catalogpage from './Catalog';
import CatalogDetail from './CatalogDetail';

export default function App() {
    return (
      <NavigationContainer
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
        ref={navigationRef}
      >
        <Stack.Navigator
          initialRouteName="Catalog"
          headerMode="screen"
        >
          <Stack.Screen
            name="Globomantics"
            component={Homepage}
            options={{
              header: () => <Header headerDisplay="Globomantics" />
            }}
          />
           <Stack.Screen
             name="About"
             component={AboutGlobo}
             options={{
             header: () => <Header headerDisplay="About Globomantics" />
           }}
           />
           <Stack.Screen
             name="Quote"
             component={Quotepage}
             options={{
             header: () => <Header headerDisplay="Get a quote" />
             }}
           />
           <Stack.Screen
              name="NewsDetail"
              component={NewsDetail}
              options={{
                 header: () => <Header headerDisplay="News" />
              }}
           />
            <Stack.Screen
              name="Catalog"
              component={Catalogpage}
              options={{
               header: () => <Header headerDisplay="Globomantics Robotics" />
              }}
            />
            <Stack.Screen
             name="CatalogDetail"
             component={CatalogDetail}
             options={{
              header: () => <Header headerDisplay="Product Information" />
               }}
              />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    );
}
