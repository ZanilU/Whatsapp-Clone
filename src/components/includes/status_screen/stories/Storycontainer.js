import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StoryContainer } from 'react-native-stories-view';

const Storycontainer = () => {
    const data = [
        {
          id: 1,
          image: require('../../../Assets/images/profile_image.png'),
          name: 'Zanil',
          message: 'Hello',
          time: '12:30 A M',
        },
        {
          id: 2,
          image: require('../../../Assets/images/profile_image.png'),
          name: 'Afsal',
          message: 'Hello',
          time: '12:30 A M',
        },
        {
          id: 3,
          image: require('../../../Assets/images/profile_image.png'),
          name: 'Shaam',
          message: 'Hello',
          time: '12:30 A M',
        },
        {
          id: 4,
          image: require('../../../Assets/images/profile_image.png'),
          name: 'Shiyas',
          message: 'Hello',
          time: '12:30 A M',
        },
        {
          id: 5,
          image: require('../../../Assets/images/profile_image.png'),
          name: 'Vysak',
          message: 'Hello',
          time: '12:30 A M',
        },
        {
          id: 6,
          image: require('../../../Assets/images/profile_image.png'),
          name: 'Zanil',
          message: 'Hello',
          time: '12:30 A M',
        },
        {
          id: 7,
          image: require('../../../Assets/images/profile_image.png'),
          name: 'Zanil',
          message: 'Hello',
          time: '12:30 A M',
        },
        {
          id: 8,
          image: require('../../../Assets/images/profile_image.png'),
          name: 'Zanil',
          message: 'Hello',
          time: '12:30 A M',
        },
    ]
  return (
  <>
  <View>
    <Text>Zanil</Text>
  </View>
    {data.map(item => (
  <StoryContainer
   visible={true}
   enableProgress={true}
   images={['']}
   duration={20}  
   onComplete={() => alert("onComplete")}
   containerStyle={{
       width: '100%',
       height: '100%',
   }}
   
/>
     ))}
  </>
  )
}

export default Storycontainer

const styles = StyleSheet.create({})