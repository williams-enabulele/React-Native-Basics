import React, {useState} from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
    const [ password, setPassword ] = useState('');
 
    return <View>
        <Text>Enter Password</Text>
        <TextInput 
         style = { styles.input}
         autoCapitalize="none"
         autoCorrect={false}
         placeholder= "... start typing "
         onChangeText = {(newValue) => setPassword(newValue)}
         ></TextInput>

         <Text>Typed Password : {password}</Text>
         { password.length < 4 ? <Text>Password must be longer than 5 characters</Text>: null}
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 25,
        borderColor: 'black',
        borderWidth: 1,
        height: 35,
        paddingLeft: 15
        
    }
});

export default TextScreen;

