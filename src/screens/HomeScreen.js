import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen =({navigation}) => {
  return <View>
    <Text style={styles.text}>Hi there</Text>
    <Button
    onPress={ () => navigation.navigate('Components')}
    title="Go To Components Demo"
    />
     <Button
    onPress={ () => navigation.navigate('List')}
    title="Go To List Demo"
    />
     <Button
    onPress={ () => navigation.navigate('ImageScreen')}
    title="Go To Image Screen"
    />
     <Button
    onPress={ () => navigation.navigate('Counter')}
    title="Go To Counter Screen"
    />
       <Button
    onPress={ () => navigation.navigate('Color')}
    title="Go To Color Screen"
    />
        <Button
    onPress={ () => navigation.navigate('Square')}
    title="Go To Square Screen"
    />
       <Button
    onPress={ () => navigation.navigate('Text')}
    title="Go To Text Input Screen"
    />
        <Button
    onPress={ () => navigation.navigate('Box')}
    title="Go To Box Screen"
    />
   {/* <TouchableOpacity onPress={ () => navigation.navigate('List ')}>
     <Text>Go to List Demo</Text>
   </TouchableOpacity> */}
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
 