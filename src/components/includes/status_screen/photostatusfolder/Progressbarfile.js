import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProgressBar } from 'react-native-stories-view';

const Progressbarfile = () => {
  return (
    <ProgressBar
    images={['','']}
    onChange={() => {}}
    progressIndex={0}
    enableProgress={true}
    duration={20} 
    barStyle={{
       barActiveColor: 'white',
       barInActiveColor: 'green',
       barWidth: 100, 
       barHeight: 4
    }}
 />
  )
}

export default Progressbarfile

const styles = StyleSheet.create({})