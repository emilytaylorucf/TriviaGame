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
        MathButtons: {
            backgroundColor: "#1e6091",
            fontFamily: "Trebuchet MS",
            alignContent: 'center',
            padding: 15, 
          },
      text: {
        color: '#184e77',
        fontFamily: 'Trebuchet MS',
        fontSize: 30,
        padding: 20,
      },
      view: {
        alignItems: 'center', 
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
        <View style={styles.view}>
            <Text style={styles.text}>Which answer below is the only even prime number?</Text>
            {answers.map((item)=> (
                <Button buttonStyle={styles.MathButtons} title={item.name} onPress={()=> checkAnswer(item.correct)}></Button>
            ))}
            
            <Text style={styles.text}>Points Earned: {score}</Text>
            <Text style={styles.text}>{text}</Text>
            
        </View>
    )

}