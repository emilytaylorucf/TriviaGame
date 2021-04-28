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
import Math from './components/Math';



function HomeScreen({navigation}) {
  const score = 0
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Trivia</Text>
      <Button buttonStyle={styles.ArtButtons} title="Arts" onPress={() => navigation.navigate('Arts')}></Button>
      <Button buttonStyle={styles.SportsButtons} title="Sports" onPress={() => navigation.navigate('Sports')}></Button>
      <Button buttonStyle={styles.ScienceButtons} title="Science" onPress={() => navigation.navigate('Science')}></Button>
      <Button buttonStyle={styles.HistoryButtons} title="History" onPress={() => navigation.navigate('History')}></Button>
      <Button buttonStyle={styles.ArtButtons} title="Math" onPress={() => navigation.navigate('Math')}></Button>
    </View>
  );
}

function ArtsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Arts score = {score}></Arts>
      <Button buttonStyle={styles.ArtButtons} title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}

function SportsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Sports></Sports>
      <Button buttonStyle={styles.SportsButtons} title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}

function ScienceScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Science></Science>
      <Button buttonStyle={styles.ScienceButtons} title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}

function HistoryScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <History></History>
      <Button buttonStyle={styles.HistoryButtons} title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}

function MathScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Arts score = {score}></Arts>
      <Button buttonStyle={styles.ArtButtons} title="Return Home" onPress={()=> navigation.goBack()}></Button>
    </View>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create(
  {
    ArtButtons: {
      backgroundColor: "#76c893",
      fontFamily: "Trebuchet MS",
      alignContent: 'center',
      padding: 5, 
    },
    SportsButtons: {
      backgroundColor: "#34a0a4",
      fontFamily: "Trebuchet MS",
      alignContent: 'center',
      padding: 5, 
    },
    ScienceButtons: {
      backgroundColor: "#168aad",
      fontFamily: "Trebuchet MS",
      alignContent: 'center',
      padding: 5, 
    },
    HistoryButtons: {
      backgroundColor: "#1a759f",
      fontFamily: "Trebuchet MS",
      alignContent: 'center',
      padding: 5, 
    },
    text: {
      color: '#168aad',
      fontFamily: 'Trebuchet MS',
      fontSize: 30,
      textAlign: 'center',
    },
    view: {
      backgroundColor: "#ffffff"
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
        <Stack.Screen name="Math" component={MathScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
