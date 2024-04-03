import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function GoalsWithScrollviewScreen() {

  const [inputGoalData, setInputGoalData] = useState('Default')
  const [listOfGoals, setListOfGoals] = useState([])

  function addTextChanged(enteredText){
    setInputGoalData(enteredText)
  }

  function addTextPressed(){
    setListOfGoals((currentGoals) =>[
      ...currentGoals, inputGoalData
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputBox} 
          onChangeText={addTextChanged}
          placeholder='Enter your goal' >
            {inputGoalData}
        </TextInput>
        <Button title='Add Goal'
            onPress={addTextPressed}/>
      </View>
      <ScrollView style={styles.bottomContainer} alwaysBounceVertical = {false}>
        <View style={styles.lineBox} />
        <View>
          {listOfGoals.map((goal)=> 
              <View style={styles.rowBox}> 
                <Text style={styles.rowText}>{goal}</Text
              ></View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    marginTop: 80,
    marginHorizontal: 16,
  },
  inputContainer:{
    margin: 5,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputBox : {
    borderWidth: 1,
    borderColor: '#cccccc',
    flex: 1,
    padding: 8
  },
  lineBox:{
    height: 1,
    backgroundColor : '#cccccc',
    marginVertical: 5
  },
  bottomContainer:{
    flex: 1
  },
  rowBox: {
      backgroundColor: 'blue',
      padding: 7,
      marginVertical: 2,
      borderRadius: 3
  },
  rowText:{
    color: 'white',
    marginLeft: 5
  }
});
