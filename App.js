import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Area putih */}
      <View style={styles.top}>
        <View style={styles.row}>
          <View style={styles.red}></View>
          <View style={styles.blue}></View>
          <View style={styles.green}></View>
          <View style={styles.orange}></View>
        </View>
      </View>

      {/* Area abu abu */}
      <View style={styles.bottom}></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    backgroundColor: '#fff',
    marginTop: 60,
  },

  bottom: {
    flex: 1,
    backgroundColor: '#948f8f',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  red: {
    width: 60,
    height: 30,
    backgroundColor: 'red',
  },

  blue: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
  },

  green: {
    width: 110,
    height: 85,
    backgroundColor:'#1fd94d',
  },

  orange: {
    width: 120,
    height: 150,
    backgroundColor: 'orange',
  },
})