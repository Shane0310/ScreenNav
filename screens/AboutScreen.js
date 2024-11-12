import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function AboutScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent:"center",
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:16,
    textAlign: "center",
    justifyContent:"center"
  },
});
