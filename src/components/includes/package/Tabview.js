import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Chat-Screen/Home';
import Status from '../status_screen/Status';
import Newcall from '../call_screen/Newcall';



const Tabview = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
      const renderScene = SceneMap({
        first: Home,
        second: Status,
        third: Newcall,
      });
      const layout = useWindowDimensions();
      const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Chat' },
    { key: 'second', title: 'Status' },
    { key: 'third', title: 'Call' },

  ]);
  return (
      <>
       <View style={styles.Header}>
        <View style={styles.top}>
          <View style={styles.Left}>
            <Text style={styles.Heading}>WhatsApp</Text>
          </View>
          <View style={styles.right}>
            <View style={styles.searchicon_container}>
              <Image
                style={styles.search_icon}
                source={require('../../../Assets/images/whitesearch.png')}
              />
            </View>
            <View style={styles.dots_container}>
              <Image
                style={styles.dots_vertical}
                source={require('../../../Assets/images/dots_vertical.png')}
                tintColor="white"
              />
            </View>
          </View>
        </View>
      </View>
    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width }}
    renderTabBar={props => (
        <TabBar
          {...props}
          style={styles.tabItem}
          indicatorStyle={{backgroundColor: '#fff'}}
          tabStyle={styles.bubble}
          labelStyle={styles.noLabel}
        />
      )}
  />
  </>
  )
}

export default Tabview

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#298069',
        paddingLeft: 20,
        paddingTop: 20,
      },
      red: {
        backgroundColor:'red',
      },
      right: {
        flexDirection: 'row',
        justifyContent:"space-between"
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
        width: 20,
        height: 20,
      },
      dots_container: {
        width: 30,
        height: 25,
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
        borderBottomWidth: 1,
        borderBottomColor: 'red',
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
        fontSize: 20,
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
      tabItem: {
        backgroundColor: '#298069' ,
      },
      camera_Icon_container: {
        width: 30,
        height: 30,
      },
})