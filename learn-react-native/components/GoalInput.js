import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [inputTextData, setInputTextData] = useState("");

  function onTextChanged(enteredText) {
    setInputTextData(enteredText);
  }

  function onAddGoal() {
    props.onAddGoal(inputTextData);
    setInputTextData("");
  }
  return (
    <Modal
      style={{ backgroundColor: "#ff0000" }}
      animationType="slide"
      visible={props.visible}
    >
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={require("../assets/images/goal.png")}
            style={styles.image} />
        </View>
        <TextInput
          style={styles.inputBox}
          onChangeText={onTextChanged}
          placeholder="Enter your goal"
        >
          {inputTextData}
        </TextInput>
        <View style={styles.buttonContiner}>
          <View style={styles.button}>
            <Button title="Close" onPress={props.endMyGoalHandler} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoal} color='#b180f0'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: '#311b6b'
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 8,
    padding: 8,
    margin: 8,
    color: '#120438'
  },
  buttonContiner: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-around",
    marginTop: 16,
  },
  button: {
    width: "40%",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  imageContainer :{
    justifyContent : 'center',
    alignItems: 'center'
  }

});
