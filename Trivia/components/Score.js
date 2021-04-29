import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native-elements';
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

const styles = StyleSheet.create(
    {
        ScoreButtons: {
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
        textAlign: 'center',
      },
      view: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#9bf6ff',
        flex: 1,
      },
    }
  )

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
            this.setState({textDisplay: "Beginner"})
        }
        if(itemId===1){
            this.setState({textDisplay: "Beginner"})
        }
        if(itemId===2){
            this.setState({textDisplay: "Intermediate"})
        }
        if(itemId===3){
            this.setState({textDisplay: "Intermediate"})
        }
        if(itemId===4){
            this.setState({textDisplay: "Advanced"})
        }
        if(itemId===5){
            this.setState({textDisplay: "Supreme Trivia Winner!"})
        } else{
            this.state.textDisplay
        }
    }

    render(){
        return(
        <View>
            <Text style={styles.text}>Final Score!</Text>
            <Text style={styles.text}>Add up your points and see which level you earned!</Text>
            {this.state.points.map((item)=>
                <Button buttonStyle={styles.ScoreButtons} title = {item.name}  onPress={()=> this.addPoints(item.id)}></Button>
            )}
            <Text style={styles.text}>{this.state.textDisplay}</Text>
        </View>
        )
    }
}