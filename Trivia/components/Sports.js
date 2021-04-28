import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, CheckBox} from 'react-native-elements';
import {useState} from 'react';

let answers = [
    {
        id: 1,
        name:"Brazil",
        correct: false,
        checked: false,
    },
    {
        id: 2,
        name: "England",
        correct: false,
        checked: false,
    },
    {
        id: 3,
        name: "Uruguay",
        correct: true,
        checked: false,
    },
    {
        id: 4,
        name: "Germany",
        correct: false,
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

export default function Sports(){

    const [score, setScore] = useState(0)

    let checkAnswer = (itemCorrect) => {
        if (itemCorrect===true){
            setScore(score + 10)
    } else{
        console.log("wrong answer")
    }
}

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>What country won the first World Cup?</Text>
            {answers.map((item)=> (
                <Button title={item.name} onPress={()=> checkAnswer(item.correct)}></Button>
            ))}
            <Text style={styles.text}>{score}</Text>    
        </View>
    )

}