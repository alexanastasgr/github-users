import { StyleSheet, Alert, TouchableOpacity, Image, Text, View, TextInput } from 'react-native';
import { useState,useEffect } from 'react';


import logo from '../assets/github.png';

export default function Main({ navigation }) {

  const [query, setQuery] = useState('')

  // update the state
  const handleQuery = (text) => {
    setQuery(text)
  }


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <View>
        <TextInput
          onChangeText={handleQuery}
          style={styles.query} placeholder='Your Query' value={query}></TextInput>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Search', { query })}
        >
          <Text style={{ fontSize: 22, color: '#fff' }}>Search</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 200
  },
  query: {
    width: 220,
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    textAlign: 'center'
  }, button: {
    width: 220,
    height: 50,
    backgroundColor: '#234aa8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 100
  }
});
