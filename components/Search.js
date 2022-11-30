import { StyleSheet,Alert,TouchableOpacity, Image,Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';


export default function Search({navigation}) {
    const route = useRoute();


  return (
    <View style={styles.container}>
        <View style={styles.results}>
            <Text style={{fontSize:13,color:'#fff'}}>I found <Text style={{fontWeight:'800'}}>100</Text> users with name {route.params.query}</Text>
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
  logo:{
    resizeMode:'contain',
    width:200
  },
  results:{
    width:'100%',
    height:30,
    backgroundColor:'#234aa8',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:0
  }
});
