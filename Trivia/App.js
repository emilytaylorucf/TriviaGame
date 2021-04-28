import * as React from 'react';
import {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import Arts from './components/Arts';
import Sports from './components/Sports';
import Science from './components/Science';
import History from './components/History';

function HomeScreen({navigation}) {
  
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Trivia</Text>
      <Button color="red" title="Arts" onPress={() => navigation.navigate('Arts')}></Button>
      <Button style={styles.buttons} title="Sports" onPress={() => navigation.navigate('Sports')}></Button>
      <Button style={styles.buttons} title="Science" onPress={() => navigation.navigate('Science')}></Button>
      <Button style={styles.buttons} title="History" onPress={() => navigation.navigate('History')}></Button>
    </View>
  );
}

function ArtsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Arts></Arts>
      <Button title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}

function SportsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Sports></Sports>
      <Button title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}

function ScienceScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Science></Science>
      <Button title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}

function HistoryScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <History></History>
      <Button title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}


const Stack = createStackNavigator();

const styles = StyleSheet.create(
  {
    buttons: {
      backgroundColor: '#bdb2ff',
      fontFamily: "Times New Roman"
    },
    text: {
      color: '#5e60ce',
      fontFamily: 'Trebuchet MS',
      fontSize: 30,
    },
    view: {
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#9bf6ff',
      flex: 1,
    },
  }
)

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Arts" component={ArtsScreen} />
        <Stack.Screen name="Sports" component={SportsScreen} />
        <Stack.Screen name="Science" component={ScienceScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
