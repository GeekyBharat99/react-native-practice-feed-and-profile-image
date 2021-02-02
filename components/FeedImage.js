import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Appbar, Avatar, IconButton, Button, Divider} from 'react-native-paper';

const FeedImage = ({ImageLink}) => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image
          style={styles.image}
          source={{
            uri: ImageLink,
          }}></Image>
      </View>
      <View style={styles.margin}>
        <View style={styles.infoRow}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar.Image
              size={45}
              source={{
                uri:
                  'https://www.orfonline.org/wp-content/uploads/2019/05/modi-black-mr1.jpg',
              }}
            />
            <Text style={{color: 'grey', fontSize: 18, margin: 10}}>Namo</Text>
          </View>

          <Text
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: 22,
              color: 'grey',
            }}>
            ...
          </Text>
        </View>
      </View>

      <View style={styles.margin}>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            marginLeft: 5,
            marginTop: 3,
          }}>
          Started my memory wall yesterday!
        </Text>
      </View>
      <View style={styles.likeCommentRow}>
        <Button
          color={'grey'}
          icon={() => (
            <Image
              source={{
                uri:
                  'https://lh3.googleusercontent.com/proxy/_CK0WQQgySRJ2PkUa03Ic43EGxqqV6i2oD1CWq4ALRv8n_f6-yvwopiIGXXlfekAqscxH9iWKXzItYhy5UFishoABw',
              }}
              style={{
                width: 20,
                height: 20,
              }}
            />
          )}>
          82
        </Button>
        <Button
          color={'grey'}
          icon={() => (
            <Image
              source={{
                uri:
                  'https://www.nicepng.com/png/full/28-280444_simple-grey-bubble-simple-gray-bubble-png-image.png',
              }}
              style={{
                width: 20,
                height: 20,
              }}
            />
          )}>
          7
        </Button>
        <Text style={{color: 'grey'}}>- 12m ago</Text>
      </View>
      <Divider style={styles.divider} />
    </View>
  );
};

export default FeedImage;

const styles = StyleSheet.create({
  divider: {
    width: 100,
    height: 1,
    marginLeft: '11%',
    marginRight: '10%',
    backgroundColor: 'grey',
  },
  likeCommentRow: {
    marginLeft: '7%',
    marginRight: '10%',
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 12,
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    marginTop: 20,
    width: '85%',
    height: 200,
    borderRadius: 20,
  },
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
