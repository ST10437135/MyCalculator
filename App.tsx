import React, { useState } from "react";
import { View, TextInput, Text, TouchableHighlight, StyleSheet } from "react-native";

export default function Calculator() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("");

  function calculate(operation: string) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid Input");
      return;
    }

    switch (operation) {
      case "+":
        setResult((n1 + n2).toString());
        break;
      case "-":
        setResult((n1 - n2).toString());
        break;
      case "*":
        setResult((n1 * n2).toString());
        break;
      case "/":
        setResult(n2 !== 0 ? (n1 / n2).toString() : "Cannot divide by zero");
        break;
      default:
        setResult("Unknown Operation");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>My Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => calculate("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => calculate("-")}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => calculate("*")}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => calculate("/")}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableHighlight>
      </View>
      <Text style={styles.resultText}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  headingText:{
    padding: 14,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#dc2f02",
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
