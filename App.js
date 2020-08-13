import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [enteredNum, setEnderedNum] = useState(0);
  let matched = false;

  const checkNum = () => {
    let randomNum = 9999;
    if (randomNum == enteredNum) {
      matched = true;
      alert("Hurrah!, It matched");
    } else {
      matched = false;
      alert("Alas!, Please try again");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, Sajeel</Text>
      <View style={styles.main}>
        <TextInput
          style={styles.inputField}
          placeholder='Enter The Number'
          keyboardType='number-pad'
          value={enteredNum}
          onChangeText={(e) => {
            setEnderedNum(e);
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Button title='Guess' onPress={checkNum} />
        </TouchableOpacity>
      </View>

      <StatusBar style='dark' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  main: {},
  inputField: {
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    paddingBottom: 13,
    margin: 10,
    width: 150,
  },
  button: { margin: 10, marginBottom: 0 },
});

export default App;
