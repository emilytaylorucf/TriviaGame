import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, CheckBox} from 'react-native-elements';
import {useState} from 'react';

let answers = [
    {
        id: 1,
        name:"Leonardo Da Vinci",
        correct: true,
        checked: false,
    },
    {
        id: 2,
        name: "Michelangelo",
        correct: false,
        checked: false,
    },
    {
        id: 3,
        name: "Donatello",
        correct: false,
        checked: false,
    },
    {
        id: 4,
        name: "Auguste Rodin",
        correct: false,
        checked: false,
    }
]




export default function Arts(){
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
            <Text style={{fontSize: 40}}>Which famous painter was also a sculptor, artist, and engineer?</Text>
            {answers.map((item)=> (
                <Button title={item.name} onPress={()=> checkAnswer(item.correct)}></Button>
            ))}
            
            <Text style={{fontSize: 30}}>{score}</Text>
            
        </View>
    )

}