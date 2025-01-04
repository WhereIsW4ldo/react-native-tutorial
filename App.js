import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>This is some text I just edited!</Text>
        <Text>Another text block?</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
        <Text>Another text block in another view block?</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="DefaultValue of textInput"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
