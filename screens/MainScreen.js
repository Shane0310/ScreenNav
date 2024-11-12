import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function MainScreen({navigation}){
    return(
       <View style={styles.container}>
            <View>
              <Image source={require("../assets/food.png")} 
                  style={{
                    height: 300,
                    width: 300,
                    borderRadius: 1000,
                    marginTop: 50,
               }}/> 
            </View>
          <Text style={styles.text}>Discover more delicious recipes</Text>
          <Text style={styles.subtext}>Unlock a Universe of Delectable Delights, From Timeless Classics to Modern Fusion Creations, 
            and Embrace the Thrill of Finding Your Next Irresistible Food Obsession</Text>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => navigation.navigate("LogIn")}>

            <Text style={styles.buttonText}>Let's Explore</Text>

          </TouchableOpacity>
        </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#00B140",
    alignItems: "center",
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 36,
    lineHeight: 40,
    padding: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    marginBottom: -10,
  },
  subtext: {
    color: 'white',
    fontSize: 18,
    lineHeight: 24,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    marginBottom: 40,
  },
  customButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    color: '#00B140',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});