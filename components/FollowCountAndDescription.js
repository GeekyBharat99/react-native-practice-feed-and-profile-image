import {View} from 'native-base';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
const FollowCountAndDescription = ({
  PostCount,
  FollowrsCount,
  FollowingCount,
}) => {
  return (
    <View>
      <View style={styles.FollowCountRow}>
        <View>
          <Text style={styles.FollowCount}>{PostCount}</Text>
          <Text style={styles.FollowString}>Posts</Text>
        </View>
        <View>
          <Text style={styles.FollowCount}>{FollowrsCount}</Text>
          <Text style={styles.FollowString}>Followers</Text>
        </View>
        <View>
          <Text style={styles.FollowCount}>{FollowingCount}</Text>
          <Text style={styles.FollowString}>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default FollowCountAndDescription;

const styles = StyleSheet.create({
  FollowCountRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  FollowCount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
  },
  FollowString: {
    color: 'grey',
    fontSize: 14,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
