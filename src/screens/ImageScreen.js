import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageSource={require('../../assets/img/forest.jpg')} score="23"/>
        <ImageDetail title="Beach" imageSource={require('../../assets/img/beach.jpg')} score="43"/>
        <ImageDetail title="Mountain" imageSource={require('../../assets/img/mountain.jpg')} score="33"/>
        </View>
}

const styles = StyleSheet.create(
    {
        textStyle : {

            fontSize: 23
    
        }
    }
) 
export default ImageScreen