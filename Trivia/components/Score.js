import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, CheckBox} from 'react-native-elements';
import {useState} from 'react';


let points = [
    {
        id: 0,
        name: "0 Points"
    },
    {
        id: 1,
        name: "10 Points"
    },
    {
        id: 2,
        name: "20 Points"
    },
    {
        id: 3,
        name: "30 Points"
    },
    {
        id: 4,
        name: "40 Points"
    },
    {
        id: 5,
        name: "50 Points"
    }
]

export default class Score extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            score: this.props.score,
            finalScore: 0,
            points,
            textDisplay: "",
        }
    }
    addPoints(itemId) {
        if(itemId===0){
            this.state.textDisplay = "Beginner"
        }
        if(itemId===1){
            this.state.textDisplay = "Beginner"
        }
        if(itemId===2){
            this.state.textDisplay = "Intermediate"
        }
        if(itemId===3){
            this.state.textDisplay = "Intermediate"
        }
        if(itemId===4){
            this.state.textDisplay = "Advanced"
        }
        if(itemId===5){
            this.state.textDisplay = "Supreme Overlord"
        } else{
            this.state.textDisplay
        }
    }

    render(){
        return(
        <View>
            <Text>Final Score!</Text>
            <Text>Add up your points and see which level you earned!</Text>
            {this.state.points.map((item)=>
                <Button title = {item.name}  onPress={()=> this.addPoints(item.id)}></Button>
            )}
            <Text>{this.state.textDisplay}</Text>
        </View>
        )
    }
}