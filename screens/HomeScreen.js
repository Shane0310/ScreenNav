import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/location.png")} 
        style={{
          height: 200,
          width: 200,
          marginTop: 150,
          marginBottom: 30
        }}/> 
      </View>
      <Text style={styles.text}>RESTAURANTS NEAR ME!</Text>
      <Text style={styles.subtext}>
          Discover and book the best restaurants near your location. View menus, reviews, photos and choose from available dining times
      </Text>
      <TouchableOpacity
          style={styles.customButton}>
          <Text style={styles.buttonText}>Finding Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.locationButton}
          onPress={() => navigation.navigate("LogIn")}>
          <Text style={styles.locationText}>Do it later</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafd"
  },
  text: {
    color: '#000000',
    fontSize: 36,
    lineHeight: 40,
    padding: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    marginBottom: -10,
  },
  subtext: {
    color: '#000000',
    fontSize: 18,
    lineHeight: 24,
    padding: 10,
    margin: 10,
    textAlign: 'center',
  },
  customButton: {
    backgroundColor: '#00B140',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 10,
    marginTop: 110,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  locationButton: {
    paddingVertical: 15,
    paddingHorizontal: 144,
    borderRadius: 10,
    marginTop: 10,
  },
  locationText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

