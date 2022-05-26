import {StyleSheet, Text, Image, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {StoryContainer} from 'react-native-stories-view';
import Footer from './photostatusfolder/Footer';

const Photostatus = ({route,navigation}) => {
  const {name} = route.params;

  return (
    <StoryContainer
      visible={true}
      enableProgress={true}
      images={[
        'https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        'https://i.picsum.photos/id/672/1080/1920.jpg?hmac=sI0XyippRsLfYo8ZM6V4ZUwIJvCcb06wro7UewMB7x8',
        'https://images.unsplash.com/photo-1592743263126-bb241ee76ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80',
      ]}
      onComplete={() => alert('onComplete')}
      duration={30}
      headerComponent={
        <View
          style={{
            borderColor: '#fff',
            marginTop: 25,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(52, 52, 52, alpha)',
            justifyContent:'space-between',
          }}>

          <View style={{flexDirection: 'row',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('TabView')}>
            <View style={{width: 20, height: 20, marginRight: 10}}>
              <Image
                style={{width: '100%', height: '100%', marginRight: 10}}
                source={require('../../../Assets/images/back-arrow-status.png')}
              />
            </View>
            </TouchableOpacity>
            <View style={{width: 50, height: 50, marginRight: 10}}>
              <Image
                source={require('../../../Assets/images/profile_image.png')}
                style={{
                  width: '100%',
                  borderRadius: 50,
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View>
              <Text style={{color: '#fff', fontSize: 20}}>{name}</Text>
              <Text style={{color: '#fff'}}>online</Text>
            </View>
          </View>
          <View style={{width: 20, height: 20}}>
          <Image
                style={{width: '100%', height: '100%', marginRight: 10}}
                source={require('../../../Assets/images/dots_vertical.png')}
                tintColor="white"
              />
          </View>
        </View>
      }
      barStyle={{
        barActiveColor: 'white',
        barInActiveColor: '',
        barWidth: 100,
        barHeight: 3,
      }}
      // userProfile={{
      //   userImage: "https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      //   userName: 'Yuvraj Pandey S',
      //   userMessage: 'Work hard & success will follow !!',
      //   imageArrow: 'https://picsum.photos/200',
      //   onImageClick: () => {
      //     console.log('lskndclksnc');
      //     Alert.alert('User profile image tapped');
      //   },
      // }}
      footerComponent={<Footer />}
    />
  );
};

export default Photostatus;

const styles = StyleSheet.create({});
