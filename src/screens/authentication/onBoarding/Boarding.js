import React from 'react';
import {Image, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import LOGOSVG from '../../assets/images/logo_splash.svg';
import CustomButton from '../../../components/buttons/CustomButton';
import {LOGO} from '../../../constants/constants';
import variables, {height_screen, width_screen} from '../../../utils/utils';
import styles from './style';

function BoardingScreen({navigation}) {
  return (
    <LinearGradient
      colors={[variables.colorLightSkyBlue, variables.colorWhite]}
      style={styles.linearGradient}>
      <StatusBar
        backgroundColor={variables.colorLightSkyBlue}
        barStyle={'dark-content'}
      />
      <View style={styles.topContainer}>
        <Image source={LOGO} style={styles.logoStyle} />
      </View>
      <View style={{flex: 0.1}}>
        <CustomButton
          shadow={true}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          {'Get Started'}
        </CustomButton>
      </View>
      {/* <LOGOSVG width={width_screen * 0.5} height={height_screen} /> */}
    </LinearGradient>
  );
}

export default BoardingScreen;
