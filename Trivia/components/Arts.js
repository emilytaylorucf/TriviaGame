import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import {useState} from 'react';

let answers = [
    {
        id: 1,
        name:"Leonardo Da Vinci",
        correct: true,
    },
    {
        id: 2,
        name: "Michelangelo",
        correct: false,
    },
    {
        id: 3,
        name: "Donatello",
        correct: false,
    },
    {
        id: 4,
        name: "Auguste Rodin",
        correct: false,
    }
]


const styles = StyleSheet.create(
    {
        ArtButtons: {
            backgroundColor: "#76c893",
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
        justifyContent: 'center',
        flex: 1,
      },
    }
  )

export default function Arts(){
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
            <Text style={styles.text}>Which famous painter was also a sculptor, artist, and engineer?</Text>
            {answers.map((item)=> (
                <Button buttonStyle={styles.ArtButtons} title={item.name} onPress={()=> checkAnswer(item.correct)}></Button>
            ))}
            
            <Text style={styles.text}>Points Earned: {score}</Text>
            <Text style={styles.text}>{text}</Text>
            
        </View>
    )

}