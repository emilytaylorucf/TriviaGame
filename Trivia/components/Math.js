import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, CheckBox} from 'react-native-elements';
import {useState} from 'react';

let answers = [
    {
        id: 1,
        name:"82",
        correct: false,
        checked: false,
    },
    {
        id: 2,
        name: "2",
        correct: true,
        checked: false,
    },
    {
        id: 3,
        name: "14",
        correct: false,
        checked: false,
    },
    {
        id: 4,
        name: "46",
        correct: false,
        checked: false,
    }
]


const styles = StyleSheet.create(
    {
        ArtButtons: {
            backgroundColor: "#76c893",
            fontFamily: "Trebuchet MS",
            alignContent: 'center',
            padding: 5, 
          },
      text: {
        color: '#168aad',
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

export default function Math(){
    let [score, setScore] = useState(0)
    const [text, setText] = useState("")
    let checkAnswer = (itemCorrect) => {
        if (itemCorrect===true){
            setScore(score + 10)
            setText("Your answer is correct!")
    } else{
            setText("Your answer is incorrect. Try again.")
    }
}

 
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>Which answer below is the only even prime number?</Text>
            {answers.map((item)=> (
                <Button buttonStyle={styles.ArtButtons} title={item.name} onPress={()=> checkAnswer(item.correct)}></Button>
            ))}
            
            <Text style={styles.text}>Points Earned: {score}</Text>
            <Text style={styles.text}>{text}</Text>
            
        </View>
    )

}