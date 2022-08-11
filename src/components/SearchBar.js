import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" size={30} color="black" />
            <TextInput 
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.inputStyle} 
                placeholder="Search" 
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)} //onTermChange = setTerm //1
                onEndEditing={onTermSubmit} // onTermSubmit = searchApi //2
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#D9D9D9',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row', //makes child elements to show up on the same line
    },
    inputStyle: {
        flex: 1, //use the entire horizontal space
        marginLeft: 10,
        fontSize: 18
    },
    iconStyle:{
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 15
    }
});

export default SearchBar;

//1 onChangeText -> built in function that passes to the function the input text as parameter

//2 onEndEditing -> built in function that detects the end of an action and triggers a function
