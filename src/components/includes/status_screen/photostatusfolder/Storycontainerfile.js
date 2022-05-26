import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StoryContainer } from 'react-native-stories-view';

const Storycontainerfile = () => {
  return (
   <>
   <StoryContainer
   visible={true}
   enableProgress={true}
   images={['https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80','https://i.picsum.photos/id/672/1080/1920.jpg?hmac=sI0XyippRsLfYo8ZM6V4ZUwIJvCcb06wro7UewMB7x8','https://images.unsplash.com/photo-1592743263126-bb241ee76ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80']}
   duration={20}  
   onComplete={() => alert("onComplete")}
   containerStyle={{
       width: '100%',
       height: '100%',
   }}
/>

   </>
  )
}

export default Storycontainerfile

const styles = StyleSheet.create({})