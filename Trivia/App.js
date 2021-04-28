import * as React from 'react';
import {useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import Arts from './components/Arts';

function HomeScreen({navigation}) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 30}}>Trivia</Text>
      <Button title="Arts" onPress={() => navigation.navigate('Arts')}></Button>
      <Button title="Sports" onPress={() => navigation.navigate('Sports')}></Button>
      <Button title="Science" onPress={() => navigation.navigate('Science')}></Button>
      <Button title="History" onPress={() => navigation.navigate('History')}></Button>
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
      <Text>Sports Screen</Text>
      <Button title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}

function ScienceScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Science Screen</Text>
      <Button title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}

function HistoryScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>History Screen</Text>
      <Button title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}


const Stack = createStackNavigator();

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
