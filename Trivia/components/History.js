import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import {useState} from 'react';

let answers = [
    {
        id: 1,
        name:"1914",
        correct: false,
    },
    {
        id: 2,
        name: "1921",
        correct: false,
    },
    {
        id: 3,
        name: "1969",
        correct: false,
    },
    {
        id: 4,
        name: "1912",
        correct: true,
    }
]

const styles = StyleSheet.create(
    {
        HistoryButtons: {
            backgroundColor: "#1a759f",
            fontFamily: "Trebuchet MS",
            alignContent: 'center',
            padding: 15, 
          },
      text: {
        color: '#184e77',
        fontFamily: 'Trebuchet MS',
        fontSize: 30,
        padding: 20
      },
      view: {
        alignItems: 'center', 
        justifyContent: 'center',
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
        <View style={styles.view}>
            <Text style={styles.text}>In what year did the Titanic sink?</Text>
            {answers.map((item)=> (
                <Button buttonStyle={styles.HistoryButtons} title={item.name} onPress={()=> checkAnswer(item.correct)}></Button>
            ))}
            <Text style={styles.text}>Points Earned: {score}</Text>
            <Text style={styles.text}>{text}</Text>      
        </View>
    )
    
}