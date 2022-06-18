import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabview from './src/components/includes/package/Tabview';
import Home from './src/components/includes/Chat-Screen/Home';
import Status from './src/components/includes/status_screen/Status';
import Newcall from './src/components/includes/call_screen/Newcall';
import Photostatus from './src/components/includes/status_screen/Photostatus';
import Storiesview from './src/components/Storiesview';
import Chatscreen from './src/components/includes/Chat-Screen/Chatscreen';
import Profileimage from './src/components/includes/Chat-Screen/Profileimage';

const App = () => {
  const message = [
		{
			id: 1,
			name: 'Zanil',
			message: 'Hello',
			recieve: 'hi'
		},
		{
			id: 2,
			name: 'Afsal',
			message: 'Hello',
			recieve: 'hi'
			
		},
  ]
  const Stack = createNativeStackNavigator();

  return (
    <>
     <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabView" component={Tabview} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="newcall" component={Newcall} />
        <Stack.Screen name="firstPhoto" component={Photostatus} />
        <Stack.Screen name="storr" component={Storiesview} />
        <Stack.Screen name="chatt" component={Chatscreen} />
        <Stack.Screen name="prof" component={Profileimage} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})