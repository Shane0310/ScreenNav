import React from 'react';
import { StyleSheet, text, View, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/hello.gif")} 
                style={{
                    height: 250,
                    width: 250,
                    marginTop: 50,
                    marginBottom: 30
                }}/> 
        </View>
    )
}