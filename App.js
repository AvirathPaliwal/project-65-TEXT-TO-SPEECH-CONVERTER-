import * as React from 'react';
import * as Speech from 'expo-speech';
import { Text, View, StyleSheet, TextInput, Image,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import  {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
     name: '',
    };
  }

  speak=()=> {
    var thingToSay = this.state.name
    Speech.speak(thingToSay);
  }
  render(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Header
        backgroundColor={'#212121'}
        leftComponent={{ icon: 'menu',size:30, color: '#14ffec' }}
       rightComponent={{ icon: 'home', size:30,color: '#14ffec'}}
        centerComponent={{text: 'TEXT  TO  SPEECH  COVERTER',style: { color: '#14ffec', fontSize: 30,fontWeight: 'bold' },
        }}/>

      <Image
        style={styles.imageIcon}
        source={require('./pronunciation.jpg')}/>

      <Text style={styles.title}>Enter the word</Text>

      <TextInput
        style={styles.inputBox}
        onChangeText={text => {
          this.setState({ name:text});
        }}
        value={this.state.text}
      />

      <TouchableOpacity style={styles.button}
        onPress={()=>{this.speak()}}>
        <Text style={styles.buttonText}>Click Here to hear Speech</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaProvider>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000000',
  },
  inputBox:{
    marginTop: 25,
    width: '80%',
    textAlign: 'center',
    height: 40,
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius:50,
    backgroundColor:'#212121',
    color:'#14ffec',
    fontSize:30,
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15
  },
  title:{
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 17
  },
  button:{
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 100,
   backgroundColor: '#323232',
    padding: 5,
    width: 300,
    height:70,
    borderWidth: 3
  },
  buttonText:{
    alignSelf: "center",
    marginTop:10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color:'#14ffec'

  }
  
});
