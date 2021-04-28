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

export default class Arts extends React.Component{
    constructor(props){
        super(props)
        this.state = {answers}
    }

    checkItem = (itemId) => {
        this.setState((prevState) => {
            let prevList = prevState.answers
            let itemIndex = prevList.findIndex((item) => item.id == itemId)
            prevList[itemIndex] = {
                ...prevList[itemIndex],
                checked: !prevList[itemIndex].checked,
                correct: prevList[itemIndex].correct,
            }
            return {answers: [...prevList]}
          })
    }


    render(){
    return(
        <View>
            <Text style={{fontSize: 40}}>Which famous painter was also a sculptor, artist, and engineer?</Text>
            {answers.map((item)=> (
                <CheckBox title={item.name} onPress={()=> this.checkItem(item.id)} checked={item.checked} id={item.id} correct={item.correct}></CheckBox>
            ))}

            { this.state.answers.correct ? <Text>Your answer is correct!</Text> : undefined}

            
        </View>
    )
    }
}