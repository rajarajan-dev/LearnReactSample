import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [inputGoalData, setInputGoalData] = useState("");
  const [listOfGoals, setListOfGoals] = useState([]);

  function addTextChanged(enteredText) {
    setInputGoalData(enteredText);
  }

  function addTextPressed() {
    setListOfGoals((currentGoals) => [
      ...currentGoals,
      { text: inputGoalData, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          onChangeText={addTextChanged}
          placeholder="Enter your goal"
        >
          {inputGoalData}
        </TextInput>
        <Button title="Add Goal" onPress={addTextPressed} />
      </View>
      <View style={styles.bottomContainer} alwaysBounceVertical={false}>
        <View style={styles.lineBox} />
        <FlatList
          data={listOfGoals}
          renderItem={(itemData) => (
            <View style={styles.rowBox}>
              <Text style={styles.rowText}>{itemData.item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 16,
  },
  inputContainer: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
    padding: 8,
  },
  lineBox: {
    height: 1,
    backgroundColor: "#cccccc",
    marginVertical: 5,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "column",
  },
  rowBox: {
    backgroundColor: "#5e0acc",
    padding: 8,
    margin: 8,
    marginVertical: 2,
    borderRadius: 3,
  },
  rowText: {
    color: "white",
    marginLeft: 5,
  },
});
