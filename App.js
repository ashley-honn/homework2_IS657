import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import bottom from "./bottom";


export default function App() {
   return (
     <View style={styles.container}>
       <Text style={{
        fontSize: 20,
        color: "white",
        textDecoration: "underline",
        margin: 20,
        fontWeight: "bold"
       }}>This is homework 2! By: Ashley Honn</Text>

       <View style={styles.box}>
         <Text style={{
           fontSize: 20,
           color: "black",
           fontWeight: "bold"
         }}>Column</Text>

       <View style={styles.anotherbox}>Child</View>
       <View style={styles.anotherbox}>Child</View>
       <View style={styles.anotherbox}>Child</View>
     </View>
     <View style={bottom.container}>
       <Text style={{
         fontSize: 20,
         color: "black",
        fontWeight: "bold",
        margin: 5
       }}>Row</Text>
       <View style={bottom.boxInside}>Child</View>
       <View style={bottom.boxInside}>Child</View>
       <View style={bottom.boxInside}>Child</View> 
       </View>
    </View>       
  );
};

