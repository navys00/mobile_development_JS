import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PointF from './pointF';
import PointS from './pointS';
import PointTrd from './pointTrd';
import PointFour from './pointFour';
import PointFive from './pointFive';
import PointSix from './pointSix';
export default function App() {
  return (
    <View style={styles.container}>
      <PointF></PointF>
      <PointS></PointS>
      <PointTrd></PointTrd>
      <PointFour></PointFour>
      <View style={{alignItems:'flex-end'}}><PointFive></PointFive></View>
      <PointSix></PointSix>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
