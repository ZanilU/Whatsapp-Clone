import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Chatscreen = ({route, navigation}) => {
  const [number, onChangeNumber] = React.useState(null);
  const {name} = route.params;
  const {image} = route.params;

  return (
    <>
      <View style={{flex: 1, position: 'relative'}}>
        <ImageBackground
          source={require('../../../Assets/images/ic-log-in-background.png')}
          resizeMode="cover"
          style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#298069',

              width: '100%',
              height: 80,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '45%',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
               onPress={() => navigation.navigate('TabView')}
              >
                <View style={{width: 20, height: 20, margin: 5}}>
                  <Image
                    style={{width: '100%', height: '100%', marginRight: 20}}
                    source={require('../../../Assets/images/back-arrow-status.png')}
                  />
                </View>
              </TouchableOpacity>
              <View style={{width: 50, height: 50, marginRight: 5}}>
                <Image
                  style={{width: '100%', height: '100%', borderRadius: 100}}
                  source={image}
                />
              </View>
              <Text style={{color: 'white', fontSize: 20}}>{name}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '45%',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={{width: 30, height: 20, marginRight: 10}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../../Assets/images/vedio.png')}
                  tintColor="white"
                />
              </View>
              <View style={{width: 30, height: 20, marginRight: 10}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../../Assets/images/calls.png')}
                  tintColor="white"
                />
              </View>
              <View style={{width: 30, height: 20}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../../Assets/images/dots_vertical.png')}
                  tintColor="white"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: 100,
              height: 40,
              backgroundColor: '#fff',
              position: 'absolute',
              bottom: 140,
              marginLeft: 20,
              borderRadius: 5,
            }}>
            <Text style={{color: 'green', marginLeft: 10}}>{name}</Text>
            <Text style={{marginLeft: 10}}>Heloo</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 40,
              backgroundColor: '#fff',
              position: 'absolute',
              bottom: 80,
              marginLeft: 20,
              borderRadius: 5,
            }}>
            <Text style={{color: 'green', marginLeft: 10}}>{name}</Text>
            <Text style={{marginLeft: 10}}>Hi</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.left}>
              <View style={{width: 20, height: 20}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../../Assets/images/smile.png')}
                />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="  Message"
                keyboardType="numeric"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 100,
                  position: 'absolute',
                  right: 4,
                }}>
                <View style={{width: 20, height: 20}}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../../../Assets/images/search-icon.png')}
                  />
                </View>
                <View style={{width: 20, height: 20}}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../../../Assets/images/icons8-rupee-65.png')}
                  />
                </View>
                <View style={{width: 20, height: 20}}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../../../Assets/images/photo-camera.png')}
                  />
                </View>
              </View>
              <View style={styles.right}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../../Assets/images/voice-green.png')}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Chatscreen;

const styles = StyleSheet.create({
  input: {
    color: '#000',
    height: 40,
    width: '100%',
  },
  right: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '87%',
    borderRadius: 20,
    backgroundColor: 'white',
  },
});
