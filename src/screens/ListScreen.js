import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const ListScreen = () => {
    const friends = [
        {
            name: 'Friends #1',
            key: '1',
            age: 200
        },
        {
            name: 'Friends #2',
            key: '2',
            age: 150
        },
        {
            name: 'Friends #3',
            key: '3',
            age: 45
        },
        {
            name: 'Friends #4',
            key: '4',
            age: 34
        },
        {
            name: 'Friends #5',
            key: '5',
            age: 13
        },
        {
            name: 'Friends #6',
            key: '6',
            age: 56
        },
        {
            name: 'Friends #7',
            key: '7',
            age: 34
        },
        {
            name: 'Friends #8',
            key: '8',
            age: 24
        },
        {
            name: 'Friends #9',
            key: '9',
            age: 65
        },
        {
            name: 'Friends #10',
            key: '10',
            age: 37
        },
    ]

    return <FlatList
        keyExtractor={friend => friend.key}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styles.item}>{item.name} - age :  {item.age}</Text>
        }}></FlatList>
};

const styles = StyleSheet.create({
    item: {
        padding: 15,
        fontSize: 15

    }
});

export default ListScreen;