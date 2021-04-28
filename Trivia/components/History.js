import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, CheckBox} from 'react-native-elements';
import {useState} from 'react';

let answers = [
    {
        id: 1,
        name:"1914",
        correct: false,
        checked: false,
    },
    {
        id: 2,
        name: "1921",
        correct: false,
        checked: false,
    },
    {
        id: 3,
        name: "1969",
        correct: false,
        checked: false,
    },
    {
        id: 4,
        name: "1912",
        correct: true,
        checked: false,
    }
]

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

export default function History(){

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
            <Text style={styles.text}>In what year did the Titanic sink?</Text>
            {answers.map((item)=> (
                <Button title={item.name} onPress={()=> checkAnswer(item.correct)}></Button>
            ))}
            <Text style={styles.text}>Points Earned: {score}</Text>
            <Text style={styles.text}>{text}</Text>      
        </View>
    )
    
}