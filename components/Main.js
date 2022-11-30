import { StyleSheet, Alert, TouchableOpacity, Image, Text, View, TextInput } from 'react-native';
import { useState, useEffect } from 'react';


import logo from '../assets/github.png';

export default function Main({ navigation }) {

  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  // update the state
  const handleQuery = (text) => {
    setQuery(text)
  }


  return (
    <View style={styles.container}>



      <View>
        <Image style={styles.logo} source={logo} />
      </View>

      <View>
        <TextInput
          onChangeText={handleQuery}
          style={styles.query} placeholder='Your Query'></TextInput>
        <TouchableOpacity style={styles.button}
          onPress={() =>
            query.length > 2 ? navigation.navigate('Search', { query }) : alert('Your query must have a least 3 letters')
          }
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
    justifyContent: 'space-evenly',
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
    marginTop: 10,
    marginBottom: 100
  }
});
