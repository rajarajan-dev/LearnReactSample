import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  Button,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function addMyGoalHandler(){
      setModelIsVisible(true);
  }

  function endMyGoalHandler(){
    setModelIsVisible(false);
}

  function onAddGoal(enteredText) {
    let randomNumber = Math.random().toString();
    if (listOfGoals === undefined) {
      console.log("List of goals is undefined");
    } else {
      setListOfGoals((currentGoals) => [
        ...currentGoals,
        { text: enteredText, id: randomNumber },
      ]);
    }
    endMyGoalHandler();
  }

  function onDeleteGoal(id) {
    setListOfGoals((listOfGoals) => {
      return listOfGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#FFff00" // Change the background color as needed
        barStyle="light-content" // Change the text color (light or dark)
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.appContainer}>
          <Button title="Add a Goal" onPress={addMyGoalHandler} />
          <GoalInput visible={modelIsVisible} onAddGoal={onAddGoal} endMyGoalHandler={endMyGoalHandler} />
          <View style={styles.bottomContainer} alwaysBounceVertical={false}>
            <FlatList
              data={listOfGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteGoal={onDeleteGoal}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            ></FlatList>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 10,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
