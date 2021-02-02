import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View>
      <Video
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }} // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref;
        }} // Store reference
        // Callback when video cannot be loaded
        // style={styles.backgroundVideo}
      />
    </View>
  );
};

export default VideoPlayer;
