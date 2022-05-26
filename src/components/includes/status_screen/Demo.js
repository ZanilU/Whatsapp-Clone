import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {StoryContainer} from 'react-native-stories-view';

const Demo = () => {
  return (
    <>
      // User Information in header
      {/* <StoryContainer
        visible={true}
        enableProgress={true}
        images={[""]}
        duration={20}
        onComplete={() => alert('onComplete')}
        userProfile={{
          // userImage: PROFILE,
          userName: 'Yuvraj Pandey',
          userMessage: 'Work hard & success will follow !!',
          imageArrow:
            'https://image.shutterstock.com/image-vector/user-interface-ui-ux-back-260nw-1414395617.jpg',
          onImageClick: () => {
            console.log('lskndclksnc');
            Alert.alert('User profile image tapped');
          },
        }}
      /> */}
	  <StoryContainer
		visible={true}
		enableProgress={true}
		images={[
			"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
			"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwemVhbGFuZCUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"]}
		duration={20}  
		onComplete={() => alert("onComplete")}
		containerStyle={{
			width: '100%',
			height: '100%',
		}}
		/>
    </>
  );
};

export default Demo;

const styles = StyleSheet.create({});
