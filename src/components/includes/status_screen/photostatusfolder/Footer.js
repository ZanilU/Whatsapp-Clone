import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.foot}>
      <View style={styles.replyimgcont}>
      <Image
        style={styles.tinyLogo}
        source={require('../../../../Assets/images/down-arrow.png')}
        tintColor="white"
      />
      </View>
      
      <Text style={styles.reply} >REPLY</Text> 
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  foot:{
    flexDirection:'column',
    alignItems:'center',
    marginBottom:30

  },
  replyimgcont:{
    width:20,
    transform: [
      { rotate: '180deg'},

    ],

  },
  tinyLogo:{
    width:'100%',
    height:'100%'
  },
  reply:{
    color:'#fff'
  }
  
})