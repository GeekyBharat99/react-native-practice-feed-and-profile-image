import {View} from 'native-base';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Appbar, Avatar, IconButton, Button, Divider} from 'react-native-paper';

const StoryAvatar = ({link, userName}) => {
  return (
    <View style={styles.padding}>
      <Avatar.Image
        style={styles.padding}
        backgroundColor={'white'}
        size={60}
        source={{
          uri: link,
        }}
      />
      <Text style={{textAlign: 'center'}}>{userName}</Text>
    </View>
  );
};

export default StoryAvatar;

const styles = StyleSheet.create({
  padding: {
    margin: 3,
    shadowColor: '#F70606',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
