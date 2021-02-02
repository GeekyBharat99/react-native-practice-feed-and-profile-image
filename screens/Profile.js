import React from 'react';
import {StyleSheet, Image, ScrollView, View, Text} from 'react-native';
import {Appbar, Avatar, IconButton, Button, Divider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import FollowCountAndDescription from '../components/FollowCountAndDescription';
import FeedImage from '../components/FeedImage';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
        <Appbar.Header style={{backgroundColor: '#fff', shadowColor: '#fff'}}>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Appbar.Content style={{alignItems: 'center'}} />
        </Appbar.Header>
      </View>
      <View style={styles.PicCenter}>
        <Avatar.Image
          size={80}
          source={{
            uri:
              'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
        <Text style={styles.UserName}>Amelia</Text>
        <Text style={styles.BioText}>Lover of Photography and coffee!</Text>
      </View>
      <FollowCountAndDescription
        PostCount={276}
        FollowrsCount={498}
        FollowingCount={312}></FollowCountAndDescription>
      <View style={{marginTop: 15}}></View>
      <FeedImage
        ImageLink={
          'https://i.pinimg.com/originals/31/69/61/316961ca27c14dd1f0fc7d851597bb76.jpg'
        }></FeedImage>
      <FeedImage
        ImageLink={
          'https://i.pinimg.com/originals/31/69/61/316961ca27c14dd1f0fc7d851597bb76.jpg'
        }></FeedImage>
      <FeedImage
        ImageLink={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fztsXyb19ZAThiijzfQEihe5o6B8wagOtQ&usqp=CAU'
        }></FeedImage>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  PicCenter: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 15,
  },
  UserName: {
    marginTop: 2,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  BioText: {
    marginTop: 2,
    color: 'grey',
  },
});
