import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.temp}>6</Text>
       <Text style={styles.feels}>Feels like 5</Text>

       <View style={styles.highLowWrapper}>
          <Text style={styles.high}>High: 8</Text>
          <Text style={styles.low}>Low: 6</Text>
       </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
  },
  temp: {
    fontSize: 40,
    marginTop: 15,
    color: "#fff",
  },
  feels:{
    fontSize: 30,
    borderBottomColor: "#000"
  },
  highLowWrapper: {
    flexDirection: "row",
    color: "#000",
    fontSize: 20,
  },
  high: {
    fontSize: 40,
    color: "#fff",
  },
  low:{
    fontSize: 20,
  }
});
