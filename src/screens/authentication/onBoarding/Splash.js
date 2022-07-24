import React from 'react';
import {Image, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import LOGOSVG from '../../assets/images/logo_splash.svg';

import {LOGO} from '../../../constants/constants';
import variables, {height_screen, width_screen} from '../../../utils/utils';
import styles from './style';

function Splash({navigation}) {
  return (
    <LinearGradient
      colors={[variables.colorLightSkyBlue, variables.colorWhite]}
      style={styles.linearGradient}>
      <StatusBar
        backgroundColor={variables.colorLightSkyBlue}
        barStyle={'dark-content'}
      />
      <Image source={LOGO} style={styles.logoStyle} />
      {/* <LOGOSVG width={width_screen * 0.5} height={height_screen} /> */}
    </LinearGradient>
  );
}

export default Splash;
