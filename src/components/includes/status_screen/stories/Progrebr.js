import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProgressBar } from 'react-native-stories-view';



const Progrebr = () => {
  return (
   <>
   <ProgressBar
   images={['','']}
   onChange={() => {}}
   progressIndex={0}
   enableProgress={true}
   duration={20} 
   barStyle={{
      barActiveColor: 'red',
      barInActiveColor: 'blue',
      barWidth: 100, 
      barHeight: 4
   }}
/>

   </>
  )
}

export default Progrebr

const styles = StyleSheet.create({})