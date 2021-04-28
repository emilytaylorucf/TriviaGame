import * as React from 'react';
import { View, Text } from 'react-native';
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
        correct: true,
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
        correct: false,
        checked: false,
    }
]

export default class History extends React.Component{
    constructor(props){
        super(props)
        this.state = {answers,}
    }

    checkItem = (itemId) => {
        this.setState((prevState) => {
            let prevList = prevState.answers
            let itemIndex = prevList.findIndex((item) => item.id == itemId)
            prevList[itemIndex] = {
                ...prevList[itemIndex],
                correct: prevList[itemIndex].correct,
            }
            return {answers: [...prevList]}
          })
    }

    checkAnswer = (itemCorrect) => {
        if (itemCorrect){
            return <Text>You are correct!</Text>
        } 
    }

    render(){
    return(
        <View>
            <Text style={{fontSize: 40}}>In what year did the Titanic sink?</Text>
            {answers.map((item)=> (
                <Button title={item.name} onPress={()=> this.checkAnswer(item.correct)} id={item.id}></Button>
            ))}
            

            
        </View>
    )
    }
}