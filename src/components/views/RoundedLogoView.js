import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import variables, {height_screen, width_screen} from '../../utils/utils';

import {LOGO, LOGO_BACKGROUND} from '../../constants/constants';

function RoundedLogoView(props) {
  return (
    <ImageBackground
      style={styles.main}
      source={LOGO_BACKGROUND}
      imageStyle={styles.innerContainer}>
      <Image source={LOGO} style={styles.imageContainer} />
    </ImageBackground>
  );
}

export default RoundedLogoView;
const styles = StyleSheet.create({
  main: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: width_screen,
    resizeMode: 'stretch',
  },

  imageContainer: {width: 135, height: 135, resizeMode: 'contain'},
});
