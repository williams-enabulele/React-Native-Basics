import React from "react" 
import { Text,View, StyleSheet } from "react-native"

const ComponentsScreen = () => {
    const myName = "Williams"
    return <View>
        <Text style={styles.first}>Getting started with React Native!</Text>
        <Text style={styles.second}>My name is {myName}</Text>
    </View>
}

const styles = StyleSheet.create({
    first: {
        fontSize: 45
    },
    second: {
        fontSize: 25
    }
})

export default  ComponentsScreen