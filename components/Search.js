import { StyleSheet, Alert, TouchableOpacity, Image, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import User from './User';

import axios from 'axios';
export default function Search({ navigation }) {
    const route = useRoute();

    const [results, setResults] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {

        axios.get(`https://api.github.com/search/users?q=${route.params.query}`)
            .then(resp => {
                setCount(resp.data.total_count)
                setResults(resp.data.items)
            })


    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.results}>
                <Text style={{ fontSize: 13, color: '#fff' }}>I found <Text style={{ fontWeight: '800' }}>{count}</Text> users with this criteria.</Text>
            </View>

            <ScrollView contentContainerStyle={styles.userlist}> 
                {
                    results.map((user) => {
                        return <User
                            key={user.login}
                            login={user.login}
                            avatar={user.avatar_url} />
                    })
                }     
      
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2a3135'
    },
    logo: {
        resizeMode: 'contain',
        width: 200
    },
    results: {
        width: '100%',
        height: 30,
        backgroundColor: '#234aa8',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 999
    },
    userlist: {
        width: '100%',


        paddingTop: 50,
        paddingBottom: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#2a3135'
    }
});
