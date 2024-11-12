import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from "@expo/vector-icons";

export default function ResetPassword({ navigation }) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Reset Password</Text>
        <Text style={styles.subtext}>
          Enter a new password
        </Text>
        <Text style={styles.passwordText}>New Password</Text>
        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <Feather name="lock" size={22} color="#7c8080" />
          </View>
          <TextInput
            style={styles.input}
            secureTextEntry={!isPasswordShown}
            placeholderTextColor="#7c8080"
            selectionColor="#000000"
          />
          <TouchableOpacity
            style={styles.passwordVisibleButton}
            onPress={() => setIsPasswordShown(!isPasswordShown)}
          >
            <Feather
              name={isPasswordShown ? "eye-off" : "eye"}
              size={20}
              color="#7c8080"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.passwordText}>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <Feather name="lock" size={22} color="#7c8080" />
          </View>
          <TextInput
            style={styles.input}
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
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 30,
  },
  text: {
    color: '#000000',
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 50,
    marginRight: "36%",
  },
  subtext: {
    color: '#7c8080',
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 70,
  },
  passwordText: {
    fontWeight: "bold",
    marginLeft: "10%",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 10,
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 50,
    paddingBottom: 5,
    borderRadius: 10,
    backgroundColor: "#E5E5E5",
    fontSize: 16,
  },
  passwordVisibleButton: {
    position: "absolute",
    right: 10,
  },
  customButton: {
    backgroundColor: '#00B140',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

