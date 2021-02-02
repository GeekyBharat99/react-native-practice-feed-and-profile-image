import React from 'react';
import {StyleSheet, Image, ScrollView, View, Text} from 'react-native';
import {Appbar, Avatar, IconButton, Button, Divider} from 'react-native-paper';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import StoryAvatar from '../components/storyAvatar';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import FeedImage from '../components/FeedImage';
import VideoPlayer from '../components/VideoPlayer';

const Feed = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Appbar.Header style={{backgroundColor: '#fff', shadowColor: '#fff'}}>
        <Appbar.Action
          icon={'menu'}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Appbar.Content title="Feed" style={{alignItems: 'center'}} />
        <Appbar.Action icon="magnify" />
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Avatar.Image
              style={{
                margin: 18,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }}
              backgroundColor={'white'}
              size={50}
              source={{
                uri:
                  'https://icon-library.com/images/plus-icon-transparent/plus-icon-transparent-5.jpg',
              }}
            />
            <StoryAvatar
              link={
                'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              }
              userName={'Jade'}
            />
            <StoryAvatar
              link={
                'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              }
              userName={'Jaadu'}
            />
            <StoryAvatar
              link={
                'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              }
              userName={'Maddy'}
            />
            <StoryAvatar
              link={
                'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              }
              userName={'Zuck'}
            />
            <StoryAvatar
              link={
                'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              }
              userName={'Maddy'}
            />
            <StoryAvatar
              link={
                'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              }
              userName={'Zuck'}
            />
          </ScrollView>
        </View>
        <VideoPlayer></VideoPlayer>
        <FeedImage
          ImageLink={
            'https://i.pinimg.com/originals/31/69/61/316961ca27c14dd1f0fc7d851597bb76.jpg'
          }
        />
        <FeedImage
          ImageLink={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fztsXyb19ZAThiijzfQEihe5o6B8wagOtQ&usqp=CAU'
          }
        />
        <FeedImage
          ImageLink={
            'https://i.pinimg.com/originals/31/69/61/316961ca27c14dd1f0fc7d851597bb76.jpg'
          }
        />
        <FeedImage
          ImageLink={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fztsXyb19ZAThiijzfQEihe5o6B8wagOtQ&usqp=CAU'
          }
        />
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    marginLeft: '9%',
    marginRight: '10%',
  },
});
