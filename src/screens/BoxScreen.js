import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const BoxScreen = () => {
    return <View style={styles.container}>
        <Text style={styles.textOneStyle}>Box Screen</Text>
        <Text style={styles.textTwoStyle}>Box Screen</Text>
        <Text style={styles.textThreeStyle}>Box Screen</Text>
    </View>
}

const styles = StyleSheet.create({
   container:  {
       flex : 1,
       flexDirection: 'row',
       //alignItems: 'center',
       justifyContent: 'space-between'
       
   },
   textOneStyle: {
       height: 50,
       backgroundColor: 'red',
       color: '#fff',
       padding: 15

   },
   textTwoStyle: {
    height: 50,
    backgroundColor: 'blue',
    color: '#fff',
    padding: 15,
    marginTop: 70,
    marginLeft: 15,
    marginRight: 15

},
textThreeStyle: {
    height: 50,
    backgroundColor: 'green',
    color: '#fff',
    padding: 15

}
});

export default BoxScreen