import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const reducer = ( state, action ) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + action.payload }
        case 'DECREMENT':
            return { ...state, count: state.count - action.payload  }
        default: 
            return state;   
    }
}


const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state;
    return <View>
        <Button title="Increase" onPress={() => {
           dispatch({ type: 'INCREMENT', payload: 1})
        } }/>
         <Button title="Decrease" onPress={() => {
            dispatch({ type: 'DECREMENT', payload: 1})
} }/>
        <Text>Current Count: {count} </Text>
    </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;