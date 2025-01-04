import React, {useState} from 'react';
import {Text, View, Image, ScrollView, Button} from 'react-native';

const Cat = () => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
        }}
        style={{width: 200, height: 200}}
        />
      <Text>I am a cat, and I am {isHungry ? 'hungry': 'full'}</Text>
      <Button
        onPress={() => {
          setIsHungry(!isHungry);
        }}
        title={isHungry ? 'Give me some food please!' : 'Thank you for feeding me!'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <ScrollView>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </ScrollView>
  )
}

export default Cafe;
