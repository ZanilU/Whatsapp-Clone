import {StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      image: require('../../../Assets/images/zan.jpeg'),
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
      image: require('../../../Assets/images/zan.jpeg'),
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
    {
      id: 9,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
      time: '12:30 A M',
    },
    {
      id: 10,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
      time: '12:30 A M',
    },
    {
      id: 11,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
      time: '12:30 A M',
    },
    {
      id: 12,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
      time: '12:30 A M',
    },
    {
      id: 13,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Moosa',
      message: 'Hello',
      time: '12:30 A M',
    },
  ];
  return (
    <ScrollView>
      {data.map(item => (
        <View style={styles.chat_section} key={item.id}>
          <View style={styles.left_portion}>
            <TouchableOpacity
            onPress={() => navigation.navigate('prof',{item})}
            >
            <View style={styles.profile_photo}>
              <Image style={styles.photo} source={item.image} />
            </View>
            </TouchableOpacity >
            <TouchableOpacity 
             key={item.id}
             onPress={() =>
               navigation.push('chatt', {
                 name: item.name,
                 image: item.image,
               })
             }>
            <View style={styles.text_portion}>
              <Text style={styles.username}>{item.name}</Text>
              <Text>{item.message}</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.right_portion}>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#298069',
    paddingLeft: 20,
    paddingTop: 20,
  },
  right: {
    flexDirection: 'row',
  },
  Heading: {
    fontSize: 25,
    color: '#fff',
  },
  search_icon: {
    width: '100%',
    height: '100%',
  },
  searchicon_container: {
    width: 40,
    height: 40,
  },
  dots_container: {
    width: 40,
    height: 40,
  },
  dots_vertical: {
    width: '100%',
    height: '100%',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 40,
    fontSize: 40,
    marginBottom: 10,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatstext: {
    color: '#fff',
  },
  statustext: {
    color: '#fff',
  },
  callstext: {
    color: '#fff',
  },
  chat_section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  left_portion: {
    flexDirection: 'row',
  },
  text_portion: {},
  username: {
    fontSize: SIZES.hp('2.5%'),
    fontWeight: '500',
  },
  profile_photo: {
    marginRight: 20,
    width: 50,
    height: 50,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  camera_icon: {
    width: '100%',
    height: '100%',
  },
  camera_Icon_container: {
    width: 30,
    height: 30,
  },
});
