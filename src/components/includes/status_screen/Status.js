import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Status = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Afsal',
      message: 'No updates',
    },
    {
      id: 2,
      image: require('../../../Assets/images/zan.jpeg'),
      name: 'Zanil',
      message: 'Hello',
    },
    {
      id: 3,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Shaam',
      message: 'Hello',
    },
    {
      id: 4,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Shiyas',
      message: 'Hello',
    },
    {
      id: 5,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Vysak',
      message: 'Hello',
    },
    {
      id: 6,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
    },
    {
      id: 7,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
    },
    {
      id: 8,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
    },
    {
      id: 9,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
    },
    {
      id: 10,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
    },
    {
      id: 11,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
    },
    {
      id: 12,
      image: require('../../../Assets/images/profile_image.png'),
      name: 'Zanil',
      message: 'Hello',
    },
  ];
  return (
    <ScrollView style={{marginTop:15}}>
      {data.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.push('firstPhoto', {
              name: item.name,
              image: item.image,
            })
          }>
          <View key={item.id} style={styles.statuscontainer}>
            <LinearGradient
              colors={['#bc2a8d', '#e95950', '#fccc63']}
              style={styles.linearGradient}>
              <Image style={styles.statusimage} source={item.image} />
              <Text style={styles.username}>{item.name}</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Status;

const styles = StyleSheet.create({
  linearGradient: {
    padding: 2,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statuscontainer: {
    width: 74,
    height: 100,
    padding: 5,
  },
  statusimage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 4,
  },
  username: {
    textAlign: 'center',
    marginLeft: 5,
  },
});
