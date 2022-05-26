import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Profileimage = ({route}) => {
    const {item}=route.params
  return (
    <View style={{width: '100%', height: '100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
       <Image style={{width: '100%', height: '100%'}}
        source={item.image}
      />
    </View>
  )
}

export default Profileimage

const styles = StyleSheet.create({})