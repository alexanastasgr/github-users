import React from 'react'
import { View,Image,Text,StyleSheet } from 'react-native'
function User(props) {
    return (
        <View style={styles.card}> 
           
            <Image style={{width:45,height:45,borderRadius:50}}source={{uri:props.avatar}}/>
             <Text>{props.login}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width:120,
        height:120,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f7fcff',
        margin:2
    }
})
export default User