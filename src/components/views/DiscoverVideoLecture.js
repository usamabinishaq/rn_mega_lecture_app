import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {DISCOVER} from '../../constants/constants';
import variables, {width_screen} from '../../utils/utils';
import BasicText from '../text/BasicText';
import Heading from '../text/Heading';

function DiscoverVideoLecture({onPress}) {
  return (
    <View style={styles.disocverView}>
      <ImageBackground
        source={DISCOVER}
        style={styles.backgroundImage}
        imageStyle={{borderRadius: 12}}>
        <Icon
          name={'play-circle-outline'}
          size={50}
          color={variables.colorWhite}
          onPress={onPress}
        />
      </ImageBackground>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Heading
          fontFamily={variables.interFontRegular}
          size={variables.fontSizePSmall}
          color={variables.fontColorMain}>
          {'Fahad H. Ahmad'}
        </Heading>
        <BasicText
          size={variables.getSize(12)}
          color={variables.colorFontDark}
          fontFamily={variables.interFontRegular}
          style={styles.description}>
          {
            'Fahad Hameed has been part of Pakistan’s education sector since 2010 and during this time he has taught at multiple private school schools of Islamabad. With more than 10 years of O and A-levels Chemistry teaching experience, students find Fahad Hameed’s lectures enjoyable and easy to understand.'
          }
        </BasicText>
      </View>
    </View>
  );
}

export default DiscoverVideoLecture;
const styles = StyleSheet.create({
  disocverView: {
    width: width_screen * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: variables.getSize(193),
    marginVertical: '2.5%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    maxWidth: '100%',
    textAlign: 'justify',
    lineHeight: 15,
    marginTop: '2.5%',
  },
});
