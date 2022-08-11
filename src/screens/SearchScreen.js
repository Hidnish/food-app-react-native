import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [fetchRes, setFetchRes] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'san jose'
                }
            });
            setFetchRes(res.data.businesses);
        } catch(err) {
            setErrorMessage('Something went wrong');
        }
    }

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text style={{ margin: 20, color: 'red'}}>{errorMessage}</Text> : null}
            <Text style={{ margin: 20 }}>
                We have found {fetchRes.length}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;