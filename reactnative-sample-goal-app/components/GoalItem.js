import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteGoal.bind(this, props.id)}
      android_ripple={{ color: "#ccc", borderless: true }}
      style={({pressed})=> pressed && styles.rowPressIn}
    >
      <View style={styles.rowBox}>
        <Text style={styles.rowText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
  rowPressIn:{
    opacity : 0.5
  }
});
