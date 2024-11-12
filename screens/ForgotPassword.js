import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Feather } from "@expo/vector-icons";

export default function ForgotPassword({navigation}){
    return(
      
       <View style={styles.container}>
          <Text style={styles.text}>Forgot Password</Text>
            <Text style={styles.subtext}>
            Select which contact details should we use to reset your password
            </Text>
            <Text style={styles.emailText}>Enter your Email</Text>
            <View style={styles.inputContainer}>
                <View style={styles.icon}>
                <Feather name="mail" size={22} color="#7c8080" />
            </View>
            <TextInput style={styles.input}
                selectionColor="#00B140"
                margin="5"
            />
            </View>
            <Text style={styles.phoneNumber}>Enter your Phone Number</Text>
            <View style={styles.inputContainer}>
                <View style={styles.icon}>
                <Feather name="phone" size={22} color="#7c8080" />
            </View>
            <TextInput style={styles.input}
                selectionColor="#00B140"
                margin="5"
            />
            </View>
            <TouchableOpacity
                style={styles.customButton}
                onPress={() => navigation.navigate("ResetPassword")}>

                <Text style={styles.buttonText}>Continue</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton}
                onPress={() => navigation.navigate("LogIn")}
            >
                <Text style={styles.registerButtonText}>
                Remember Password? 
                <Text style={styles.registerButtonTextHighlight}>Login</Text>
                </Text>
            </TouchableOpacity>
        </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 30,
  },
  text: {
    color: '#000000',
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 90,
    marginRight: "35%",
  },
  subtext: {
    color: '#7c8080',
    fontSize: 18,
    lineHeight: 24,
    margin: 10,
    marginBottom: 40,
  },
  emailText: {
    fontWeight: "bold",
    marginRight: "42%",
    fontSize: 16,
  },
  phoneNumber: {
    fontWeight: "bold",
    marginRight: "27%",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 15,
    padding: 15,
  },
  icon: {
    margin: 5,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    paddingBottom: 5,
    borderRadius: 5,
    backgroundColor: "#E5E5E5",
    fontSize: 16,
  },
  customButton: {
    backgroundColor: '#00B140',
    paddingVertical: 15,
    paddingHorizontal: 140,
    borderRadius: 10,
    marginTop: 80,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerButton: {
    alignSelf: "center",
    marginTop: 40,
  },
  registerButtonText: {
    fontSize: 16,
    color: "#7c8080",
  },
  registerButtonTextHighlight: {
    fontSize: 16,
    color: "#32CD32",
    fontWeight: "500"
  },
})