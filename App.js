import React from "react";
import { ScrollView } from "react-native";
import {StyleSheet, View} from 'react-native';
import {Text} from "react-native";


  const App = () => {
    return(
      <View style={{flex:1}}>
         <View style={{
          width: '100%',
          height: 96,
          backgroundColor: 'skyblue'}} />
         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
         <Text> "Hello" </Text> 
         <View style={{flex: 1, backgroundColor: 'skyblue'}} />
      </View>
  );
}


export default App;
