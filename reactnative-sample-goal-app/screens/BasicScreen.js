import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function BasicScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Line Number One!</Text>
      <Text style={styles.textStyle}>Line Number Two!</Text>
      <Button title='Tap Me'></Button>
      <StatusBar style="auto" title='Home Screen' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    margin: 16, 
    borderWidth: 2, 
    borderColor: 'red', 
    padding: 16
  }
});
