import logo from './logo.svg';
import './App.css';
import StyleSheet from 'react-native-media-query';
import { View } from 'react-native'

function App() {

  const {ids, styles} = StyleSheet.create({
    example: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        '@media (max-width: 1600px) and (min-width: 800px)': {
            backgroundColor: 'red',
        },
        '@media (max-width: 800px)': {
            backgroundColor: 'blue',
        },
    }
})


  return (
    <View >
      // sample 1
<View style={styles.example} dataSet={{ media: ids.example }} />
// sample 2
<View style={styles.example} data-media={ids.example} />
// sample 3
<div style={styles.example} data-media={ids.example} />
    </View>
  );
}

export default App;
