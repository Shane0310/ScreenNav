import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Image } from 'react-native';

export default function SignUp({navigation}) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
        }}
      >
        <View styles={styles.content}>
          <Text style={styles.title}>Getting Started</Text>
          <Text style={styles.subtext}>Create an account to continue</Text>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="user" size={22} color="#7c8080" />
            </View>
            <TextInput style={styles.input}
              placeholder="Username"
              placeholderTextColor="#7c8080"
              selectionColor="#000000"
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="mail" size={22} color="#7c8080" />
            </View>
            <TextInput style={styles.input}
              placeholder="Email"
              placeholderTextColor="#7c8080"
              selectionColor="#000000"
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="lock" size={22} color="#7c8080" />
            </View>
            <TextInput style={styles.input}
              placeholder="Password"
              secureTextEntry={!isPasswordShown}
              placeholderTextColor="#7c8080"
              selectionColor="#000000"
            />
            <TouchableOpacity
              style={styles.isPasswordShown}
              onPress={() => setIsPasswordShown(!isPasswordShown)}
            >
              <Feather
                name={isPasswordShown ? "eye-off" : "eye"}
                size={20}
                color="#7c8080"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="lock" size={22} color="#7c8080" />
            </View>
            <TextInput style={styles.input}
              placeholder=" Confirm Password"
              secureTextEntry={!isPasswordVisible}
              placeholderTextColor="#7c8080"
              selectionColor="#000000"
            />
            <TouchableOpacity
              style={styles.passwordVisibleButton}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <Feather
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={20}
                color="#7c8080"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signupButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.orLine} />
          </View>
          <TouchableOpacity style={styles.googleButton}
            nPress={() => Linking.openURL('https://accounts.google.com/')}
          >
            <Image style={styles.googleLogo} source={require('../assets/google-Logo.png')} />
            <Text style={styles.googleButtonText}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookButton}
            onPress={() => Linking.openURL('https://www.facebook.com/')}
          >
            <Image style={styles.facebookLogo} source={require('../assets/facebook-Logo.png')} />
            <Text style={styles.facebookButtonText}>Login with facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}
             onPress={() => navigation.navigate("LogIn")}
            >
              Already have an account? <Text style={styles.registerButtonTextHighlight}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

  },
  content: {
    paddingHorizontal: 30,
  },
  title: {
    color: "#000000",
    fontSize: 38,
    fontWeight: 'bold',
  },
  subtext:{
    fontSize: 20,
    marginBottom: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  icon: {
    margin: 5,
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 5,
    borderBottomColor: "#E5E5E5",
    fontSize: 16,
  },
  passwordVisibleButton: {
    position: "absolute",
    right: 0,
  },
  signupButton: {
    backgroundColor: "#00B140",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  signupButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  orLine: {
    height: 1,
    backgroundColor: "#CDCDCD",
    flex: 1,
  },
  orText: {
    color: "#787878",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
  },
  googleButton: {
    backgroundColor: "#dcdcdc",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  googleButtontext: {
    color: "#000000",
    fontSize: 16,
    fontWeight: '600',
    textAlign: "center",
  },
  googleLogo: {
    width: 20.03,
    height: 20.44,
    position: "absolute",
    left: 14,
  },
  facebookButton: {
    backgroundColor: "#dcdcdc",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  facebookLogo: {
    width: 20.03,
    height: 20.44,
    position: "absolute",
    left: 14,
  },
  facebookButtontext: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
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
});












